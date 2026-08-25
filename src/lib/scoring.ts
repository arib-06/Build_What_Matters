import type { Train } from '../types'

export type ScoreBreakdown = { availability: number; timing: number; duration: number; price: number }
export type ScoredTrain = Train & { breakdown: ScoreBreakdown; relativeReasons: string[] }

const timeToMinutes = (time: string) => { const [hours, minutes] = time.split(':').map(Number); return hours * 60 + minutes }
const durationToMinutes = (duration: string) => { const parts = duration.match(/(\d+)h\s*(\d+)m/); return parts ? Number(parts[1]) * 60 + Number(parts[2]) : 0 }

/** Deterministic scoring seam; a live inventory/ranking service can replace this later. */
export function scoreTrains(trains: Train[]): ScoredTrain[] {
  const fares = trains.map((train) => train.classes[0]?.fare ?? 0)
  const durations = trains.map((train) => durationToMinutes(train.duration))
  return trains.map((train) => {
    const trainClass = train.classes[0]
    const availability = trainClass?.status === 'available' ? Math.min(100, 58 + (trainClass.seats ?? 0)) : trainClass?.status === 'rac' ? 48 : Math.max(12, 42 - (trainClass?.position ?? 20))
    const timing = Math.max(40, 100 - Math.abs(timeToMinutes(train.departure) - 390) / 4)
    const duration = Math.max(30, 100 - (durationToMinutes(train.duration) - Math.min(...durations)) / 3)
    const price = Math.max(30, 100 - (trainClass.fare - Math.min(...fares)) / 12)
    const breakdown = { availability: Math.round(availability), timing: Math.round(timing), duration: Math.round(duration), price: Math.round(price) }
    const score = Math.round((breakdown.availability * .4) + (breakdown.timing * .2) + (breakdown.duration * .25) + (breakdown.price * .15))
    return { ...train, score, breakdown, relativeReasons: [] }
  }).sort((a, b) => b.score - a.score)
}

export function attachRelativeReasoning(trains: ScoredTrain[]): ScoredTrain[] {
  return trains.map((train) => {
    const other = trains.find((candidate) => candidate.id !== train.id)
    if (!other) return train
    const reasons: string[] = []
    const fareDifference = other.classes[0].fare - train.classes[0].fare
    if (fareDifference > 0) reasons.push(`₹${fareDifference} cheaper than ${other.name}`)
    if (durationToMinutes(train.duration) < durationToMinutes(other.duration)) reasons.push(`${other.duration} route reduced to ${train.duration}`)
    if (train.breakdown.availability > other.breakdown.availability) reasons.push(`Stronger confirmation outlook than ${other.name}`)
    if (!reasons.length) reasons.push(`Comparable overall to ${other.name}, with a better ${train.breakdown.timing >= other.breakdown.timing ? 'departure time' : 'fare'} fit`)
    return { ...train, relativeReasons: reasons.slice(0, 3) }
  })
}

export function getTieBreakExplanation(trains: ScoredTrain[]): string | null {
  if (trains.length < 2 || Math.abs(trains[0].score - trains[1].score) > 5) return null
  const [winner, runnerUp] = trains
  const factor = (Object.keys(winner.breakdown) as Array<keyof ScoreBreakdown>).sort((a, b) => winner.breakdown[b] - runnerUp.breakdown[b] - (winner.breakdown[a] - runnerUp.breakdown[a]))[0]
  return `Both are similar overall — ${winner.name} wins on ${factor}.`
}
