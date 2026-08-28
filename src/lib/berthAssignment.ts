import type { Passenger } from '../types'

export interface AssignmentSeatRecord {
  number: string
  position?: string
}

export interface BerthAssignment {
  passengerIndex: number
  passengerName: string
  coach: string
  seat: string
  berthType: string
}

export interface AssignBerthsOptions {
  coachId?: string
  seatNumbers?: string[]
  seatRecords?: AssignmentSeatRecord[]
  keepTogether?: boolean
}

/** Preference choices that exist for each real coach/class layout. */
export function getPreferenceOptionsForClass(classCode: string): string[] {
  switch (classCode) {
    case 'CC':
    case 'EC':
      return ['Window', 'Aisle', 'Middle', 'No Preference']
    case '2A':
      return ['Lower', 'Upper', 'Side Lower', 'Side Upper', 'No Preference']
    case '1A':
      return ['Lower', 'Upper', 'No Preference']
    default:
      return ['Lower', 'Middle', 'Upper', 'Side Lower', 'Side Upper', 'No Preference']
  }
}

export function isSeatedClass(classCode: string): boolean {
  return classCode === 'CC' || classCode === 'EC'
}

export function isSeniorOrDivyangjan(passenger: Passenger): boolean {
  const age = Number(passenger.age)
  const flags = passenger as Passenger & { isDivyangjan?: boolean; divyangjan?: boolean }
  return age >= 60 || flags.isDivyangjan === true || flags.divyangjan === true
}

/**
 * Existing saved passengers can contain a berth preference from another
 * class (for example, Lower from a previous 3A search). Resolve it to a
 * valid value for the class currently being booked without mutating the
 * passenger record.
 */
export function normalizePreferenceForClass(preference: string | undefined, classCode: string, passenger?: Passenger): string {
  const options = getPreferenceOptionsForClass(classCode)
  const seniorOrDivyangjan = isSeniorOrDivyangjan(passenger ?? { name: '', age: '', gender: '', berth: '' })
  const exact = options.find((option) => option.toLowerCase() === preference?.toLowerCase())
  if (seniorOrDivyangjan && (!preference || preference.toLowerCase() === 'no preference' || !exact)) return isSeatedClass(classCode) ? 'Aisle' : 'Lower'
  if (exact) return exact
  return 'No Preference'
}

/** The seat/berth position pattern used by the preview and seat map. */
export function getSeatPositionForClass(classCode: string, index: number): string {
  if (isSeatedClass(classCode)) return ['Window', 'Middle', 'Aisle', 'Aisle', 'Window'][index % 5]
  if (classCode === '2A') return ['Lower', 'Upper', 'Side Lower', 'Side Upper'][index % 4]
  if (classCode === '1A') return ['Lower', 'Upper'][index % 2]
  return ['Lower', 'Middle', 'Upper', 'Lower', 'Middle', 'Upper', 'Side Lower', 'Side Upper'][index % 8]
}

function seatPosition(classCode: string, seat: string, record?: AssignmentSeatRecord): string {
  const index = Math.max(0, Number(seat) - 1)
  return getSeatPositionForClass(classCode, index) || record?.position || 'No Preference'
}

/**
 * Deterministically pairs the passenger list with the seats already selected
 * on the seat map. The same inputs always produce the same assignments. A
 * preference is used to find the closest matching position first; if that
 * position is unavailable, the next available seat is used and its actual
 * class-appropriate label is shown.
 */
export function assignBerths(passengers: Passenger[], classCode: string, options: AssignBerthsOptions = {}): BerthAssignment[] {
  const records = options.seatRecords ?? []
  const recordByNumber = new Map(records.map((record) => [record.number, record]))
  const requestedSeats = options.seatNumbers?.length
    ? [...options.seatNumbers]
    : records.map((record) => record.number)
  const seatNumbers = requestedSeats.length
    ? requestedSeats
    : Array.from({ length: Math.max(passengers.length, 1) }, (_, index) => String(index + 1))
  const used = new Set<string>()

  return passengers.map((passenger, passengerIndex) => {
    const preference = normalizePreferenceForClass(passenger.berth, classCode, passenger)
    const remaining = seatNumbers.filter((seat) => !used.has(seat))
    const preferred = preference === 'No Preference'
      ? undefined
      : remaining.find((seat) => seatPosition(classCode, seat, recordByNumber.get(seat)) === preference)
    const seat = preferred ?? remaining[0] ?? String(passengerIndex + 1)
    used.add(seat)
    return {
      passengerIndex,
      passengerName: passenger.name || `Passenger ${passengerIndex + 1}`,
      coach: options.coachId ?? 'B2',
      seat,
      berthType: seatPosition(classCode, seat, recordByNumber.get(seat)),
    }
  })
}
