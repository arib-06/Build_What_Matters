import type { Train, TrainClassAvailability } from '../types'
import { getSeatPositionForClass } from './berthAssignment'

export type SeatLayout = 'chair' | 'berth'
export type SeatState = 'available' | 'occupied' | 'requestable'

export interface CoachProfile {
  prefix: string
  count: number
  seatsPerCoach: number
  layout: SeatLayout
}

export interface SeatRecord {
  number: string
  state: SeatState
  position: string
}

export interface CoachInventory {
  id: string
  seats: SeatRecord[]
}

export interface SeatInventory {
  coaches: CoachInventory[]
  profile: CoachProfile
  totalCapacity: number
  availableSeats: number
  isRequestOnly: boolean
}

/** A seat map is meaningful only when the selected class has confirmed seats. */
export function hasConfirmedSeatInventory(trainClass: TrainClassAvailability): boolean {
  return trainClass.status === 'available' && (trainClass.seats ?? 0) > 0
}

/** A group can be allocated only when every traveller has a confirmed seat. */
export function canAssignSeats(trainClass: TrainClassAvailability, passengerCount: number): boolean {
  return hasConfirmedSeatInventory(trainClass) && (trainClass.seats ?? 0) >= Math.max(1, passengerCount)
}

export interface SeatAllocation {
  coachId: string
  seats: string[]
}

/**
 * Indicative rake profiles for the services in data.ts. Real coach formations
 * can change for a particular day, so this is intentionally labelled as a
 * planning model rather than a live coach-position feed.
 *
 * Standard capacities follow Indian Railways/RDSO coach specifications:
 * CC 78, EC 52, 1A 24, 2A 54, 3A 72, 3E 83, SL 72 and 2S 108 seats/berths.
 * References: https://rdso.indianrailways.gov.in/ and
 * https://contents.irctc.co.in/en/userRegTermsAndConditions.html
 */
const CLASS_DEFAULTS: Record<string, Omit<CoachProfile, 'count'>> = {
  '1A': { prefix: 'H', seatsPerCoach: 24, layout: 'berth' },
  '2A': { prefix: 'A', seatsPerCoach: 54, layout: 'berth' },
  '3A': { prefix: 'B', seatsPerCoach: 72, layout: 'berth' },
  '3E': { prefix: 'M', seatsPerCoach: 83, layout: 'berth' },
  SL: { prefix: 'S', seatsPerCoach: 72, layout: 'berth' },
  CC: { prefix: 'C', seatsPerCoach: 78, layout: 'chair' },
  EC: { prefix: 'E', seatsPerCoach: 52, layout: 'chair' },
  '2S': { prefix: 'D', seatsPerCoach: 108, layout: 'chair' },
}

const hash = (value: string) => [...value].reduce((total, character) => ((total * 31) + character.charCodeAt(0)) >>> 0, 17)

function coachCountFor(train: Train, classCode: string): number {
  const id = train.id.toLowerCase()
  if (train.type === 'Vande Bharat') return classCode === 'EC' ? 2 : classCode === 'CC' ? 14 : 1
  if (train.type === 'Shatabdi') return classCode === 'EC' ? 2 : classCode === 'CC' ? 14 : 1
  if (train.type === 'Jan Shatabdi') return classCode === '2S' ? 8 : classCode === 'CC' ? 2 : 1
  if (id.includes('paschim')) return ({ '1A': 1, '2A': 2, '3A': 3, SL: 11 } as Record<string, number>)[classCode] ?? 1
  if (id.includes('goa-sampark')) return ({ '1A': 1, '2A': 2, '3A': 4, '3E': 2, SL: 6 } as Record<string, number>)[classCode] ?? 1
  if (id.includes('kerala-sampark')) return ({ '1A': 1, '2A': 2, '3A': 4, '3E': 2, SL: 8 } as Record<string, number>)[classCode] ?? 1
  if (id.includes('karnataka-sampark')) return ({ '1A': 1, '2A': 2, '3A': 4, SL: 8 } as Record<string, number>)[classCode] ?? 1
  if (id.includes('sainagar') || id.includes('nanded') || train.type === 'Superfast') return ({ '1A': 1, '2A': 2, '3A': 4, SL: 8 } as Record<string, number>)[classCode] ?? 1
  if (train.type === 'Toy train') return 2
  return 2
}

export function getCoachProfile(train: Train, trainClass: TrainClassAvailability): CoachProfile {
  const base = CLASS_DEFAULTS[trainClass.code] ?? { prefix: 'C', seatsPerCoach: 78, layout: 'chair' as const }
  return { ...base, count: coachCountFor(train, trainClass.code) }
}

/** A deterministic permutation without Math.random(), stable for a search. */
function seededOrder(length: number, seed: number): number[] {
  const values = Array.from({ length }, (_, index) => index)
  let state = seed || 1
  for (let index = values.length - 1; index > 0; index -= 1) {
    state = (state * 1664525 + 1013904223) >>> 0
    const swapIndex = state % (index + 1)
    const current = values[index]
    values[index] = values[swapIndex]
    values[swapIndex] = current
  }
  return values
}

function contiguousStart(capacity: number, groupSize: number, seed: number) {
  if (groupSize <= 0 || capacity <= groupSize) return 0
  return seed % (capacity - groupSize + 1)
}

/**
 * Builds the displayed coach inventory from the same confirmed-seat count that
 * appears on the result card. A small preferred block gives groups a realistic
 * chance of sitting together; some deterministic searches deliberately leave a
 * single occupied seat in that block so the allocator has to choose the nearest
 * possible pair rather than assuming adjacent seats always exist.
 */
export function createSeatInventory(train: Train, trainClass: TrainClassAvailability, journeyDate: string, passengerCount: number): SeatInventory {
  const profile = getCoachProfile(train, trainClass)
  const totalCapacity = profile.count * profile.seatsPerCoach
  // RAC/waitlist rows do not have a confirmed coach/seat to preview. Their
  // allocation is made when the reservation chart is prepared, so keep the
  // inventory fully unavailable rather than inventing requestable seats.
  const isRequestOnly = !hasConfirmedSeatInventory(trainClass)
  const requestedAvailability = isRequestOnly ? 0 : (trainClass.seats ?? 0)
  const availableSeats = Math.max(0, Math.min(totalCapacity, requestedAvailability))
  const seatsToGroup = Math.min(passengerCount, availableSeats)
  const seed = hash(`${train.id}|${trainClass.code}|${journeyDate}`)
  const preferredCoachIndex = profile.count ? seed % profile.count : 0
  const staggeredGroup = seatsToGroup > 1 && seed % 2 === 0
  const groupGap = staggeredGroup ? 1 : 0
  const preferredStart = contiguousStart(profile.seatsPerCoach, seatsToGroup + groupGap, seed)
  const guaranteed = new Set<number>()
  const protectedOccupied = new Set<number>()
  for (let index = 0; index < seatsToGroup; index += 1) {
    guaranteed.add((preferredCoachIndex * profile.seatsPerCoach) + preferredStart + index + (staggeredGroup && index > 0 ? groupGap : 0))
  }
  if (staggeredGroup) protectedOccupied.add((preferredCoachIndex * profile.seatsPerCoach) + preferredStart + 1)
  const availableIndexes = new Set<number>(guaranteed)

  // Keep a few additional seats in the coach being previewed. This mirrors a
  // partially booked coach: the requested group can sit together, while
  // nearby seats are still visibly available instead of the coach looking
  // entirely sold out. The exact pattern remains deterministic per search.
  if (availableSeats > seatsToGroup && profile.count > 0) {
    const averagePerCoach = Math.max(1, Math.ceil(availableSeats / profile.count))
    const preferredCoachTarget = Math.min(profile.seatsPerCoach, Math.max(seatsToGroup + 6, seatsToGroup + averagePerCoach + 2))
    const preferredCoachStart = preferredCoachIndex * profile.seatsPerCoach
    const nearbySeatOrder = seededOrder(profile.seatsPerCoach, seed ^ 0x517cc1b7).sort((left, right) => {
      const leftDistance = Math.abs(left - preferredStart)
      const rightDistance = Math.abs(right - preferredStart)
      return leftDistance - rightDistance
    })
    for (const seatIndex of nearbySeatOrder) {
      if (protectedOccupied.has(preferredCoachStart + seatIndex)) continue
      if (availableIndexes.size >= Math.min(availableSeats, preferredCoachTarget)) break
      availableIndexes.add(preferredCoachStart + seatIndex)
    }
  }
  for (const index of seededOrder(totalCapacity, seed ^ 0x9e3779b9)) {
    if (protectedOccupied.has(index)) continue
    if (availableIndexes.size >= availableSeats) break
    availableIndexes.add(index)
  }
  const coaches = Array.from({ length: profile.count }, (_, coachIndex) => ({
    id: `${profile.prefix}${coachIndex + 1}`,
    seats: Array.from({ length: profile.seatsPerCoach }, (_, seatIndex) => {
      const absoluteIndex = (coachIndex * profile.seatsPerCoach) + seatIndex
      const available = availableIndexes.has(absoluteIndex)
      return {
        number: String(seatIndex + 1),
        state: (available ? (isRequestOnly ? 'requestable' : 'available') : 'occupied') as SeatState,
        position: getSeatPositionForClass(trainClass.code, seatIndex),
      }
    }),
  }))
  return { coaches, profile, totalCapacity, availableSeats, isRequestOnly }
}

function availableSeatsIn(coach: CoachInventory) {
  return coach.seats.filter((seat) => seat.state === 'available')
}

/**
 * Return every group of N available seats in a coach, including groups with a
 * small gap (for example 29 and 31 when 30 is occupied). Sorting these by
 * their span lets the allocator prefer the closest seats without pretending
 * that a perfectly contiguous block is always available.
 */
function nearbyGroups(seats: SeatRecord[], needed: number): string[][] {
  if (needed <= 0) return []
  const available = availableSeatsIn({ id: 'candidate', seats }).sort((a, b) => Number(a.number) - Number(b.number))
  if (available.length < needed) return []
  return Array.from({ length: available.length - needed + 1 }, (_, index) => available.slice(index, index + needed).map((seat) => seat.number))
}

/**
 * Pick the closest seats available in one coach. The allocator first looks
 * for a genuinely contiguous run, then considers the smallest available span
 * so a group can still sit together with a single occupied seat between them.
 * The tie-break is seeded so repeat searches get the same allocation, while
 * changing train/date changes which coach and seat block is preferred.
 */
export function recommendSeatAllocation(inventory: SeatInventory, passengerCount: number, preference: 'together' | 'same-coach' | 'any' = 'together', preferredCoachId?: string): SeatAllocation {
  const needed = Math.max(1, passengerCount)
  const orderedCoaches = preferredCoachId
    ? [
        ...inventory.coaches.filter((coach) => coach.id === preferredCoachId),
        ...inventory.coaches.filter((coach) => coach.id !== preferredCoachId),
      ]
    : inventory.coaches
  const seed = hash(`${inventory.profile.prefix}|${inventory.availableSeats}|${inventory.totalCapacity}`)
  const candidateGroups = orderedCoaches.flatMap((coach) => nearbyGroups(coach.seats, needed).map((group) => ({ coach, group })))
  if (candidateGroups.length) {
    // When a user previews a coach, keep the recommendation there whenever it
    // can fit the group. Otherwise minimise the seat span first, then use the
    // seeded tie-break to avoid every search choosing the first row.
    const preferredGroups = preferredCoachId ? candidateGroups.filter(({ coach }) => coach.id === preferredCoachId) : []
    const groups = preferredGroups.length ? preferredGroups : candidateGroups
    const sorted = [...groups].sort((left, right) => {
      const leftSpan = Number(left.group[left.group.length - 1]) - Number(left.group[0])
      const rightSpan = Number(right.group[right.group.length - 1]) - Number(right.group[0])
      if (leftSpan !== rightSpan) return leftSpan - rightSpan
      const leftGaps = leftSpan - (needed - 1)
      const rightGaps = rightSpan - (needed - 1)
      if (leftGaps !== rightGaps) return leftGaps - rightGaps
      return left.coach.id.localeCompare(right.coach.id)
    })
    const bestSpan = Number(sorted[0].group[sorted[0].group.length - 1]) - Number(sorted[0].group[0])
    const equallyClose = sorted.filter(({ group }) => Number(group[group.length - 1]) - Number(group[0]) === bestSpan)
    const candidate = equallyClose[(seed + (preference === 'any' ? 1 : 0)) % equallyClose.length]
    return { coachId: candidate.coach.id, seats: candidate.group }
  }
  const fallback = orderedCoaches.flatMap((coach) => availableSeatsIn(coach).map((seat) => ({ coach, seat }))).slice(0, needed)
  return { coachId: fallback[0]?.coach.id ?? orderedCoaches[0]?.id ?? `${inventory.profile.prefix}1`, seats: fallback.map(({ seat }) => seat.number) }
}
