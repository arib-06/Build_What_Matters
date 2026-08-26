import type { TatkalTrain } from '../data'
import type { ScoredTrain } from './scoring'

export type Preference = 'Highest chance of confirmation' | 'Earliest arrival' | 'Lowest price'

export interface BestPathVerdict {
  headline: string
  reasoning: string
  confidence: number
  personalizedNote: string
  notificationTeaser: string
  recommendedAction: 'book_now' | 'wait_for_tatkal'
  recommendedTrainId: string
}

type TatkalContext = { isOpen: boolean; opensAt: string; trains: TatkalTrain[] }

const tatkalAvailabilityScore = (train: TatkalTrain) => Math.min(100, 58 + ((train.seatSequence[0] ?? 0) * 5))

const outlookFor = (train: ScoredTrain) => train.classes[0]?.status === 'available' || train.classes[0]?.status === 'rac'
  ? 'Likely to confirm'
  : train.classes[0]?.confirmationProbability ?? 'Possible'

export function getBestPathVerdict(scoredRegular: ScoredTrain[], tatkalContext: TatkalContext | null, passengerCount: number, preference: Preference): BestPathVerdict {
  const regular = scoredRegular[0]
  if (!regular) {
    const tatkal = tatkalContext?.trains[0]
    return {
      headline: tatkalContext ? 'Prepare for Tatkal' : 'No direct booking path yet',
      reasoning: tatkalContext ? `${tatkal?.name ?? 'A prepared train'} is held for the ${tatkalContext.opensAt} opening window.` : 'Try another route or date to see prepared train options.',
      confidence: tatkal ? tatkalAvailabilityScore(tatkal) : 0,
      personalizedNote: `${passengerCount} ${passengerCount === 1 ? 'traveller' : 'travellers'} · ${preference}`,
      notificationTeaser: tatkalContext ? 'You would be notified the moment Tatkal opens.' : 'You would be notified when a matching train is available.',
      recommendedAction: 'wait_for_tatkal',
      recommendedTrainId: tatkal?.id ?? '',
    }
  }

  const regularOutlook = outlookFor(regular)
  const bestTatkal = tatkalContext?.trains.slice().sort((a, b) => tatkalAvailabilityScore(b) - tatkalAvailabilityScore(a))[0]
  const tatkalScore = bestTatkal ? tatkalAvailabilityScore(bestTatkal) : 0
  const shouldWait = regularOutlook === 'Unlikely to confirm' && Boolean(bestTatkal && tatkalScore > regular.score)

  if (shouldWait && bestTatkal) {
    return {
      headline: 'Wait for a stronger Tatkal chance',
      reasoning: `${regular.name} is WL ${regular.classes[0].position ?? '—'} (${regularOutlook}), while ${bestTatkal.name} opens at ${tatkalContext?.opensAt} with ${bestTatkal.seatSequence[0] ?? 0} prepared seats in this demo.`,
      confidence: tatkalScore,
      personalizedNote: `${passengerCount} ${passengerCount === 1 ? 'traveller' : 'travellers'} · ${preference} — keep passenger details ready before the window opens.`,
      notificationTeaser: 'You would be notified the moment Tatkal opens.',
      recommendedAction: 'wait_for_tatkal',
      recommendedTrainId: bestTatkal.id,
    }
  }

  const classAvailability = regular.classes[0]
  const availabilityText = classAvailability.status === 'available'
    ? `${classAvailability.seats} confirmed seats`
    : `${classAvailability.status === 'rac' ? 'RAC' : 'WL'} ${classAvailability.position ?? '—'} (${regularOutlook})`
  const preferenceNote = preference === 'Lowest price'
    ? `The fare is ₹${classAvailability.fare.toLocaleString('en-IN')} per passenger.`
    : preference === 'Earliest arrival'
      ? `It arrives at ${regular.arrival} after a ${regular.duration} journey.`
      : `It has the strongest current confirmation outlook in ${classAvailability.code}.`
  return {
    headline: regularOutlook === 'Likely to confirm' && classAvailability.status === 'available' ? `Book ${regular.name} — confirmed and ready` : `Book ${regular.name} with the clearest trade-off`,
    reasoning: `${regular.name} scores ${regular.score}/100 with ${availabilityText}; ${preferenceNote}`,
    confidence: regular.score,
    personalizedNote: `${passengerCount} ${passengerCount === 1 ? 'traveller' : 'travellers'} · ${preference}`,
    notificationTeaser: 'You would be notified as soon as your seat is confirmed.',
    recommendedAction: 'book_now',
    recommendedTrainId: regular.id,
  }
}
