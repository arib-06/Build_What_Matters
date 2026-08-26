import type { Train } from './types'

export type TatkalTrainRole = 'recommended' | 'backup' | 'other'

export interface TatkalTrain {
  id: string
  number: string
  name: string
  classCode: string
  departure: string
  arrival: string
  price: number
  role: TatkalTrainRole
  seatSequence: number[]
}

export const GOOD_ENOUGH_CONFIRMED_SEATS = 5
export const TATKAL_SCARCE_DEMO_DATE = '2026-08-27'
export const WAITLIST_EXPLAINER_DEMO_DATE = '2026-08-26'
export const HEALTHY_DEMO_DATE = '2026-08-30'

const availabilityHash = (value: string) => [...value].reduce((total, character) => ((total * 31) + character.charCodeAt(0)) >>> 0, 17)

// Deterministic stand-in for a railway inventory lookup. Use Chandigarh → New Delhi,
// 27 Aug 2026, CC to demonstrate the Tatkal fallback: every regular option is scarce.
export function getRegularAvailabilityForSearch(source: string, destination: string, date: string, classCode: string, trainId: string) {
  if (source === 'Chandigarh' && destination === 'New Delhi' && date === WAITLIST_EXPLAINER_DEMO_DATE && classCode === 'CC') {
    if (trainId.includes('vande')) return { confirmedSeats: 0, waitlist: 4, status: 'rac' as const, waitlistType: 'RAC' as const, confirmationProbability: 'Likely to confirm' as const }
    if (trainId.includes('shatabdi')) return { confirmedSeats: 0, waitlist: 3, status: 'waitlist' as const, waitlistType: 'RLWL' as const, confirmationProbability: 'Possible' as const }
    return { confirmedSeats: 0, waitlist: 14, status: 'waitlist' as const, waitlistType: 'GNWL' as const, confirmationProbability: 'Possible' as const }
  }
  if (source === 'Chandigarh' && destination === 'New Delhi' && date === TATKAL_SCARCE_DEMO_DATE && classCode === 'CC') {
    const position = trainId.includes('vande') ? 18 : 9
    return { confirmedSeats: 0, waitlist: position, status: 'waitlist' as const, waitlistType: 'GNWL' as const, confirmationProbability: position > 15 ? 'Unlikely to confirm' as const : 'Possible' as const }
  }
  // Healthy-path demo: 30 Aug 2026 should remain a regular-booking result
  // with enough confirmed seats that Tatkal stays hidden.
  if (source === 'Chandigarh' && destination === 'New Delhi' && date === HEALTHY_DEMO_DATE && classCode === 'CC') {
    const seatsByTrain = trainId.includes('vande') ? 26 : trainId.includes('shatabdi') ? 18 : 11
    return { confirmedSeats: seatsByTrain }
  }
  const value = availabilityHash(`${source}|${destination}|${date}|${classCode}|${trainId}`) % 100
  if (value < 65) return { confirmedSeats: 6 + (value % 24) }
  const waitlist = 1 + (value % 28)
  return { confirmedSeats: 0, waitlist, status: 'waitlist' as const, waitlistType: 'GNWL' as const, confirmationProbability: waitlist <= 5 ? 'Likely to confirm' as const : waitlist <= 15 ? 'Possible' as const : 'Unlikely to confirm' as const }
}

export function getConfirmedSeatsForSearch(source: string, destination: string, date: string, classCode: string, trainId: string) {
  return getRegularAvailabilityForSearch(source, destination, date, classCode, trainId).confirmedSeats
}

// Deliberately scripted instead of random so the demo remains predictable.
export const tatkalTrains: TatkalTrain[] = [
  { id: 'vande-bharat-tatkal', number: '20977', name: 'Vande Bharat Express', classCode: 'CC', departure: '06:15', arrival: '09:25', price: 1245, role: 'recommended', seatSequence: [7, 7, 4, 2, 0] },
  { id: 'shatabdi-tatkal', number: '12012', name: 'Kalka Shatabdi', classCode: 'CC', departure: '06:40', arrival: '10:00', price: 980, role: 'backup', seatSequence: [9, 7, 5, 3, 1] },
  { id: 'paschim-tatkal', number: '12926', name: 'Paschim Express', classCode: '3A', departure: '08:05', arrival: '13:35', price: 1240, role: 'other', seatSequence: [12, 10, 8, 6, 4] },
  { id: 'himachal-tatkal', number: '14096', name: 'Himalayan Queen', classCode: 'SL', departure: '05:45', arrival: '11:20', price: 685, role: 'other', seatSequence: [14, 11, 8, 5, 2] },
]

export const trains: Train[] = [
  {
    id: 'vande-bharat-20977',
    number: '20977',
    name: 'Vande Bharat Express',
    source: 'Chandigarh',
    sourceCode: 'CDG',
    destination: 'New Delhi',
    destinationCode: 'NDLS',
    departure: '06:15',
    arrival: '09:25',
    duration: '3h 10m',
    stops: 0,
    type: 'Semi-high speed',
    score: 94,
    recommendation: ['Arrives early', 'Direct journey', 'Good availability'],
    amenities: ['Wi-Fi', 'Meals', 'Charging'],
    classes: [
      { code: 'CC', label: 'Chair Car', status: 'available', seats: 42, fare: 1245 },
      { code: 'EC', label: 'Executive Chair', status: 'available', seats: 8, fare: 2320 },
    ],
  },
  {
    id: 'jan-shatabdi-12058', number: '12058', name: 'Jan Shatabdi Express', source: 'Chandigarh', sourceCode: 'CDG', destination: 'New Delhi', destinationCode: 'NDLS', departure: '07:25', arrival: '11:35', duration: '4h 10m', stops: 3, type: 'Jan Shatabdi', score: 78, recommendation: ['Balanced fare', 'Morning departure'], amenities: ['Charging', 'Pantry'], classes: [{ code: 'CC', label: 'Chair Car', status: 'available', seats: 16, fare: 890 }],
  },
  {
    id: 'shatabdi-12012',
    number: '12012',
    name: 'Kalka Shatabdi',
    source: 'Chandigarh',
    sourceCode: 'CDG',
    destination: 'New Delhi',
    destinationCode: 'NDLS',
    departure: '06:40',
    arrival: '10:00',
    duration: '3h 20m',
    stops: 1,
    type: 'Shatabdi',
    score: 86,
    recommendation: ['Lowest fare', 'Early departure', 'Meals included'],
    amenities: ['Meals', 'Charging', 'Pantry'],
    classes: [
      { code: 'CC', label: 'Chair Car', status: 'available', seats: 18, fare: 980 },
      { code: 'EC', label: 'Executive Chair', status: 'available', seats: 4, fare: 1880 },
    ],
  },
  {
    id: 'paschim-12926',
    number: '12926',
    name: 'Paschim Express',
    source: 'Chandigarh',
    sourceCode: 'CDG',
    destination: 'New Delhi',
    destinationCode: 'NDLS',
    departure: '08:05',
    arrival: '13:35',
    duration: '5h 30m',
    stops: 5,
    type: 'Superfast',
    score: 73,
    recommendation: ['Most affordable', 'More class choices'],
    amenities: ['Pantry', 'Charging'],
    classes: [
      { code: '3A', label: 'AC 3 Tier', status: 'rac', position: 12, fare: 1240 },
      { code: 'SL', label: 'Sleeper', status: 'waitlist', position: 18, fare: 685 },
    ],
  },
]

export const faqItems = [
  {
    question: 'What does RAC mean?',
    answer: 'RAC means you can board the train. You have a seat, but your berth may be shared. Your status can improve before departure.',
  },
  {
    question: 'When does Tatkal booking open?',
    answer: 'Tatkal opens one day before departure. For AC classes it opens at 10:00 AM, and for non-AC classes it opens at 11:00 AM.',
  },
  {
    question: 'What happens if availability changes during payment?',
    answer: 'The booking is checked again before confirmation. Payment received and booking confirmed are shown as separate states so you always know what happened.',
  },
  {
    question: 'How is the refund amount calculated?',
    answer: 'The cancellation charge and any non-refundable fees are shown before you confirm. Refunds go back to the original payment method.',
  },
]

export const mockNotifications = [
  { id: 'delay', icon: 'schedule', title: 'Platform update', body: 'Platform 4 is assigned for your 06:15 departure.', tone: 'info' as const },
  { id: 'coach', icon: 'train', title: 'Coach information ready', body: 'Your coach B2 is near the middle of the train.', tone: 'success' as const },
  { id: 'reminder', icon: 'notifications', title: 'Boarding reminder', body: 'Reach the station at least 30 minutes before departure.', tone: 'warning' as const },
]

export const featureCards = [
  { icon: 'bolt', title: 'Tatkal, without the guesswork', body: 'See opening times, eligible classes, current mock availability, and fare before the clock starts.' },
  { icon: 'family_restroom', title: 'Travel together', body: 'Tell us when you are travelling as a family or group and see seating trade-offs honestly.' },
  { icon: 'support_agent', title: 'Help when it matters', body: 'Understand RAC, waitlist, refunds, and journey changes without leaving your booking.' },
]

export const getStatusLabel = (status: Train['classes'][number]['status']) => {
  if (status === 'available') return 'Available'
  if (status === 'rac') return 'RAC'
  return 'Waitlist'
}

export const getStatusTone = (status: Train['classes'][number]['status']) => {
  if (status === 'available') return 'success' as const
  if (status === 'rac') return 'warning' as const
  return 'error' as const
}
