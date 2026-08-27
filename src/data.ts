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
  { id: 'tatkal', icon: 'bolt', title: 'Tatkal is ready', body: 'Your preferred class opens at 10:00 AM.', tone: 'warning' as const, time: 'Just now' },
  { id: 'delay', icon: 'schedule', title: 'Platform update', body: 'Platform 4 is assigned for your 06:15 departure.', tone: 'info' as const, time: '2 min ago' },
  { id: 'coach', icon: 'train', title: 'Coach information ready', body: 'Your coach B2 is near the middle of the train.', tone: 'success' as const, time: '10 min ago' },
  { id: 'reminder', icon: 'notifications', title: 'Boarding reminder', body: 'Reach the station at least 30 minutes before departure.', tone: 'warning' as const, time: 'Today' },
]

export const featureCards = [
  { icon: 'bolt', title: 'Tatkal, without the guesswork', body: 'See opening times, eligible classes, current mock availability, and fare before the clock starts.' },
  { icon: 'family_restroom', title: 'Travel together', body: 'Tell us when you are travelling as a family or group and see seating trade-offs honestly.' },
  { icon: 'support_agent', title: 'Help when it matters', body: 'Understand RAC, waitlist, refunds, and journey changes without leaving your booking.' },
]

export interface TrainShowcase {
  id: string
  eyebrow: string
  title: string
  subtitle: string
  description: string
  stat: string
  image: string
  imageAlt: string
  infoUrl: string
}

export const trainShowcases: TrainShowcase[] = [
  {
    id: 'vande-bharat',
    eyebrow: 'NEW GENERATION',
    title: 'Vande Bharat Express',
    subtitle: 'India’s semi-high-speed trainset',
    description: 'Made in India for quicker, more comfortable inter-city journeys.',
    stat: 'Up to 160 km/h · subject to route readiness',
    image: '/images/showcase/vande-bharat.png',
    imageAlt: 'A modern streamlined express train at a station',
    infoUrl: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2215265&lang=1&reg=1',
  },
  {
    id: 'palace-on-wheels',
    eyebrow: 'ROYAL JOURNEY',
    title: 'Palace on Wheels',
    subtitle: 'Luxury across Rajasthan',
    description: 'Royal interiors, curated heritage stops, and an unhurried seven-night journey.',
    stat: '7 nights / 8 days · New Delhi round trip',
    image: '/images/showcase/palace-on-wheels.png',
    imageAlt: 'A richly appointed luxury train carriage interior',
    infoUrl: 'https://www.palaceonwheels.rajasthan.gov.in/itinerary.html',
  },
  {
    id: 'rail-power',
    eyebrow: 'NETWORK IN MOTION',
    title: 'Powering the railway',
    subtitle: 'Modern electric traction',
    description: 'The locomotives and crews that keep India’s long-distance network moving.',
    stat: 'Built for high-capacity rail corridors',
    image: '/images/showcase/rail-power.png',
    imageAlt: 'A blue Indian locomotive on an electrified railway line',
    infoUrl: 'https://indianrailways.gov.in/',
  },
]

export const officialIndianRailwayMapUrl = 'https://indianrailways.gov.in/railwayboard/uploads/PDF/Railway%20Map%20of%20india_Corrected%20up%20to%2031_03_2023.pdf'
export const officialSurveyOfIndiaOutlineUrl = 'https://surveyofindia.gov.in/pages/outline-maps-of-india'

export interface IndiaRailHub {
  id: string
  name: string
  code: string
  region: string
  detail: string
  mapX: number
  mapY: number
}

export const indiaRailHubs: IndiaRailHub[] = [
  { id: 'amritsar', name: 'Amritsar', code: 'ASR', region: 'North', detail: 'Golden Temple gateway and a northern rail starting point.', mapX: 37, mapY: 16 },
  { id: 'new-delhi', name: 'New Delhi', code: 'NDLS', region: 'North', detail: 'A central interchange for the Golden Quadrilateral and beyond.', mapX: 45, mapY: 25 },
  { id: 'mumbai', name: 'Mumbai', code: 'CSMT', region: 'West', detail: 'Where historic routes meet the Konkan coast.', mapX: 35, mapY: 56 },
  { id: 'kolkata', name: 'Kolkata', code: 'HWH', region: 'East', detail: 'A cultural rail gateway to the eastern hills and coast.', mapX: 63, mapY: 42 },
  { id: 'guwahati', name: 'Guwahati', code: 'GHY', region: 'North East', detail: 'The rail gateway to Assam and the north-eastern states.', mapX: 70, mapY: 27 },
  { id: 'bengaluru', name: 'Bengaluru', code: 'SBC', region: 'South', detail: 'A southern hub for hill, coast and heritage journeys.', mapX: 46, mapY: 78 },
  { id: 'chennai', name: 'Chennai', code: 'MAS', region: 'South', detail: 'A coast-facing junction for the deep south.', mapX: 52, mapY: 81 },
  { id: 'kochi', name: 'Kochi', code: 'ERS', region: 'South', detail: 'A gentle rail entry into Kerala’s backwaters and coast.', mapX: 43, mapY: 87 },
]

export const indianLanguages = [
  { value: 'English', label: 'English', native: 'English' },
  { value: 'हिन्दी', label: 'Hindi', native: 'हिन्दी' },
  { value: 'తెలుగు', label: 'Telugu', native: 'తెలుగు' },
  { value: 'ಕನ್ನಡ', label: 'Kannada', native: 'ಕನ್ನಡ' },
  { value: 'ਪੰਜਾਬੀ', label: 'Punjabi', native: 'ਪੰਜਾਬੀ' },
  { value: 'मराठी', label: 'Marathi', native: 'मराठी' },
  { value: 'বাংলা', label: 'Bengali', native: 'বাংলা' },
  { value: 'தமிழ்', label: 'Tamil', native: 'தமிழ்' },
]

export interface HeritageJourney {
  id: string
  region: string
  title: string
  route: string
  description: string
  duration: string
  image: string
  imageAlt: string
  infoUrl: string
}

export const heritageJourneys: HeritageJourney[] = [
  {
    id: 'kalka-shimla',
    region: 'Himalayan hills',
    title: 'Kalka–Shimla Toy Train',
    route: 'Kalka → Shimla',
    description: 'Slow curves, cedar forests and mountain stations that make the journey part of the destination.',
    duration: '5h 10m · 96 km',
    image: '/images/heritage/kalka-shimla.png',
    imageAlt: 'The red-and-cream Kalka–Shimla toy train crossing a snowy mountain curve',
    infoUrl: 'https://en.wikipedia.org/wiki/Kalka%E2%80%93Shimla_railway',
  },
  {
    id: 'darjeeling',
    region: 'Tea country',
    title: 'Darjeeling Himalayan Railway',
    route: 'New Jalpaiguri → Darjeeling',
    description: 'A heritage climb through tea gardens, misty bends and the warm rhythm of hill-town life.',
    duration: '7h 00m · 88 km',
    image: '/images/heritage/darjeeling.png',
    imageAlt: 'A heritage steam locomotive emerging from a stone tunnel in a forest',
    infoUrl: 'https://en.wikipedia.org/wiki/Darjeeling_Himalayan_Railway',
  },
  {
    id: 'nilgiri',
    region: 'Blue mountains',
    title: 'Nilgiri Mountain Railway',
    route: 'Mettupalayam → Ooty',
    description: 'A little blue train through eucalyptus slopes, valley views and the quiet of the Nilgiris.',
    duration: '5h 00m · 46 km',
    image: '/images/heritage/nilgiri.png',
    imageAlt: 'A vintage train winding through vivid green Nilgiri tea fields',
    infoUrl: 'https://5sensestours.com/nilgiri-mountain-railway-tour/',
  },
  {
    id: 'konkan',
    region: 'Western coast',
    title: 'Konkan Railway',
    route: 'Mumbai → Madgaon',
    description: 'Tunnels, palms and monsoon-green coastlines on one of India’s most cinematic rail corridors.',
    duration: '10h 30m · 581 km',
    image: '/images/heritage/konkan.png',
    imageAlt: 'An Indian blue locomotive curving through lush monsoon forest',
    infoUrl: 'https://en.wikipedia.org/wiki/Konkan_Railway',
  },
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
