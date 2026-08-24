import type { Train } from './types'

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

