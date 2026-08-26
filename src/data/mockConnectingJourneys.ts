import type { Train } from '../types'

export interface JourneyLeg {
  train: Train
  fromStation: { code: string; name: string }
  toStation: { code: string; name: string }
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
  totalPrice: number
  alternatives?: ConnectingJourney[]
}

const station = (code: string, name: string) => ({ code, name })

export const NDLS_TO_SML: ConnectingJourney = {
  routeId: 'ndls-sml-shivalik',
  routeLabel: 'Fastest comfortable connection',
  routeReason: 'The quickest prepared route with a comfortable change at Kalka.',
  fromStation: station('NDLS', 'New Delhi'),
  toStation: station('SML', 'Shimla'),
  legs: [
    {
      train: {
        id: 'connecting-12011', number: '12011', name: 'Kalka Shatabdi', source: 'New Delhi', sourceCode: 'NDLS', destination: 'Kalka', destinationCode: 'KLK', departure: '07:40', arrival: '11:05', duration: '3h 25m', stops: 2, type: 'Superfast', score: 90, recommendation: ['Direct to Kalka', 'Meals included'], amenities: ['Meals', 'Charging'], classes: [{ code: 'CC', label: 'Chair Car', status: 'available', seats: 30, fare: 840 }],
      },
      fromStation: station('NDLS', 'New Delhi'), toStation: station('KLK', 'Kalka'),
    },
    {
      train: {
        id: 'connecting-52451', number: '52451', name: 'Shivalik Deluxe Express', source: 'Kalka', sourceCode: 'KLK', destination: 'Shimla', destinationCode: 'SML', departure: '12:10', arrival: '17:30', duration: '5h 20m', stops: 5, type: 'Toy train', score: 82, recommendation: ['Scenic route'], amenities: ['Charging'], classes: [{ code: 'CC', label: 'Chair Car (toy train)', status: 'available', seats: 20, fare: 500 }],
      },
      fromStation: station('KLK', 'Kalka'), toStation: station('SML', 'Shimla'),
    },
  ],
  connections: [{ atStation: 'Kalka', arrivalOfPreviousLeg: '11:05', departureOfNextLeg: '12:10', bufferMinutes: 65, risk: 'comfortable', riskNote: 'A little over an hour to change trains and platforms — comfortable, no need to rush.' }],
  totalDurationMinutes: 205 + 320 + 65,
  totalPrice: 840 + 500,
}

const NDLS_TO_SML_HIMALAYAN_QUEEN: ConnectingJourney = {
  routeId: 'ndls-sml-himalayan-queen',
  routeLabel: 'More connection time',
  routeReason: 'A slower scenic option with a longer, more relaxed change at Kalka.',
  fromStation: station('NDLS', 'New Delhi'),
  toStation: station('SML', 'Shimla'),
  legs: [
    NDLS_TO_SML.legs[0],
    {
      train: {
        id: 'connecting-52455', number: '52455', name: 'Himalayan Queen', source: 'Kalka', sourceCode: 'KLK', destination: 'Shimla', destinationCode: 'SML', departure: '12:45', arrival: '18:20', duration: '5h 35m', stops: 5, type: 'Toy train', score: 78, recommendation: ['Scenic route', 'More time to change'], amenities: ['Charging'], classes: [{ code: 'CC', label: 'Chair Car (toy train)', status: 'available', seats: 14, fare: 365 }],
      },
      fromStation: station('KLK', 'Kalka'), toStation: station('SML', 'Shimla'),
    },
  ],
  connections: [{ atStation: 'Kalka', arrivalOfPreviousLeg: '11:05', departureOfNextLeg: '12:45', bufferMinutes: 100, risk: 'ample', riskNote: 'A generous change window gives you time for platforms, luggage, and a short break.' }],
  totalDurationMinutes: 205 + 335 + 100,
  totalPrice: 840 + 365,
}

// Route options are deliberately limited to services we can model accurately.
// Add another option here only when its station sequence and connection buffer are known.
NDLS_TO_SML.alternatives = [NDLS_TO_SML_HIMALAYAN_QUEEN]

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
