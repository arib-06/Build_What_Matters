export type View = 'home' | 'results' | 'booking' | 'journey' | 'support'
export type Quota = 'General' | 'Tatkal' | 'Premium Tatkal'
export type BookingStage = 'seats' | 'passengers' | 'review' | 'payment' | 'confirmation'
export type AvailabilityState = 'available' | 'rac' | 'waitlist'
export type StatusTone = 'brand' | 'success' | 'warning' | 'error' | 'info' | 'neutral'

export interface TrainClassAvailability {
  code: string
  label: string
  status: AvailabilityState
  seats?: number
  position?: number
  fare: number
}

export interface Train {
  id: string
  number: string
  name: string
  source: string
  sourceCode: string
  destination: string
  destinationCode: string
  departure: string
  arrival: string
  duration: string
  stops: number
  type: string
  score: number
  recommendation: string[]
  amenities: string[]
  classes: TrainClassAvailability[]
}

export interface SearchState {
  source: string
  destination: string
  date: string
  passengers: number
  quota: Quota
}

export interface Passenger {
  name: string
  age: string
  gender: string
  berth: string
}

export interface BookingState {
  train: Train
  selectedClass: TrainClassAvailability
  selectedSeats: string[]
  passengers: Passenger[]
  keepTogether: boolean
  seatPreference: 'together' | 'same-coach' | 'any'
  quota: Quota
}

