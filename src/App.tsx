import { useEffect, useState } from 'react'
import { featureCards, getConfirmedSeatsForSearch, getRegularAvailabilityForSearch, GOOD_ENOUGH_CONFIRMED_SEATS, tatkalTrains, trains } from './data'
import type { TatkalTrain } from './data'
import { findConnectingJourney, stationKey } from './data/mockConnectingJourneys'
import type { ConnectingJourney } from './data/mockConnectingJourneys'
import type { BookingStage, BookingState, Passenger, Quota, SearchState, Train, TrainClassAvailability, View } from './types'
import {
  AssistantPanel,
  BookingStepper,
  BestPathCard,
  CoachMap,
  CompareDrawer,
  ConnectingJourneyCard,
  ExplanationModal,
  FAQPanel,
  Icon,
  NotificationDrawer,
  NotificationIconButton,
  PassengerFields,
  SearchForm,
  SeatMap,
  StatusTag,
  TatkalCommandCard,
  TrainCard,
  defaultPassenger,
  formatDate,
} from './components'
import { getBookOrWaitAdvice } from './lib/comparison'
import { getBestPathVerdict } from './lib/bestPath'
import { attachRelativeReasoning, getTieBreakExplanation, scoreTrains } from './lib/scoring'
import type { ScoredTrain } from './lib/scoring'
import { mockPassengers } from './data/mockPassengers'

const defaultSearch: SearchState = {
  source: 'Chandigarh',
  destination: 'New Delhi',
  date: '2026-08-25',
  passengers: 2,
  quota: 'General',
}

const getScoredRegularTrains = (searchState: SearchState, classCode: string): ScoredTrain[] => {
  const candidates = trains
    .filter((train) => stationKey(train.sourceCode) === stationKey(searchState.source) && stationKey(train.destinationCode) === stationKey(searchState.destination))
    .filter((train) => train.classes.some((trainClass) => trainClass.code === classCode))
    .map((train) => ({
      ...train,
      classes: train.classes.filter((trainClass) => trainClass.code === classCode).map((trainClass) => {
        const availability = getRegularAvailabilityForSearch(searchState.source, searchState.destination, searchState.date, trainClass.code, train.id)
        if (availability.status === 'rac') return { ...trainClass, status: 'rac' as const, seats: undefined, position: availability.waitlist, waitlistType: availability.waitlistType, confirmationProbability: availability.confirmationProbability }
        return availability.confirmedSeats > 0
          ? { ...trainClass, status: 'available' as const, seats: availability.confirmedSeats, position: undefined, confirmationProbability: undefined, waitlistType: undefined }
          : { ...trainClass, status: 'waitlist' as const, seats: undefined, position: availability.waitlist, waitlistType: availability.waitlistType, confirmationProbability: availability.confirmationProbability }
      }),
    }))
  return attachRelativeReasoning(scoreTrains(candidates))
}

type PaymentStatus = 'idle' | 'processing' | 'received' | 'failed'
type RefundStatus = 'idle' | 'confirming' | 'initiated'

function App() {
  const [view, setView] = useState<View>('home')
  const [search, setSearch] = useState<SearchState>(defaultSearch)
  const [selectedTrain, setSelectedTrain] = useState<Train>(trains[0])
  const [selectedClass, setSelectedClass] = useState<TrainClassAvailability>(trains[0].classes[0])
  const [compareIds, setCompareIds] = useState<string[]>([])
  const [showCompareDrawer, setShowCompareDrawer] = useState(false)
  const [priority, setPriority] = useState('Best overall')
  const [modal, setModal] = useState<{ title: string; body: string } | null>(null)
  const [showNotifications, setShowNotifications] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [bookingStage, setBookingStageRaw] = useState<BookingStage>('passengers')
  const [selectedSeats, setSelectedSeats] = useState<string[]>(['21', '22'])
  const [selectedCoach, setSelectedCoach] = useState('B2')
  const [passengers, setPassengers] = useState<Passenger[]>(mockPassengers.slice(0, 2))
  const [keepTogether, setKeepTogether] = useState(true)
  const [seatPreference, setSeatPreference] = useState<'together' | 'same-coach' | 'any'>('together')
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>('idle')
  const [bookingState, setBookingState] = useState<'BOOKING_PENDING' | 'CONFIRMED' | 'RAC' | 'WAITLISTED' | 'CANCELLED' | 'REFUND_PENDING'>('BOOKING_PENDING')
  const [refundStatus, setRefundStatus] = useState<RefundStatus>('idle')
  const [connectingJourney, setConnectingJourney] = useState<ConnectingJourney | null>(null)
  const [connectingLegIndex, setConnectingLegIndex] = useState(0)

  // Keep every booking entry point on the same explicit path:
  // passengers → seats → review → payment.
  const setBookingStage = (nextStage: BookingStage) => setBookingStageRaw((currentStage) => currentStage === 'seats' && nextStage === 'passengers' ? 'review' : nextStage)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const navigate = (nextView: View) => {
    setView(nextView)
    window.history.pushState({}, '', `#${nextView}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const runSearch = (nextSearch: SearchState) => {
    // Submit the form's latest value directly so a date/class change is never
    // lost to React's asynchronous state update when the user searches quickly.
    setSearch(nextSearch)
    setConnectingJourney(null)
    setConnectingLegIndex(0)
    setPassengers((current) => Array.from({ length: nextSearch.passengers }, (_, index) => current[index] ?? mockPassengers[index] ?? defaultPassenger()))
    navigate('results')
  }

  const selectTrain = (train: Train, trainClass: TrainClassAvailability) => {
    setSelectedTrain(train)
    setSelectedClass(trainClass)
    setBookingStageRaw('passengers')
    setPaymentStatus('idle')
    setBookingState('BOOKING_PENDING')
    setSelectedSeats(['21', '22', '23', '24', '26', '27', '28', '30'].slice(0, search.passengers))
    navigate('booking')
  }

  const bookTatkalTrain = (tatkalTrain: TatkalTrain, seats: number) => {
    const template = trains.find((train) => train.number === tatkalTrain.number)
    const templateClass = template?.classes.find((trainClass) => trainClass.code === tatkalTrain.classCode)
    const duration = template?.duration ?? '5h 00m'
    const tatkalClass: TrainClassAvailability = {
      ...(templateClass ?? selectedClass),
      code: tatkalTrain.classCode,
      label: templateClass?.label ?? tatkalTrain.classCode,
      status: 'available',
      seats: Math.max(1, seats),
      position: undefined,
      confirmationProbability: undefined,
      waitlistType: undefined,
      fare: tatkalTrain.price,
    }
    const bookableTrain: Train = {
      ...(template ?? selectedTrain),
      id: `tatkal-${tatkalTrain.id}`,
      number: tatkalTrain.number,
      name: tatkalTrain.name,
      source: search.source,
      destination: search.destination,
      sourceCode: template?.sourceCode ?? selectedTrain.sourceCode,
      destinationCode: template?.destinationCode ?? selectedTrain.destinationCode,
      departure: tatkalTrain.departure,
      arrival: tatkalTrain.arrival,
      duration,
      score: 100,
      recommendation: ['Tatkal seat selected', 'Prepared passenger details', 'Live availability checked at payment'],
      classes: [tatkalClass],
    }
    setSearch((current) => ({ ...current, quota: 'Tatkal' }))
    setSelectedTrain(bookableTrain)
    setSelectedClass(tatkalClass)
    setBookingStageRaw('passengers')
    setPaymentStatus('idle')
    setBookingState('BOOKING_PENDING')
    setSelectedSeats(['21', '22', '23', '24', '26', '27', '28', '30'].slice(0, search.passengers))
    navigate('booking')
  }

  const startConnectingBooking = (journey: ConnectingJourney) => {
    setConnectingJourney(journey)
    setConnectingLegIndex(0)
    const firstLeg = journey.legs[0]
    selectTrain(firstLeg.train, firstLeg.train.classes[0])
  }

  const continueConnectingLeg = () => {
    if (!connectingJourney) return
    const nextLeg = connectingJourney.legs[connectingLegIndex + 1]
    if (!nextLeg) return navigate('journey')
    setConnectingLegIndex((index) => index + 1)
    selectTrain(nextLeg.train, nextLeg.train.classes[0])
  }

  const toggleCompare = (trainId: string) => setCompareIds((current) => current.includes(trainId) ? current.filter((id) => id !== trainId) : current.length < 3 ? [...current, trainId] : current)

  const updateSearch = (nextSearch: SearchState) => {
    setSearch(nextSearch)
    if (nextSearch.passengers !== passengers.length) setPassengers((current) => Array.from({ length: nextSearch.passengers }, (_, index) => current[index] ?? mockPassengers[index] ?? defaultPassenger()))
  }

  const toggleSeat = (seat: string) => setSelectedSeats((current) => current.includes(seat) ? current.filter((item) => item !== seat) : current.length < search.passengers ? [...current, seat] : current)

  const startPayment = () => {
    setPaymentStatus('processing')
    window.setTimeout(() => {
      setPaymentStatus('received')
      setBookingState('CONFIRMED')
      setBookingStage('confirmation')
    }, 900)
  }

  const simulateAvailabilityChange = () => {
    setPaymentStatus('received')
    setBookingState('BOOKING_PENDING')
  }

  const simulatePaymentFailure = () => {
    setPaymentStatus('failed')
    setBookingState('BOOKING_PENDING')
  }

  const bookBackupTrain = () => {
    const backup = getScoredRegularTrains(search, selectedClass.code).find((train) => train.id !== selectedTrain.id)
    if (!backup) return navigate('results')
    const backupClass = backup.classes.find((trainClass) => trainClass.code === selectedClass.code) ?? backup.classes[0]
    setSelectedTrain(backup)
    setSelectedClass(backupClass)
    setSelectedSeats(['21', '22', '23', '24', '26', '27', '28', '30'].slice(0, search.passengers))
    setPaymentStatus('idle')
    setBookingState('BOOKING_PENDING')
    setBookingStageRaw('passengers')
    navigate('booking')
  }

  const renderHome = () => (
    <>
      <section className="hero-section page-container">
        <div className="hero-copy">
          <StatusTag tone="brand" icon="train">A calmer way to travel by rail</StatusTag>
          <h1>Book the journey.<br /><span>Understand every step.</span></h1>
          <p>RailConnect keeps the familiar railway booking essentials and makes the hard parts—Tatkal, RAC, waitlist, seats, payments, and refunds—easier to understand.</p>
          <div className="hero-proof"><span><Icon name="check_circle" /> Clear status language</span><span><Icon name="check_circle" /> Family-friendly choices</span><span><Icon name="check_circle" /> Accessible by default</span></div>
        </div>
        <SearchForm value={search} onChange={updateSearch} onSubmit={runSearch} />
      </section>
      <section className="page-container section-block"><div className="section-heading"><div><p className="eyebrow">Designed around real friction</p><h2>Less decoding. More confidence.</h2></div><button className="ux4g-btn ux4g-btn-text-primary ux4g-btn-md" type="button" onClick={() => navigate('support')}>Explore help <Icon name="arrow_forward" /></button></div><div className="feature-grid">{featureCards.map((feature) => <article className="ux4g-card ux4g-card-solid ux4g-card-vertical feature-card" key={feature.title}><div className="feature-icon"><Icon name={feature.icon} /></div><h3>{feature.title}</h3><p>{feature.body}</p><button className="ux4g-text-link-md" type="button" onClick={() => navigate(feature.title.includes('Tatkal') ? 'results' : 'support')}>See how it works <Icon name="arrow_forward" /></button></article>)}</div></section>
      <section className="page-container section-block journey-principles"><div className="principles-copy"><p className="eyebrow">The booking promise</p><h2>Explain before asking.</h2><p>Every important decision comes with context: what a status means, what may change, what you will pay, and what happens next.</p><div className="principle-list"><div><span className="principle-number">01</span><div><strong>See the trade-off</strong><p>Keep a group together, choose a lower fare, or arrive earlier—without hidden assumptions.</p></div></div><div><span className="principle-number">02</span><div><strong>Know the state</strong><p>Payment received is never presented as booking confirmed until that state is actually reached.</p></div></div><div><span className="principle-number">03</span><div><strong>Get help in context</strong><p>Ask about RAC, coaches, refunds, and delays without losing your place in the journey.</p></div></div></div></div><div className="journey-visual ux4g-card ux4g-card-outline ux4g-card-vertical"><div className="journey-visual-top"><StatusTag tone="success" icon="check_circle">Journey ready</StatusTag><span>Mock PNR · 4512367890</span></div><div className="journey-route"><div><strong>CDG</strong><span>Chandigarh</span></div><div className="visual-line"><span /><i /><span /></div><div><strong>NDLS</strong><span>New Delhi</span></div></div><div className="journey-visual-footer"><span><Icon name="schedule" /> 06:15 · 25 Aug</span><span><Icon name="airline_seat_recline_normal" /> B2 · 21, 22</span></div></div></section>
    </>
  )

  const renderResults = () => {
    const connecting = findConnectingJourney(search.source, search.destination)
    if (connecting) return <div className="results-page page-container"><div className="breadcrumbs"><button type="button" onClick={() => navigate('home')}>Home</button><Icon name="chevron_right" /><span>Search results</span></div><div className="results-header"><div><p className="eyebrow">{formatDate(search.date, true)} · {search.passengers} {search.passengers === 1 ? 'adult' : 'adults'}</p><h1>{search.source} <span>→</span> {search.destination}</h1><p className="results-subtitle">A curated connecting journey with one change.</p></div><button className="ux4g-btn ux4g-btn-outline-primary ux4g-btn-md" type="button" onClick={() => navigate('home')}><Icon name="edit" /> Edit search</button></div><ConnectingJourneyCard journey={connecting} onBookBoth={(route) => startConnectingBooking(route)} /></div>
    let orderedTrains = getScoredRegularTrains(search, selectedClass.code).sort((a, b) => {
      if (priority === 'Cheapest') return a.classes[0].fare - b.classes[0].fare
      if (priority === 'Fastest') return a.duration.localeCompare(b.duration)
      if (priority === 'Best availability') return (b.classes[0].seats ?? 0) - (a.classes[0].seats ?? 0)
      return b.score - a.score
    })
    if (!orderedTrains.length) return <div className="results-page page-container"><div className="breadcrumbs"><button type="button" onClick={() => navigate('home')}>Home</button><Icon name="chevron_right" /><span>Search results</span></div><div className="results-header"><div><p className="eyebrow">{formatDate(search.date, true)} · {search.passengers} {search.passengers === 1 ? 'adult' : 'adults'}</p><h1>{search.source} <span>→</span> {search.destination}</h1><p className="results-subtitle">No prepared direct train set is available for this station pair yet.</p></div><button className="ux4g-btn ux4g-btn-outline-primary ux4g-btn-md" type="button" onClick={() => navigate('home')}><Icon name="edit" /> Edit search</button></div><section className="ux4g-card ux4g-card-outline ux4g-card-vertical empty-results-card"><Icon name="route" /><h2>Try a supported route</h2><p>This prototype has verified direct options for Chandigarh → New Delhi and connecting options for New Delhi → Shimla. We will not show a train from a different station pair as if it were yours.</p><button className="ux4g-btn ux4g-btn-primary ux4g-btn-md" type="button" onClick={() => navigate('home')}>Edit station pair</button></section></div>
    const tieBreak = getTieBreakExplanation(orderedTrains)
    const bookOrWaitAdvice = getBookOrWaitAdvice(orderedTrains)
    const compareTrains = orderedTrains.filter((train) => compareIds.includes(train.id))
    const openingTime = ['2A', '3A', 'CC', 'EC', '3E'].includes(selectedClass.code) ? '10:00 AM' : '11:00 AM'
    const openingAt = new Date(`${search.date}T${openingTime === '10:00 AM' ? '10:00:00' : '11:00:00'}`)
    openingAt.setDate(openingAt.getDate() - 1)
    const tatkalContext = { isOpen: Date.now() >= openingAt.getTime(), opensAt: `${formatDate(openingAt.toISOString().slice(0, 10))} · ${openingTime}`, trains: tatkalTrains.filter((train) => train.classCode === selectedClass.code) }
    const bestPathVerdict = getBestPathVerdict(orderedTrains, tatkalContext, search.passengers, 'Highest chance of confirmation')
    const activateBestPath = () => {
      if (bestPathVerdict.recommendedAction === 'wait_for_tatkal') {
        document.getElementById('tatkal-fallback')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
      const recommendation = orderedTrains.find((train) => train.id === bestPathVerdict.recommendedTrainId) ?? orderedTrains[0]
      if (recommendation) selectTrain(recommendation, recommendation.classes[0])
    }
    return <div className="results-page page-container"><div className="breadcrumbs"><button type="button" onClick={() => navigate('home')}>Home</button><Icon name="chevron_right" /><span>Search results</span></div><div className="results-header"><div><p className="eyebrow">{formatDate(search.date, true)} · {search.passengers} {search.passengers === 1 ? 'adult' : 'adults'}</p><h1>{search.source} <span>→</span> {search.destination}</h1><p className="results-subtitle">Showing mock availability for {search.quota.toLowerCase()} quota. Choose what matters most to you.</p></div><button className="ux4g-btn ux4g-btn-outline-primary ux4g-btn-md" type="button" onClick={() => navigate('home')}><Icon name="edit" /> Edit search</button></div><BestPathCard verdict={bestPathVerdict} onPrimary={activateBestPath} onSeeAll={() => document.getElementById('regular-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' })} /><div className="results-layout"><aside className="results-filters"><div className="filter-heading"><div><p className="eyebrow">Refine</p><h2>Find your fit</h2></div><button className="ux4g-btn ux4g-btn-text-neutral ux4g-btn-sm" type="button">Clear</button></div></aside><main className="train-results" id="regular-results"><div className="results-controls"><div><strong>{orderedTrains.length} trains</strong><span> · Mock result set</span></div><label className="sort-control"><span>Sort by</span><select value={priority} onChange={(event) => setPriority(event.target.value)}><option>Best overall</option><option>Cheapest</option><option>Fastest</option><option>Best availability</option></select></label></div>{tieBreak ? <div className="ux4g-alert ux4g-alert-info tie-break-banner"><Icon name="compare_arrows" /><div>{tieBreak}</div></div> : null}{bookOrWaitAdvice ? <div className="ux4g-alert ux4g-alert-warning book-wait-banner"><Icon name="schedule" /><div><strong>Book-or-wait guidance</strong><span>{bookOrWaitAdvice}</span></div></div> : null}<div className="recommendation-banner ux4g-card ux4g-card-solid ux4g-card-horizontal"><div className="recommendation-mark"><Icon name="auto_awesome" /></div><div><StatusTag tone="brand">Best overall</StatusTag><h2>{orderedTrains[0]?.name}</h2><p>{orderedTrains[0]?.relativeReasons?.[0]}</p></div><div className="recommendation-score"><span>Score</span><strong>{orderedTrains[0]?.score}</strong><small>/100</small></div></div>{orderedTrains.map((train) => <TrainCard key={train.id} train={train} selectedClass={`${selectedTrain.id}-${selectedClass.code}`} compare={compareIds.includes(train.id)} compareDisabled={compareIds.length >= 3 && !compareIds.includes(train.id)} onCompare={() => toggleCompare(train.id)} onSelect={(trainClass) => selectTrain(train, trainClass)} onExplain={(title, body) => setModal({ title, body })} />)}</main></div>{compareTrains.length > 0 ? <div className="compare-tray"><div><strong>Compare trains</strong><span>{compareTrains.length} selected {compareTrains.length < 2 ? '· Select one more' : ''}</span></div><div className="compare-names">{compareTrains.map((train) => <span key={train.id}>{train.name}</span>)}</div><button className="ux4g-btn ux4g-btn-primary ux4g-btn-md" type="button" disabled={compareTrains.length < 2} onClick={() => setShowCompareDrawer(true)}>Compare ({compareTrains.length}) <Icon name="arrow_forward" /></button></div> : null}{showCompareDrawer ? <CompareDrawer trains={compareTrains} onClose={() => setShowCompareDrawer(false)} onSelect={(train) => selectTrain(train, train.classes[0])} /> : null}</div>
  }

  const shouldShowTatkalFallback = () => {
    if (findConnectingJourney(search.source, search.destination)) return false
    if (!getScoredRegularTrains(search, selectedClass.code).length) return false
    const eligibleTrains = trains.filter((train) => train.classes.some((trainClass) => trainClass.code === selectedClass.code))
    return eligibleTrains.length > 0 && !eligibleTrains.some((train) => getConfirmedSeatsForSearch(search.source, search.destination, search.date, selectedClass.code, train.id) > GOOD_ENOUGH_CONFIRMED_SEATS)
  }

  const renderTatkalFallback = () => shouldShowTatkalFallback() ? <section className="page-container tatkal-results-fallback" id="tatkal-fallback"><div className="section-heading"><div><p className="eyebrow"><Icon name="bolt" /> Tatkal</p><h2>An emergency option, when regular seats are limited</h2><p>Regular options are limited for this journey — here is your Tatkal option.</p></div><StatusTag tone="info" icon="science">Mock availability</StatusTag></div><TatkalCommandCard from={search.source} to={search.destination} journeyDate={search.date} selectedClass={selectedClass.code} passengerCount={search.passengers} preference="Highest chance of confirmation" onBook={bookTatkalTrain} /></section> : null

  const booking: BookingState = { train: selectedTrain, selectedClass, selectedSeats, passengers, keepTogether, seatPreference, quota: search.quota }

  const renderBooking = () => {
    if (bookingStage === 'confirmation') return renderConfirmation()
    if ((bookingStage as BookingStage) === 'passengers') return <div className="booking-page page-container"><div className="breadcrumbs"><button type="button" onClick={() => navigate('results')}>Search results</button><Icon name="chevron_right" /><span>Passenger confirmation</span></div><div className="booking-header"><div><p className="eyebrow">Step 1 of 4</p><h1>Confirm your passengers</h1><p>Saved details are ready for this journey. Update anything that needs changing, then choose seats.</p></div><StatusTag tone="success" icon="check_circle">Details saved</StatusTag></div><BookingStepper active="passengers" /><section className="booking-section passenger-confirmation"><PassengerFields passengers={passengers} onChange={setPassengers} /><div className="booking-actions"><button className="ux4g-btn ux4g-btn-outline-primary ux4g-btn-md" type="button" onClick={() => navigate('results')}>Back to results</button><button className="ux4g-btn ux4g-btn-primary ux4g-btn-md" type="button" disabled={passengers.some((passenger) => !passenger.name || !passenger.age)} onClick={() => setBookingStage('seats')}>Continue to seat selection <Icon name="arrow_forward" /></button></div></section></div>
    return <div className="booking-page page-container"><div className="breadcrumbs"><button type="button" onClick={() => navigate('results')}>Search results</button><Icon name="chevron_right" /><span>Book your journey</span></div><div className="booking-header"><div><p className="eyebrow">{selectedTrain.number} · {selectedTrain.name}</p><h1>Book with confidence</h1><p>{selectedTrain.departure} {selectedTrain.sourceCode} → {selectedTrain.arrival} {selectedTrain.destinationCode} · {selectedClass.code} · {search.quota}</p></div><StatusTag tone="info" icon="science">Mock booking flow</StatusTag></div><BookingStepper active={bookingStage} /><div className="booking-layout"><div className="booking-main">{bookingStage === 'seats' ? <section className="booking-section"><div className="section-heading"><div><p className="eyebrow">Step 2 of 4</p><h2>Choose where you want to sit</h2><p>We will try to keep your passengers together, but we will not promise seats that are not available.</p></div><StatusTag tone="success">{selectedSeats.length}/{search.passengers} seats selected</StatusTag></div><div className="choice-card ux4g-card ux4g-card-outline ux4g-card-vertical"><div className="choice-card-header"><div><h3>Travelling as a family or group?</h3><p>Tell us your preference so we can show the trade-off clearly.</p></div><label className="ux4g-switch ux4g-switch-md"><input type="checkbox" checked={keepTogether} onChange={(event) => setKeepTogether(event.target.checked)} /><span /></label></div>{keepTogether ? <div className="preference-options"><label className="ux4g-radio ux4g-radio-md"><input type="radio" name="seat-preference" checked={seatPreference === 'together'} onChange={() => setSeatPreference('together')} /><span>Keep passengers together</span></label><label className="ux4g-radio ux4g-radio-md"><input type="radio" name="seat-preference" checked={seatPreference === 'same-coach'} onChange={() => setSeatPreference('same-coach')} /><span>Same coach, if possible</span></label><label className="ux4g-radio ux4g-radio-md"><input type="radio" name="seat-preference" checked={seatPreference === 'any'} onChange={() => setSeatPreference('any')} /><span>Any available seats</span></label></div> : <div className="choice-muted"><Icon name="info" /> We will assign the best available seats for each passenger.</div>}</div><div className="coach-section"><div className="section-heading"><div><h3>Choose a coach</h3><p>Coach placement is indicative until allocation is confirmed.</p></div><span className="selection-note"><Icon name="touch_app" /> Select to preview</span></div><CoachMap selectedCoach={selectedCoach} onSelect={setSelectedCoach} /></div><div className="seat-section"><div className="section-heading"><div><h3>Choose seats in {selectedCoach}</h3><p>Selected seats will be requested for your passengers.</p></div></div><SeatMap selectedSeats={selectedSeats} onToggle={toggleSeat} /></div><div className="booking-actions"><button className="ux4g-btn ux4g-btn-outline-primary ux4g-btn-md" type="button" onClick={() => navigate('results')}>Back</button><button className="ux4g-btn ux4g-btn-primary ux4g-btn-md" type="button" disabled={selectedSeats.length !== search.passengers} onClick={() => setBookingStage('passengers')}>Continue to review <Icon name="arrow_forward" /></button></div></section> : null}{bookingStage === 'passengers' ? <section className="booking-section"><div className="section-heading"><div><p className="eyebrow">Step 2 of 4</p><h2>Who is travelling?</h2><p>Use names exactly as they should appear on the ticket. This is mock passenger data.</p></div><StatusTag tone="info">{passengers.length} passengers</StatusTag></div><div className="ux4g-alert ux4g-alert-info context-alert"><Icon name="info" /><div><strong>Keep details ready for Tatkal</strong><p>For Tatkal, passenger details may be needed quickly when the booking window opens.</p></div></div><PassengerFields passengers={passengers} onChange={setPassengers} /><div className="booking-actions"><button className="ux4g-btn ux4g-btn-outline-primary ux4g-btn-md" type="button" onClick={() => setBookingStage('seats')}>Back</button><button className="ux4g-btn ux4g-btn-primary ux4g-btn-md" type="button" disabled={passengers.some((passenger) => !passenger.name || !passenger.age)} onClick={() => setBookingStage('review')}>Review booking <Icon name="arrow_forward" /></button></div></section> : null}{bookingStage === 'review' ? <section className="booking-section"><div className="section-heading"><div><p className="eyebrow">Step 3 of 4</p><h2>Review before payment</h2><p>Read the fare, seat request, and booking-state promise before continuing.</p></div><StatusTag tone="warning">Availability rechecked at payment</StatusTag></div><div className="ux4g-alert ux4g-alert-warning context-alert"><Icon name="schedule" /><div><strong>Seats are requested, not confirmed yet</strong><p>We will check availability again before the booking is confirmed. Payment received and booking confirmed are separate states.</p></div></div><ReviewCard booking={booking} /><div className="booking-actions"><button className="ux4g-btn ux4g-btn-outline-primary ux4g-btn-md" type="button" onClick={() => setBookingStage('passengers')}>Back</button><button className="ux4g-btn ux4g-btn-primary ux4g-btn-md" type="button" onClick={() => setBookingStage('payment')}>Continue to payment <Icon name="arrow_forward" /></button></div></section> : null}{bookingStage === 'payment' ? <section className="booking-section"><div className="section-heading"><div><p className="eyebrow">Step 4 of 4</p><h2>Payment and confirmation</h2><p>Your card details are not collected in this prototype.</p></div><StatusTag tone="info" icon="lock">Secure demo</StatusTag></div><PaymentPanel status={paymentStatus} onPay={startPayment} onAvailabilityChange={simulateAvailabilityChange} onPaymentFailure={simulatePaymentFailure} onBookBackup={bookBackupTrain} onRetry={() => setPaymentStatus('idle')} onReview={() => setBookingStage('review')} /><div className="booking-actions"><button className="ux4g-btn ux4g-btn-outline-primary ux4g-btn-md" type="button" onClick={() => setBookingStage('review')}>Back</button></div></section> : null}</div><BookingSummary booking={booking} onChangeClass={() => navigate('results')} /></div></div>
  }

  const renderConfirmation = () => <div className="confirmation-page page-container"><div className="confirmation-hero"><div className="confirmation-mark"><Icon name="check" /></div><StatusTag tone="success">{connectingJourney && connectingLegIndex === 0 ? 'Leg 1 confirmed' : 'Mock booking confirmed'}</StatusTag><h1>{connectingJourney && connectingLegIndex === 0 ? 'First leg is ready' : 'Your journey is ready'}</h1><p>{connectingJourney && connectingLegIndex === 0 ? 'Your first booking is confirmed. Continue to the Kalka–Shimla leg without re-entering passenger details.' : 'Your payment and booking are shown as separate states. This confirmation uses mock railway data and does not reserve a real seat.'}</p></div><div className="confirmation-grid"><div className="confirmation-main"><div className="ux4g-card ux4g-card-solid ux4g-card-vertical pnr-card"><div className="pnr-top"><div><p className="eyebrow">Demo PNR</p><strong>4512367890</strong></div><StatusTag tone="success" icon="verified">CONFIRMED</StatusTag></div><div className="pnr-route"><div><strong>{selectedTrain.sourceCode}</strong><span>{selectedTrain.departure}</span><small>{selectedTrain.source}</small></div><div className="pnr-route-line"><Icon name="train" /><span>{selectedTrain.duration}</span></div><div><strong>{selectedTrain.destinationCode}</strong><span>{selectedTrain.arrival}</span><small>{selectedTrain.destination}</small></div></div><div className="pnr-footer"><span><Icon name="calendar_month" /> {formatDate(search.date)}</span><span><Icon name="airline_seat_recline_normal" /> {selectedCoach} · {selectedSeats.join(', ')}</span><span><Icon name="group" /> {passengers.length} travellers</span></div></div><div className="status-distinction"><div><StatusTag tone="success">Payment received</StatusTag><p>Your demo payment has been accepted.</p></div><div><StatusTag tone="success">Booking confirmed</StatusTag><p>Your demo seat request has moved to confirmed.</p></div><div><StatusTag tone="info">Journey updates on</StatusTag><p>Mock notifications will appear in your journey dashboard.</p></div></div><div className="confirmation-actions">{connectingJourney && connectingLegIndex === 0 ? <button className="ux4g-btn ux4g-btn-primary ux4g-btn-md" type="button" onClick={continueConnectingLeg}>Continue to leg 2 <Icon name="arrow_forward" /></button> : <button className="ux4g-btn ux4g-btn-primary ux4g-btn-md" type="button" onClick={() => navigate('journey')}>Open journey dashboard <Icon name="arrow_forward" /></button>}<button className="ux4g-btn ux4g-btn-outline-primary ux4g-btn-md" type="button" onClick={() => window.print()}><Icon name="download" /> Save summary</button></div></div><aside><AssistantPanel /></aside></div></div>

  const renderJourney = () => {
    const journeyFrom = connectingJourney?.fromStation.name ?? 'Chandigarh'
    const journeyTo = connectingJourney?.toStation.name ?? 'New Delhi'
    const ticketPrice = selectedClass.fare * passengers.length
    const cancellationCharge = Math.round(ticketPrice * 0.15)
    const otherCharges = 20
    const estimatedRefund = Math.max(0, ticketPrice - cancellationCharge - otherCharges)
    return <div className="journey-page page-container"><div className="breadcrumbs"><button type="button" onClick={() => navigate('home')}>Home</button><Icon name="chevron_right" /><span>Journey dashboard</span></div><div className="journey-dashboard-header"><div><p className="eyebrow">Your journey · Demo PNR 4512367890</p><h1>{journeyFrom} → {journeyTo}</h1><p>{formatDate(search.date, true)} · {selectedTrain.name} · {selectedTrain.number}</p></div><StatusTag tone={bookingState === 'CONFIRMED' ? 'success' : 'warning'} icon={bookingState === 'CONFIRMED' ? 'check_circle' : 'schedule'}>{bookingState === 'CONFIRMED' ? 'Confirmed' : bookingState.replace('_', ' ')}</StatusTag></div><div className="journey-grid"><main><div className="journey-alert ux4g-alert ux4g-alert-warning context-alert"><Icon name="schedule" /><div><strong>Mock journey update</strong><p>Your train is expected to depart at {selectedTrain.departure} from the assigned platform. Live delay data is not connected.</p></div></div><section className="ux4g-card ux4g-card-solid ux4g-card-vertical journey-card"><div className="section-heading"><div><p className="eyebrow">Live journey timeline</p><h2>What happens next</h2></div><StatusTag tone="info">Mock updates</StatusTag></div><div className="ux4g-journey-timeline ux4g-journey-timeline--vertical journey-timeline"><TimelineItem icon="check" title="Booking confirmed" body="Your mock booking is confirmed." state="complete" /><TimelineItem icon="notifications" title="Boarding reminder" body="We will remind you 30 minutes before departure." state="active" /><TimelineItem icon="train" title={`Depart from ${selectedTrain.source}`} body={`${selectedTrain.sourceCode} · ${selectedTrain.departure}`} /><TimelineItem icon="location_on" title={`Arrive at ${selectedTrain.destination}`} body={`${selectedTrain.destinationCode} · ${selectedTrain.arrival} · On schedule in mock data`} /></div></section><section className="ux4g-card ux4g-card-outline ux4g-card-vertical journey-card"><div className="section-heading"><div><p className="eyebrow">Know your seat</p><h2>Coach and allocation</h2></div><StatusTag tone="success" icon="airline_seat_recline_normal">{selectedCoach} · {selectedSeats.join(', ')}</StatusTag></div><CoachMap selectedCoach={selectedCoach} onSelect={setSelectedCoach} /><div className="coach-allocation"><div><strong>{selectedCoach} · {selectedSeats[0] ?? '—'}</strong><span>Lower berth · Passenger 1</span></div><div><strong>{selectedCoach} · {selectedSeats[1] ?? '—'}</strong><span>Middle berth · Passenger 2</span></div><p><Icon name="info" /> Seats are shown as confirmed in this mock journey. Actual coach allocation depends on the connected railway service.</p></div></section></main><aside className="journey-sidebar"><AssistantPanel /><section className="ux4g-card ux4g-card-solid ux4g-card-vertical refund-card"><div className="section-heading"><div><p className="eyebrow">Need to change plans?</p><h2>Cancellation & refund</h2></div><Icon name="receipt_long" /></div>{refundStatus === 'idle' ? <><div className="refund-breakdown"><span>Ticket price <strong>₹{ticketPrice.toLocaleString('en-IN')}</strong></span><span>Cancellation charge <strong>₹{cancellationCharge.toLocaleString('en-IN')}</strong></span><span>Other charges <strong>₹{otherCharges}</strong></span><hr /><span className="refund-total">Estimated refund <strong>₹{estimatedRefund.toLocaleString('en-IN')}</strong></span></div><p className="refund-note">Expected in 3–5 business days to your original payment method.</p><button className="ux4g-btn ux4g-btn-danger ux4g-btn-md" type="button" onClick={() => setRefundStatus('confirming')}>Review cancellation</button></> : refundStatus === 'confirming' ? <div className="refund-confirm"><div className="ux4g-alert ux4g-alert-warning context-alert"><Icon name="warning" /><div><strong>You will receive approximately ₹{estimatedRefund.toLocaleString('en-IN')}</strong><p>₹{cancellationCharge.toLocaleString('en-IN')} cancellation charge and ₹{otherCharges} non-refundable charges will be deducted.</p></div></div><div className="refund-actions"><button className="ux4g-btn ux4g-btn-outline-primary ux4g-btn-md" type="button" onClick={() => setRefundStatus('idle')}>Keep ticket</button><button className="ux4g-btn ux4g-btn-danger ux4g-btn-md" type="button" onClick={() => { setRefundStatus('initiated'); setBookingState('REFUND_PENDING') }}>Confirm cancellation</button></div></div> : <div className="ux4g-alert ux4g-alert-success context-alert"><Icon name="check_circle" /><div><strong>Refund initiated in prototype</strong><p>Refund ID REF123456 · Expected in 3–5 business days. No real payment was processed.</p></div></div>}</section></aside></div></div>
  }

  const renderSupport = () => <div className="support-page page-container"><div className="support-hero"><div><StatusTag tone="brand" icon="support_agent">Support centre</StatusTag><h1>Help that knows where you are in the journey.</h1><p>Get plain-language explanations for railway terms, booking problems, refunds, and journey updates.</p></div><div className="support-search"><label className="ux4g-form-group"><span>Search help</span><div className="ux4g-input-container ux4g-input-md ux4g-input-default"><Icon name="search" /><input placeholder="Try “What does RAC mean?”" /></div></label><button className="ux4g-btn ux4g-btn-primary ux4g-btn-md" type="button">Search help</button></div></div><div className="support-grid"><main><div className="section-heading"><div><p className="eyebrow">Popular questions</p><h2>Start with an answer</h2></div><StatusTag tone="info">Plain language</StatusTag></div><FAQPanel /><div className="support-options"><article className="ux4g-card ux4g-card-outline ux4g-card-vertical"><Icon name="receipt_long" /><h3>Booking-specific support</h3><p>Get help with payment, cancellation, refunds, and status changes for a specific journey.</p><button className="ux4g-btn ux4g-btn-outline-primary ux4g-btn-md" type="button" onClick={() => navigate('journey')}>Open a journey <Icon name="arrow_forward" /></button></article><article className="ux4g-card ux4g-card-outline ux4g-card-vertical"><Icon name="person" /><h3>Talk to a human</h3><p>Escalate a problem when the assistant or help centre cannot resolve it.</p><button className="ux4g-btn ux4g-btn-outline-primary ux4g-btn-md" type="button" onClick={() => setModal({ title: 'Human support is a prototype path', body: 'In production this would create a support case with your booking context. No case is actually submitted from this demo.' })}>See escalation path</button></article></div></main><aside><AssistantPanel /></aside></div></div>

  return <div className="app-root"><a className="skip-link" href="#main-content">Skip to main content</a><div className="ux4g-topbar"><div className="ux4g-topbar__wrap page-container"><span>Government-ready railway booking prototype</span><div className="topbar-actions"><button type="button" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}><Icon name={theme === 'light' ? 'dark_mode' : 'light_mode'} /> {theme === 'light' ? 'Dark mode' : 'Light mode'}</button><span className="topbar-divider" /><button type="button" onClick={() => setModal({ title: 'Accessibility first', body: 'This prototype uses semantic landmarks, visible focus, keyboard-friendly controls, readable status copy, and touch-sized interactive targets. Use your browser zoom to test the layout.' })}>Accessibility</button></div></div></div><header className="ux4g-navbar app-navbar"><div className="ux4g-navbar-wrap page-container"><button className="brand-lockup" type="button" onClick={() => navigate('home')}><span className="brand-mark"><Icon name="train" /></span><span><strong>RailConnect</strong><small>Indian railway booking</small></span></button><nav className="main-nav" aria-label="Main navigation"><button className={`nav-link ${view === 'home' ? 'active' : ''}`} type="button" onClick={() => navigate('home')}>Book a journey</button><button className={`nav-link ${view === 'journey' ? 'active' : ''}`} type="button" onClick={() => navigate('journey')}>Trips & PNR</button><button className={`nav-link ${view === 'support' ? 'active' : ''}`} type="button" onClick={() => navigate('support')}>Help centre</button></nav><div className="navbar-actions"><NotificationIconButton count={3} onClick={() => setShowNotifications(true)} /><button className="ux4g-btn ux4g-btn-outline-primary ux4g-btn-sm" type="button">Sign in</button></div></div></header><main id="main-content">{view === 'home' ? renderHome() : null}{view === 'results' ? <>{renderResults()}{renderTatkalFallback()}</> : null}{view === 'booking' ? renderBooking() : null}{view === 'journey' ? renderJourney() : null}{view === 'support' ? renderSupport() : null}</main><footer className="ux4g-footer-wrapper ux4g-footer-primary app-footer"><div className="ux4g-footer-row page-container"><div><strong>RailConnect</strong><p>A clearer prototype for a complex public-service journey.</p></div><div className="footer-links"><button type="button" onClick={() => navigate('support')}>Help centre</button><button type="button" onClick={() => setModal({ title: 'About this prototype', body: 'RailConnect is a UX4G-based competition prototype. It preserves core railway concepts while making statuses, trade-offs, and next steps clearer.' })}>About</button><span>© 2026 Prototype</span></div></div></footer>{modal ? <ExplanationModal title={modal.title} body={modal.body} onClose={() => setModal(null)} /> : null}{showNotifications ? <NotificationDrawer onClose={() => setShowNotifications(false)} /> : null}</div>
}

function ReviewCard({ booking }: { booking: BookingState }) {
  return <div className="review-card ux4g-card ux4g-card-solid ux4g-card-vertical"><div className="review-card-heading"><div><p className="eyebrow">Passenger review</p><h3>{booking.train.number} · {booking.train.name}</h3><p>{booking.train.departure} {booking.train.sourceCode} → {booking.train.arrival} {booking.train.destinationCode} · {booking.selectedClass.code}</p></div><StatusTag tone="brand">{booking.quota}</StatusTag></div><div className="review-grid"><div><span>Travellers</span><strong>{booking.passengers.map((passenger) => `${passenger.name} (${passenger.age})`).join(', ')}</strong></div><div><span>Fare</span><strong>₹{booking.selectedClass.fare.toLocaleString('en-IN')} × {booking.passengers.length}</strong></div><div><span>Preference</span><strong>{booking.keepTogether ? 'Keep passengers together' : 'Best available allocation'}</strong></div><div><span>Total incl. fees</span><strong>₹{((booking.selectedClass.fare * booking.passengers.length) + 60).toLocaleString('en-IN')}</strong></div></div></div>
}

function BookingSummary({ booking, onChangeClass }: { booking: BookingState; onChangeClass: () => void }) {
  const baseFare = booking.selectedClass.fare * booking.passengers.length
  const totalFare = baseFare + 60
  return <aside className="booking-summary ux4g-card ux4g-card-solid ux4g-card-vertical">
    <div className="summary-heading"><div><p className="eyebrow">Your booking</p><h2>Fare summary</h2></div><StatusTag tone="info">Mock fare</StatusTag></div>
    <div className="summary-train"><div><strong>{booking.train.sourceCode}</strong><span>{booking.train.departure}</span></div><Icon name="arrow_forward" /><div><strong>{booking.train.destinationCode}</strong><span>{booking.train.arrival}</span></div></div>
    <div className="summary-class"><div><strong>{booking.selectedClass.code} · {booking.selectedClass.label}</strong><span>{booking.quota} quota · {booking.passengers.length} travellers</span></div><button className="ux4g-text-link-md" type="button" onClick={onChangeClass}>Change</button></div>
    <div className="summary-lines"><span>Base fare ({booking.passengers.length} × ₹{booking.selectedClass.fare.toLocaleString('en-IN')}) <strong>₹{baseFare.toLocaleString('en-IN')}</strong></span><span>Reservation fee <strong>₹40</strong></span><span>Convenience fee <strong>₹20</strong></span><hr /><span className="summary-total">Total <strong>₹{totalFare.toLocaleString('en-IN')}</strong></span></div>
    <div className="summary-note"><Icon name="verified_user" /><p>Final availability is checked again before confirmation.</p></div>
  </aside>
}

function PaymentPanel({ status, onPay, onAvailabilityChange, onPaymentFailure, onBookBackup, onRetry, onReview }: { status: PaymentStatus; onPay: () => void; onAvailabilityChange: () => void; onPaymentFailure: () => void; onBookBackup: () => void; onRetry: () => void; onReview: () => void }) {
  if (status === 'processing') return <div className="payment-state"><span className="ux4g-spinner-primary-full ux4g-spinner-md" role="status" aria-label="Processing demo payment" /><h3>Checking availability and processing demo payment</h3><p>Payment and booking confirmation are being kept as separate states.</p></div>
  if (status === 'received') return <div className="ux4g-alert ux4g-alert-warning context-alert availability-change"><Icon name="warning" /><div><strong>Availability changed</strong><p>The seat request is no longer available. Demo payment was received, so we are verifying the booking instead of silently continuing.</p><StatusTag tone="warning">Payment received · Booking pending</StatusTag><div className="payment-recovery-actions"><button className="ux4g-btn ux4g-btn-primary ux4g-btn-md" type="button" onClick={onBookBackup}>Book backup train</button><button className="ux4g-btn ux4g-btn-outline-primary ux4g-btn-md" type="button" onClick={onReview}>Review booking</button></div></div></div>
  if (status === 'failed') return <div className="ux4g-alert ux4g-alert-error context-alert payment-failed" role="alert"><Icon name="error" /><div><strong>Payment failed</strong><p>No money was received in this mock attempt. Your passenger and seat details are still saved.</p><button className="ux4g-btn ux4g-btn-primary ux4g-btn-md" type="button" onClick={onRetry}>Try payment again</button></div></div>
  return <div className="payment-panel"><div className="payment-method"><div className="payment-method-icon"><Icon name="account_balance_wallet" /></div><div><strong>UPI or card</strong><span>Demo payment form · no card details are collected</span></div><StatusTag tone="success" icon="lock">Secure</StatusTag></div><div className="payment-disclosure"><Icon name="info" /><p>Before payment, we will check availability again. If it changes, you will see exactly whether payment was received and whether booking is still pending.</p></div><div className="payment-actions"><button className="ux4g-btn ux4g-btn-primary ux4g-btn-md" type="button" onClick={onPay}><Icon name="lock" /> Pay securely</button><button className="ux4g-btn ux4g-btn-text-neutral ux4g-btn-md" type="button" onClick={onAvailabilityChange}>Simulate availability change</button><button className="ux4g-btn ux4g-btn-text-neutral ux4g-btn-md" type="button" onClick={onPaymentFailure}>Simulate payment failure</button></div></div>
}

function TimelineItem({ icon, title, body, state = '' }: { icon: string; title: string; body: string; state?: string }) {
  return <div className={`ux4g-journey-timeline-item ${state}`}><div className="ux4g-journey-timeline-marker"><Icon name={icon} /></div><div className="ux4g-journey-timeline-content"><strong>{title}</strong><p>{body}</p></div></div>
}

export default App
