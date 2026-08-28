import type { Train, TrainClassAvailability } from './types'

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

// Presentation-only dates keep the quota card visibly open during a demo,
// even when the machine clock is after the journey date. Remove these dates
// when wiring a live availability feed; real chart preparation should then
// control the closing state.
export const TATKAL_DEMO_OPEN_DATES = ['2026-08-26', '2026-08-27'] as const

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

const CLASS_LABELS: Record<string, string> = {
  '1A': 'First AC',
  '2A': 'AC 2 Tier',
  '3A': 'AC 3 Tier',
  '3E': 'AC 3 Economy',
  SL: 'Sleeper',
  CC: 'Chair Car',
  EC: 'Executive Chair',
  '2S': 'Second Sitting',
}

/** Base class rows for the route catalogue. Live-looking status and seats are
 * resolved deterministically by getRegularAvailabilityForSearch at query time. */
const routeClasses = (...entries: Array<[string, number]>): TrainClassAvailability[] => entries.map(([code, fare]) => ({ code, label: CLASS_LABELS[code] ?? code, status: 'available', seats: 0, fare }))

// Deliberately scripted instead of random so the demo remains predictable.
export const tatkalTrains: TatkalTrain[] = [
  { id: 'vande-bharat-tatkal', number: '22448', name: 'Amb Andaura Vande Bharat Express', classCode: 'CC', departure: '15:35', arrival: '18:25', price: 1010, role: 'recommended', seatSequence: [7, 7, 4, 2, 0] },
  { id: 'shatabdi-tatkal', number: '12046', name: 'Chandigarh Shatabdi', classCode: 'CC', departure: '12:05', arrival: '15:20', price: 980, role: 'backup', seatSequence: [9, 7, 5, 3, 1] },
  { id: 'paschim-tatkal', number: '12926', name: 'Paschim Express', classCode: '3A', departure: '12:20', arrival: '16:20', price: 930, role: 'other', seatSequence: [12, 10, 8, 6, 4] },
  { id: 'goa-sampark-tatkal', number: '12450', name: 'Goa Sampark Kranti', classCode: '3A', departure: '02:17', arrival: '05:55', price: 1010, role: 'other', seatSequence: [14, 11, 8, 5, 2] },
  { id: 'paschim-sleeper-tatkal', number: '12926-sl', name: 'Paschim Express', classCode: 'SL', departure: '12:20', arrival: '16:20', price: 345, role: 'other', seatSequence: [18, 14, 10, 6, 3] },
]

type RouteTrainInput = Omit<Train, 'score' | 'classes'> & { classes: Array<[string, number]> }

const routeTrain = ({ classes, ...train }: RouteTrainInput): Train => ({ ...train, score: 0, classes: routeClasses(...classes) })

// Timetable-informed direct services for the Chandigarh ↔ New Delhi corridor
// (including 22448, 12006, 12058, 12046, 12218, 22686, 12450, 12926,
// 22456 and 22710). These are representative mock rows, not a live inventory
// feed; availability is filled deterministically when a date/class is searched.
export const trains: Train[] = [
  routeTrain({ id: 'vande-bharat-22448', number: '22448', name: 'Amb Andaura Vande Bharat Express', source: 'Chandigarh', sourceCode: 'CDG', destination: 'New Delhi', destinationCode: 'NDLS', departure: '15:35', arrival: '18:25', duration: '2h 50m', stops: 1, type: 'Vande Bharat', recommendation: ['Fastest journey', 'Modern trainset'], amenities: ['Wi-Fi', 'Meals', 'Charging'], classes: [['CC', 1010], ['EC', 1900]] }),
  routeTrain({ id: 'shatabdi-12006', number: '12006', name: 'Kalka Shatabdi', source: 'Chandigarh', sourceCode: 'CDG', destination: 'New Delhi', destinationCode: 'NDLS', departure: '06:53', arrival: '10:15', duration: '3h 22m', stops: 3, type: 'Shatabdi', recommendation: ['Early departure', 'Meals included'], amenities: ['Meals', 'Charging', 'Pantry'], classes: [['CC', 980], ['EC', 1880]] }),
  routeTrain({ id: 'jan-shatabdi-12058', number: '12058', name: 'Jan Shatabdi Express', source: 'Chandigarh', sourceCode: 'CDG', destination: 'New Delhi', destinationCode: 'NDLS', departure: '07:43', arrival: '11:45', duration: '4h 02m', stops: 6, type: 'Jan Shatabdi', recommendation: ['Balanced fare', 'Morning departure'], amenities: ['Charging', 'Pantry'], classes: [['CC', 890], ['2S', 330]] }),
  routeTrain({ id: 'shatabdi-12046', number: '12046', name: 'Chandigarh Shatabdi', source: 'Chandigarh', sourceCode: 'CDG', destination: 'New Delhi', destinationCode: 'NDLS', departure: '12:05', arrival: '15:20', duration: '3h 15m', stops: 2, type: 'Shatabdi', recommendation: ['Midday departure', 'Meals included'], amenities: ['Meals', 'Charging', 'Pantry'], classes: [['CC', 980], ['EC', 1880]] }),
  routeTrain({ id: 'shatabdi-12012', number: '12012', name: 'Kalka Shatabdi', source: 'Chandigarh', sourceCode: 'CDG', destination: 'New Delhi', destinationCode: 'NDLS', departure: '18:23', arrival: '21:50', duration: '3h 27m', stops: 4, type: 'Shatabdi', recommendation: ['Evening departure', 'Meals included'], amenities: ['Meals', 'Charging', 'Pantry'], classes: [['CC', 980], ['EC', 1880]] }),
  routeTrain({ id: 'hoshiarpur-agra-11906', number: '11906', name: 'Hoshiarpur–Agra Cantt Express', source: 'Chandigarh', sourceCode: 'CDG', destination: 'New Delhi', destinationCode: 'NDLS', departure: '03:13', arrival: '07:10', duration: '3h 57m', stops: 3, type: 'Express', recommendation: ['Early arrival', 'Second sitting and sleeper'], amenities: ['Charging'], classes: [['3A', 960], ['SL', 350], ['2S', 230]] }),
  routeTrain({ id: 'paschim-12926', number: '12926', name: 'Paschim Express', source: 'Chandigarh', sourceCode: 'CDG', destination: 'New Delhi', destinationCode: 'NDLS', departure: '12:20', arrival: '16:20', duration: '4h 00m', stops: 6, type: 'Superfast', recommendation: ['More class choices', 'Overnight onward connections'], amenities: ['Pantry', 'Charging'], classes: [['1A', 2220], ['2A', 1320], ['3A', 930], ['SL', 345], ['2S', 250]] }),
  routeTrain({ id: 'karnataka-sampark-22686', number: '22686', name: 'Karnataka Sampark Kranti', source: 'Chandigarh', sourceCode: 'CDG', destination: 'New Delhi', destinationCode: 'NDLS', departure: '03:35', arrival: '08:00', duration: '4h 25m', stops: 2, type: 'Sampark Kranti', recommendation: ['Overnight onward route', 'Sleeper and AC options'], amenities: ['Pantry', 'Charging'], classes: [['1A', 2280], ['2A', 1360], ['3A', 960], ['SL', 370], ['2S', 255]] }),
  routeTrain({ id: 'goa-sampark-12450', number: '12450', name: 'Goa Sampark Kranti', source: 'Chandigarh', sourceCode: 'CDG', destination: 'New Delhi', destinationCode: 'NDLS', departure: '02:17', arrival: '05:55', duration: '3h 38m', stops: 2, type: 'Sampark Kranti', recommendation: ['Early arrival', 'Multiple berth classes'], amenities: ['Pantry', 'Charging'], classes: [['1A', 2430], ['2A', 1450], ['3A', 1010], ['3E', 860], ['SL', 390], ['2S', 260]] }),
  routeTrain({ id: 'kerala-sampark-12218', number: '12218', name: 'Kerala Sampark Kranti', source: 'Chandigarh', sourceCode: 'CDG', destination: 'New Delhi', destinationCode: 'NDLS', departure: '09:30', arrival: '12:55', duration: '3h 25m', stops: 1, type: 'Sampark Kranti', recommendation: ['Comfortable timing', 'AC and sleeper options'], amenities: ['Pantry', 'Charging'], classes: [['1A', 2400], ['2A', 1430], ['3A', 990], ['3E', 840], ['SL', 370], ['2S', 255]] }),
  routeTrain({ id: 'sainagar-kalka-22456', number: '22456', name: 'Sainagar Shirdi–Kalka SF Express', source: 'Chandigarh', sourceCode: 'CDG', destination: 'New Delhi', destinationCode: 'NDLS', departure: '18:07', arrival: '22:15', duration: '4h 08m', stops: 2, type: 'Superfast', recommendation: ['Evening departure', 'Berth options'], amenities: ['Pantry', 'Charging'], classes: [['1A', 2240], ['2A', 1340], ['3A', 940], ['SL', 350], ['2S', 245]] }),
  routeTrain({ id: 'amb-andaura-nanded-22710', number: '22710', name: 'Amb Andaura–Nanded SF Express', source: 'Chandigarh', sourceCode: 'CDG', destination: 'New Delhi', destinationCode: 'NDLS', departure: '18:55', arrival: '23:00', duration: '4h 05m', stops: 2, type: 'Superfast', recommendation: ['Late departure', 'AC and sleeper options'], amenities: ['Pantry', 'Charging'], classes: [['1A', 2160], ['2A', 1290], ['3A', 900], ['SL', 335], ['2S', 240]] }),

  routeTrain({ id: 'vande-bharat-22447', number: '22447', name: 'Amb Andaura Vande Bharat Express', source: 'New Delhi', sourceCode: 'NDLS', destination: 'Chandigarh', destinationCode: 'CDG', departure: '05:50', arrival: '08:38', duration: '2h 48m', stops: 1, type: 'Vande Bharat', recommendation: ['Fastest journey', 'Modern trainset'], amenities: ['Wi-Fi', 'Meals', 'Charging'], classes: [['CC', 1010], ['EC', 1900]] }),
  routeTrain({ id: 'shatabdi-12011', number: '12011', name: 'Kalka Shatabdi', source: 'New Delhi', sourceCode: 'NDLS', destination: 'Chandigarh', destinationCode: 'CDG', departure: '07:40', arrival: '10:59', duration: '3h 19m', stops: 4, type: 'Shatabdi', recommendation: ['Early departure', 'Meals included'], amenities: ['Meals', 'Charging', 'Pantry'], classes: [['CC', 980], ['EC', 1880]] }),
  routeTrain({ id: 'jan-shatabdi-12057', number: '12057', name: 'Jan Shatabdi Express', source: 'New Delhi', sourceCode: 'NDLS', destination: 'Chandigarh', destinationCode: 'CDG', departure: '14:35', arrival: '18:47', duration: '4h 12m', stops: 6, type: 'Jan Shatabdi', recommendation: ['Balanced fare', 'Afternoon departure'], amenities: ['Charging', 'Pantry'], classes: [['CC', 890], ['2S', 330]] }),
  routeTrain({ id: 'shatabdi-12045', number: '12045', name: 'Chandigarh Shatabdi', source: 'New Delhi', sourceCode: 'NDLS', destination: 'Chandigarh', destinationCode: 'CDG', departure: '19:15', arrival: '22:35', duration: '3h 20m', stops: 2, type: 'Shatabdi', recommendation: ['Evening departure', 'Meals included'], amenities: ['Meals', 'Charging', 'Pantry'], classes: [['CC', 980], ['EC', 1880]] }),
  routeTrain({ id: 'paschim-12925', number: '12925', name: 'Paschim Express', source: 'New Delhi', sourceCode: 'NDLS', destination: 'Chandigarh', destinationCode: 'CDG', departure: '11:05', arrival: '15:23', duration: '4h 18m', stops: 6, type: 'Superfast', recommendation: ['More class choices', 'Berths available'], amenities: ['Pantry', 'Charging'], classes: [['1A', 2220], ['2A', 1320], ['3A', 930], ['SL', 345], ['2S', 250]] }),
  routeTrain({ id: 'goa-sampark-12449', number: '12449', name: 'Goa Sampark Kranti', source: 'New Delhi', sourceCode: 'NDLS', destination: 'Chandigarh', destinationCode: 'CDG', departure: '14:25', arrival: '18:25', duration: '4h 00m', stops: 2, type: 'Sampark Kranti', recommendation: ['Multiple berth classes', 'Afternoon departure'], amenities: ['Pantry', 'Charging'], classes: [['1A', 2430], ['2A', 1450], ['3A', 1010], ['3E', 860], ['SL', 390], ['2S', 260]] }),
  routeTrain({ id: 'kerala-sampark-12217', number: '12217', name: 'Kerala Sampark Kranti', source: 'New Delhi', sourceCode: 'NDLS', destination: 'Chandigarh', destinationCode: 'CDG', departure: '06:25', arrival: '09:50', duration: '3h 25m', stops: 1, type: 'Sampark Kranti', recommendation: ['Early arrival', 'AC and sleeper options'], amenities: ['Pantry', 'Charging'], classes: [['1A', 2400], ['2A', 1430], ['3A', 990], ['3E', 840], ['SL', 370], ['2S', 255]] }),
  routeTrain({ id: 'karnataka-sampark-22685', number: '22685', name: 'Karnataka Sampark Kranti', source: 'New Delhi', sourceCode: 'NDLS', destination: 'Chandigarh', destinationCode: 'CDG', departure: '12:10', arrival: '15:45', duration: '3h 35m', stops: 3, type: 'Sampark Kranti', recommendation: ['Midday departure', 'Sleeper and AC options'], amenities: ['Pantry', 'Charging'], classes: [['1A', 2280], ['2A', 1360], ['3A', 960], ['SL', 370], ['2S', 255]] }),
  routeTrain({ id: 'sainagar-kalka-22455', number: '22455', name: 'Sainagar Shirdi–Kalka SF Express', source: 'New Delhi', sourceCode: 'NDLS', destination: 'Chandigarh', destinationCode: 'CDG', departure: '07:10', arrival: '11:27', duration: '4h 17m', stops: 2, type: 'Superfast', recommendation: ['Morning departure', 'Berth options'], amenities: ['Pantry', 'Charging'], classes: [['1A', 2240], ['2A', 1340], ['3A', 940], ['SL', 350], ['2S', 245]] }),
  routeTrain({ id: 'nanded-amb-andaura-22709', number: '22709', name: 'Nanded–Amb Andaura SF Express', source: 'New Delhi', sourceCode: 'NDLS', destination: 'Chandigarh', destinationCode: 'CDG', departure: '10:25', arrival: '14:15', duration: '3h 50m', stops: 2, type: 'Superfast', recommendation: ['Morning departure', 'AC and sleeper options'], amenities: ['Pantry', 'Charging'], classes: [['1A', 2160], ['2A', 1290], ['3A', 900], ['SL', 335], ['2S', 240]] }),
]

export type TatkalQuota = 'Tatkal' | 'Premium Tatkal'

// Tatkal inventory remains bookable until reservation chart preparation. The
// prototype uses the published four-hour first-chart norm as a deterministic
// closing estimate; real charting can vary by train and originating station.
export const TATKAL_CHART_LEAD_HOURS = 4

export function getTatkalClosingAt(journeyDate: string, departure: string): Date {
  const departureAt = new Date(`${journeyDate}T${departure}:00`)
  return new Date(departureAt.getTime() - (TATKAL_CHART_LEAD_HOURS * 60 * 60 * 1000))
}

export function isTatkalDemoOpenDate(journeyDate: string): boolean {
  return (TATKAL_DEMO_OPEN_DATES as readonly string[]).includes(journeyDate)
}

/**
 * Stable countdown used only for the two presentation dates above. It gives
 * each train a slightly different remaining window while keeping the result
 * reproducible; the caller subtracts elapsed time so the counter still ticks.
 */
export function getTatkalDemoClosingDuration(journeyDate: string, departure: string): number {
  if (!isTatkalDemoOpenDate(journeyDate)) return 0
  return (6 * 60 * 60) + (availabilityHash(`tatkal-demo-close|${journeyDate}|${departure}`) % (2 * 60 * 60))
}

// IRCTC publishes Tatkal as a surcharge on the normal fare: 10% for 2S and
// 30% for other eligible classes, bounded by class-specific minimum/maximum
// charges. Premium Tatkal keeps the same opening window but adds a clearly
// labelled dynamic component as demand rises. The latter is a deterministic
// presentation model, not a live fare quote.
const TATKAL_CHARGE_LIMITS: Record<string, { rate: number; minimum: number; maximum: number }> = {
  '2S': { rate: 0.1, minimum: 10, maximum: 15 },
  SL: { rate: 0.3, minimum: 100, maximum: 200 },
  CC: { rate: 0.3, minimum: 125, maximum: 225 },
  '3A': { rate: 0.3, minimum: 300, maximum: 400 },
  '2A': { rate: 0.3, minimum: 400, maximum: 500 },
  EC: { rate: 0.3, minimum: 400, maximum: 500 },
  '3E': { rate: 0.3, minimum: 300, maximum: 400 },
}

export function getTatkalFare(baseFare: number, classCode: string, quota: TatkalQuota, demandStep = 0): number {
  const limits = TATKAL_CHARGE_LIMITS[classCode] ?? { rate: 0.3, minimum: 100, maximum: 500 }
  const surcharge = Math.min(limits.maximum, Math.max(limits.minimum, Math.round(baseFare * limits.rate)))
  const tatkalFare = baseFare + surcharge
  if (quota === 'Tatkal') return tatkalFare
  const dynamicMultiplier = 1.2 + (Math.min(4, Math.max(0, demandStep)) * 0.05)
  return Math.round(tatkalFare * dynamicMultiplier)
}

const stationMatches = (value: string, query?: string, code?: string) => {
  if (!query) return true
  const normalizedValue = value.trim().toLowerCase()
  const normalizedQuery = query.trim().toLowerCase()
  return normalizedValue === normalizedQuery || code?.trim().toLowerCase() === normalizedQuery
}

const generatedTatkalSequence = (trainId: string, classCode: string) => {
  const seed = availabilityHash(`tatkal|${trainId}|${classCode}`) % 9
  const openingSeats = 5 + seed
  return [openingSeats, Math.max(2, openingSeats - 2), Math.max(1, openingSeats - 4), Math.max(0, openingSeats - 6), 0]
}

/**
 * Resolve a route's Tatkal train list from the same timetable catalogue used
 * by General results. Curated sequences are retained where available; other
 * services get stable, route/class-specific mock inventory so every eligible
 * class has a believable option without showing the wrong class.
 */
export function getTatkalTrainsForClass(classCode: string, source?: string, destination?: string): TatkalTrain[] {
  const routeCandidates = trains.filter((train) => stationMatches(train.source, source, train.sourceCode) && stationMatches(train.destination, destination, train.destinationCode) && train.classes.some((trainClass) => trainClass.code === classCode))
  const curatedRecommended = routeCandidates.some((train) => tatkalTrains.some((candidate) => candidate.number === train.number && candidate.classCode === classCode && candidate.role === 'recommended'))
  const curatedBackup = routeCandidates.some((train) => tatkalTrains.some((candidate) => candidate.number === train.number && candidate.classCode === classCode && candidate.role === 'backup'))
  let syntheticRecommended = false
  let syntheticBackup = false
  const roleForTrain = (curated?: TatkalTrain): TatkalTrainRole => {
    if (curated) return curated.role
    if (!curatedRecommended && !syntheticRecommended) {
      syntheticRecommended = true
      return 'recommended'
    }
    if (!curatedBackup && !syntheticBackup) {
      syntheticBackup = true
      return 'backup'
    }
    return 'other'
  }
  const mapped = routeCandidates.map((train) => {
    const baseClass = train.classes.find((trainClass) => trainClass.code === classCode)
    const curated = tatkalTrains.find((candidate) => candidate.number === train.number && candidate.classCode === classCode)
    const role = roleForTrain(curated)
    return {
      id: curated?.id ?? `${train.id}-${classCode.toLowerCase()}-tatkal`,
      number: train.number,
      name: train.name,
      classCode,
      departure: train.departure,
      arrival: train.arrival,
      price: baseClass?.fare ?? curated?.price ?? 0,
      role,
      seatSequence: curated?.seatSequence ?? generatedTatkalSequence(train.id, classCode),
    } satisfies TatkalTrain
  })
  if (mapped.length >= 2) return mapped.slice(0, 4)

  // When a route is supplied, never show a prepared train from another route
  // as if it were bookable here. The no-argument form keeps the small curated
  // fallback useful for isolated component previews/tests.
  if (source && destination) return mapped.slice(0, 4)
  const curatedFallback = tatkalTrains.filter((train) => train.classCode === classCode)
  return (mapped.length ? mapped : curatedFallback).slice(0, 4)
}

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
  {
    question: 'What ID should I carry for an e-ticket?',
    answer: 'Carry one original, valid photo ID from a passenger on the ticket. Aadhaar, passport, driving licence, voter ID, or PAN card are common accepted options.',
  },
  {
    question: 'Can I change my boarding station?',
    answer: 'For an e-ticket, you can usually change the boarding station online once, up to 24 hours before departure. After changing it, you cannot board from the original station.',
  },
  {
    question: 'Can I cancel an RAC or waitlisted ticket?',
    answer: 'Yes. Cancel it online, or file a TDR when required, within the applicable railway time limit. RAC and waitlisted cancellations are generally accepted up to 30 minutes before departure, with the applicable clerkage deducted.',
  },
  {
    question: 'What if my e-ticket is still fully waitlisted after charting?',
    answer: 'A fully waitlisted e-ticket is dropped from the chart and is not valid for boarding. The booking amount is refunded to the account used for payment under railway rules.',
  },
  {
    question: 'How do I check my PNR status?',
    answer: 'Enter your PNR in the official Indian Railways or IRCTC PNR enquiry service. The status can change until the final chart is prepared, so check again before you travel.',
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
