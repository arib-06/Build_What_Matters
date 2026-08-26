import type { ScoredTrain } from './scoring'

export type ComparisonRow = { label: string; values: string[]; bestIndexes: number[] }
const availability = (train: ScoredTrain) => {
  const trainClass = train.classes[0]
  if (trainClass.status === 'available') return `${trainClass.seats} confirmed seats`
  return `${trainClass.status === 'rac' ? 'RAC' : 'WL'} ${trainClass.position}`
}

export function buildComparisonRows(trains: ScoredTrain[]): ComparisonRow[] {
  const values = (get: (train: ScoredTrain) => string) => trains.map(get)
  const numericBest = (get: (train: ScoredTrain) => number, lowest = false) => { const values = trains.map(get); const best = lowest ? Math.min(...values) : Math.max(...values); return values.map((value, index) => value === best ? index : -1).filter((index) => index >= 0) }
  return [
    { label: 'Score', values: values((train) => `${train.score}/100`), bestIndexes: numericBest((train) => train.score) },
    { label: 'Departure → Arrival', values: values((train) => `${train.departure} → ${train.arrival}`), bestIndexes: [] },
    { label: 'Duration', values: values((train) => train.duration), bestIndexes: numericBest((train) => Number(train.duration.match(/^\d+/)?.[0] ?? 0), true) },
    { label: 'Class', values: values((train) => train.classes[0].code), bestIndexes: [] },
    { label: 'Availability', values: values(availability), bestIndexes: numericBest((train) => train.breakdown.availability) },
    { label: 'Price', values: values((train) => `₹${train.classes[0].fare.toLocaleString('en-IN')}`), bestIndexes: numericBest((train) => train.classes[0].fare, true) },
    { label: 'Amenities', values: values((train) => train.amenities.join(' · ')), bestIndexes: [] },
  ]
}

export function getBookOrWaitAdvice(trains: ScoredTrain[]): string | null {
  if (!trains.length || trains.some((train) => train.classes[0].status === 'available')) return null
  const risky = trains.find((train) => train.classes[0].confirmationProbability === 'Unlikely to confirm')
  if (!risky) return null
  const alternative = trains.find((train) => train.id !== risky.id && (train.classes[0].status === 'rac' || train.classes[0].confirmationProbability !== 'Unlikely to confirm'))
  return alternative ? `${alternative.name} has a stronger confirmation outlook than waiting on ${risky.name} at WL ${risky.classes[0].position}.` : null
}
