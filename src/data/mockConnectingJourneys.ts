import type { Train } from '../types'

export interface JourneyLeg {
  train: Train
  fromStation: { code: string; name: string }
  toStation: { code: string; name: string }
  /** 0 for the search date, 1 for the following day (overnight connections). */
  departureDayOffset?: number
  arrivalDayOffset?: number
}

export type ConnectionRisk = 'tight' | 'comfortable' | 'ample'

export interface StationConnection {
  atStation: string
  arrivalOfPreviousLeg: string
  departureOfNextLeg: string
  bufferMinutes: number
  risk: ConnectionRisk
  riskNote: string
}

export interface ConnectingJourney {
  routeId: string
  routeLabel: string
  routeReason: string
  fromStation: { code: string; name: string }
  toStation: { code: string; name: string }
  legs: JourneyLeg[]
  connections: StationConnection[]
  totalDurationMinutes: number
  /** Time spent moving on trains, excluding the interchange wait. */
  railDurationMinutes: number
  /** Time between the first leg arriving and the next leg departing. */
  totalWaitMinutes: number
  totalPrice: number
  /** A comparison score for this prepared route, not a probability of confirmation. */
  score: number
  scoreSummary: string
  alternatives?: ConnectingJourney[]
}

const station = (code: string, name: string) => ({ code, name })

/**
 * Published timetable anchors used for this prepared mock:
 * - New Delhi–Kalka Shatabdi 12011/12005: Indian Railways Shatabdi list
 * - Kalka–Shimla 52451/52453/52455/52457: Northern Railway timetable
 * These rows are representative demo availability, not live train data.
 */

export const NDLS_TO_SML: ConnectingJourney = {
  routeId: 'ndls-sml-shivalik',
  routeLabel: 'Fastest same-day connection',
  routeReason: 'The quickest route that reaches Shimla the same evening, with a short change at Kalka.',
  fromStation: station('NDLS', 'New Delhi'),
  toStation: station('SML', 'Shimla'),
  legs: [
    {
      train: {
        id: 'connecting-12011', number: '12011', name: 'New Delhi–Kalka Shatabdi', source: 'New Delhi', sourceCode: 'NDLS', destination: 'Kalka', destinationCode: 'KLK', departure: '07:40', arrival: '11:40', duration: '4h 00m', stops: 4, type: 'Shatabdi', score: 90, recommendation: ['Direct to Kalka', 'Meals included'], amenities: ['Meals', 'Charging'], classes: [{ code: 'CC', label: 'Chair Car', status: 'available', seats: 30, fare: 840 }],
      },
      fromStation: station('NDLS', 'New Delhi'), toStation: station('KLK', 'Kalka'),
    },
    {
      train: {
        id: 'connecting-52455', number: '52455', name: 'Himalayan Queen', source: 'Kalka', sourceCode: 'KLK', destination: 'Shimla', destinationCode: 'SML', departure: '12:10', arrival: '17:20', duration: '5h 10m', stops: 6, type: 'Toy train', score: 82, recommendation: ['Scenic route', 'Same-day arrival'], amenities: ['Charging'], classes: [{ code: 'CC', label: 'Chair Car (toy train)', status: 'available', seats: 20, fare: 500 }],
      },
      fromStation: station('KLK', 'Kalka'), toStation: station('SML', 'Shimla'),
    },
  ],
  connections: [{ atStation: 'Kalka', arrivalOfPreviousLeg: '11:40', departureOfNextLeg: '12:10', bufferMinutes: 30, risk: 'tight', riskNote: 'A 30-minute interchange is workable at Kalka, but keep luggage ready and follow the platform signs.' }],
  totalDurationMinutes: 240 + 310 + 30,
  railDurationMinutes: 240 + 310,
  totalWaitMinutes: 30,
  totalPrice: 840 + 500,
  score: 88,
  scoreSummary: 'Highest overall fit: shortest total journey and an arrival the same evening.',
}

const NDLS_TO_SML_SHIVALIK: ConnectingJourney = {
  routeId: 'ndls-sml-shivalik-overnight',
  routeLabel: 'Most relaxed change',
  routeReason: 'An evening Shatabdi followed by the early Shivalik Deluxe the next morning.',
  fromStation: station('NDLS', 'New Delhi'),
  toStation: station('SML', 'Shimla'),
  legs: [
    {
      train: {
        id: 'connecting-12005', number: '12005', name: 'New Delhi–Kalka Shatabdi', source: 'New Delhi', sourceCode: 'NDLS', destination: 'Kalka', destinationCode: 'KLK', departure: '17:15', arrival: '21:20', duration: '4h 05m', stops: 4, type: 'Shatabdi', score: 78, recommendation: ['Evening departure', 'Meals included'], amenities: ['Meals', 'Charging'], classes: [{ code: 'CC', label: 'Chair Car', status: 'available', seats: 18, fare: 840 }],
      },
      fromStation: station('NDLS', 'New Delhi'), toStation: station('KLK', 'Kalka'),
    },
    {
      train: {
        id: 'connecting-52451', number: '52451', name: 'Shivalik Deluxe Express', source: 'Kalka', sourceCode: 'KLK', destination: 'Shimla', destinationCode: 'SML', departure: '05:30', arrival: '10:15', duration: '4h 45m', stops: 5, type: 'Toy train', score: 82, recommendation: ['Early hill departure', 'Scenic route'], amenities: ['Charging'], classes: [{ code: 'CC', label: 'Chair Car (toy train)', status: 'available', seats: 17, fare: 500 }],
      },
      fromStation: station('KLK', 'Kalka'), toStation: station('SML', 'Shimla'), departureDayOffset: 1, arrivalDayOffset: 1,
    },
  ],
  connections: [{ atStation: 'Kalka', arrivalOfPreviousLeg: '21:20', departureOfNextLeg: '05:30', bufferMinutes: 490, risk: 'ample', riskNote: 'An overnight wait at Kalka gives the safest interchange, but adds a long layover before the hill train.' }],
  totalDurationMinutes: 245 + 285 + 490,
  railDurationMinutes: 245 + 285,
  totalWaitMinutes: 490,
  totalPrice: 840 + 500,
  score: 67,
  scoreSummary: 'A dependable interchange with the longest wait; useful when same-day seats are gone.',
}

const NDLS_TO_SML_KALKA_PASSENGER: ConnectingJourney = {
  routeId: 'ndls-sml-kalka-passenger-overnight',
  routeLabel: 'Lowest prepared fare',
  routeReason: 'A reserved 22455 service and the first passenger train up the hill the next morning.',
  fromStation: station('NDLS', 'New Delhi'),
  toStation: station('SML', 'Shimla'),
  legs: [
    {
      train: {
        id: 'connecting-22455', number: '22455', name: 'Sainagar Shirdi–Kalka SF Express', source: 'New Delhi', sourceCode: 'NDLS', destination: 'Kalka', destinationCode: 'KLK', departure: '07:10', arrival: '12:10', duration: '5h 00m', stops: 5, type: 'Superfast', score: 70, recommendation: ['Lower fare classes', 'Daily Kalka arrival'], amenities: ['Charging'], classes: [{ code: '3A', label: 'AC 3 Tier', status: 'available', seats: 16, fare: 520 }],
      },
      fromStation: station('NDLS', 'New Delhi'), toStation: station('KLK', 'Kalka'),
    },
    {
      train: {
        id: 'connecting-52457', number: '52457', name: 'Kalka–Shimla Passenger', source: 'Kalka', sourceCode: 'KLK', destination: 'Shimla', destinationCode: 'SML', departure: '04:00', arrival: '09:20', duration: '5h 20m', stops: 16, type: 'Toy train', score: 68, recommendation: ['Earliest hill departure', 'Budget fare'], amenities: [], classes: [{ code: '2S', label: 'Second Sitting', status: 'available', seats: 24, fare: 250 }],
      },
      fromStation: station('KLK', 'Kalka'), toStation: station('SML', 'Shimla'), departureDayOffset: 1, arrivalDayOffset: 1,
    },
  ],
  connections: [{ atStation: 'Kalka', arrivalOfPreviousLeg: '12:10', departureOfNextLeg: '04:00', bufferMinutes: 950, risk: 'ample', riskNote: 'The long overnight gap is easy to make, but it is the slowest option and requires waiting at Kalka.' }],
  totalDurationMinutes: 300 + 320 + 950,
  railDurationMinutes: 300 + 320,
  totalWaitMinutes: 950,
  totalPrice: 520 + 250,
  score: 56,
  scoreSummary: 'Lowest fare, trading a very long overnight wait for the budget hill service.',
}

const NDLS_TO_SML_KALKA_EXPRESS: ConnectingJourney = {
  routeId: 'ndls-sml-second-shatabdi-overnight',
  routeLabel: 'Morning hill service',
  routeReason: 'The evening Shatabdi connects to the 06:00 Kalka–Shimla Express the next morning.',
  fromStation: station('NDLS', 'New Delhi'),
  toStation: station('SML', 'Shimla'),
  legs: [
    {
      train: {
        id: 'connecting-12005-early-hill', number: '12005', name: 'New Delhi–Kalka Shatabdi', source: 'New Delhi', sourceCode: 'NDLS', destination: 'Kalka', destinationCode: 'KLK', departure: '17:15', arrival: '21:20', duration: '4h 05m', stops: 4, type: 'Shatabdi', score: 76, recommendation: ['Evening departure', 'Meals included'], amenities: ['Meals', 'Charging'], classes: [{ code: 'CC', label: 'Chair Car', status: 'available', seats: 18, fare: 840 }],
      },
      fromStation: station('NDLS', 'New Delhi'), toStation: station('KLK', 'Kalka'),
    },
    {
      train: {
        id: 'connecting-52453', number: '52453', name: 'Kalka–Shimla Express', source: 'Kalka', sourceCode: 'KLK', destination: 'Shimla', destinationCode: 'SML', departure: '06:00', arrival: '11:05', duration: '5h 05m', stops: 11, type: 'Toy train', score: 76, recommendation: ['Morning hill departure', 'Scenic route'], amenities: ['Charging'], classes: [{ code: '2S', label: 'Second Sitting', status: 'available', seats: 22, fare: 365 }],
      },
      fromStation: station('KLK', 'Kalka'), toStation: station('SML', 'Shimla'), departureDayOffset: 1, arrivalDayOffset: 1,
    },
  ],
  connections: [{ atStation: 'Kalka', arrivalOfPreviousLeg: '21:20', departureOfNextLeg: '06:00', bufferMinutes: 520, risk: 'ample', riskNote: 'An overnight interchange leaves plenty of margin, with a later hill arrival than Shivalik Deluxe.' }],
  totalDurationMinutes: 245 + 305 + 520,
  railDurationMinutes: 245 + 305,
  totalWaitMinutes: 520,
  totalPrice: 840 + 365,
  score: 63,
  scoreSummary: 'A balanced overnight plan: lower hill fare and a generous connection, but later arrival.',
}

// These are limited to services with a known station sequence and connection
// buffer; they are representative mock availability, not live inventory.
NDLS_TO_SML.alternatives = [NDLS_TO_SML_SHIVALIK, NDLS_TO_SML_KALKA_PASSENGER, NDLS_TO_SML_KALKA_EXPRESS]

const normalizeStation = (value: string) => value.trim().toLowerCase().replace(/[^a-z0-9]/g, '')

export function stationKey(value: string): string {
  const normalized = normalizeStation(value)
  return ({ chandigarh: 'cdg', cdg: 'cdg', newdelhi: 'ndls', ndls: 'ndls', kalka: 'klk', klk: 'klk', shimla: 'sml', sml: 'sml' } as Record<string, string>)[normalized] ?? normalized
}

export function findConnectingJourney(from: string, to: string): ConnectingJourney | null {
  const fromKey = stationKey(from)
  const toKey = stationKey(to)
  if (fromKey === 'ndls' && toKey === 'sml') return NDLS_TO_SML
  return null
}

export function classifyConnectionRisk(bufferMinutes: number): ConnectionRisk {
  if (bufferMinutes < 45) return 'tight'
  if (bufferMinutes <= 90) return 'comfortable'
  return 'ample'
}
