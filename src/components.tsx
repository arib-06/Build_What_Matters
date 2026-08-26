import { useEffect, useState } from 'react'
import type { ChangeEvent, CSSProperties, FormEvent, ReactNode } from 'react'
import { faqItems, getStatusLabel, getStatusTone, mockNotifications, tatkalTrains } from './data'
import type { TatkalTrain } from './data'
import { buildComparisonRows } from './lib/comparison'
import type { ScoredTrain } from './lib/scoring'
import { getWaitlistInsight } from './lib/explain'
import type { BestPathVerdict } from './lib/bestPath'
import type { ConnectingJourney, ConnectionRisk } from './data/mockConnectingJourneys'
import type { BookingStage, Passenger, Quota, SearchState, StatusTone, Train, TrainClassAvailability } from './types'

export function Icon({ name }: { name: string }) {
  return <span aria-hidden="true" className="ux4g-icon-outlined">{name}</span>
}

export function StatusTag({ tone, children, icon }: { tone: StatusTone; children: ReactNode; icon?: string }) {
  return (
    <span className={`ux4g-tag-tonal-${tone} ux4g-tag-s app-status-tag`}>
      {icon ? <Icon name={icon} /> : null}
      {children}
    </span>
  )
}

export function WaitlistExplainer({ status, position, outlook }: { status: 'GNWL' | 'RLWL' | 'PQWL' | 'TQWL' | 'RAC'; position?: number; outlook?: 'Likely to confirm' | 'Possible' | 'Unlikely to confirm' }) {
  const [open, setOpen] = useState(false)
  const insight = getWaitlistInsight(status, position, outlook)
  return <>
    <button className="status-why" type="button" onClick={(event) => { event.stopPropagation(); setOpen((current) => !current) }} aria-expanded={open}>Why?</button>
    {open ? <small className="waitlist-insight"><strong>{insight.summary}</strong><span>{insight.detail}</span><span>{insight.nextStep}</span></small> : null}
  </>
}

export function BestPathCard({ verdict, onPrimary, onSeeAll }: { verdict: BestPathVerdict; onPrimary: () => void; onSeeAll: () => void }) {
  return <section className="best-path-card ux4g-card ux4g-card-solid ux4g-card-vertical" aria-labelledby="best-path-heading">
    <div className="best-path-copy"><p className="eyebrow">YOUR BEST PATH</p><h2 id="best-path-heading">{verdict.headline}</h2><p className="best-path-reasoning">{verdict.reasoning}</p><p className="best-path-personalized">{verdict.personalizedNote}</p><p className="best-path-notification"><Icon name="notifications" /> {verdict.notificationTeaser}</p></div>
    <div className="best-path-score"><strong>{verdict.confidence}</strong><span>confidence</span></div>
    <div className="best-path-actions"><button className="ux4g-btn ux4g-btn-primary ux4g-btn-md" type="button" onClick={onPrimary}>{verdict.recommendedAction === 'wait_for_tatkal' ? 'PREPARE FOR TATKAL' : 'BOOK THIS'} <Icon name="arrow_forward" /></button><button className="ux4g-btn ux4g-btn-text-primary ux4g-btn-md" type="button" onClick={onSeeAll}>See all options</button></div>
  </section>
}

const riskTone: Record<ConnectionRisk, StatusTone> = { tight: 'warning', comfortable: 'success', ample: 'info' }

export function ConnectingJourneyCard({ journey, onBookBoth }: { journey: ConnectingJourney; onBookBoth: (route: ConnectingJourney) => void }) {
  const options = [journey, ...(journey.alternatives ?? [])]
  const [selectedRouteId, setSelectedRouteId] = useState(journey.routeId)
  const selectedRoute = options.find((option) => option.routeId === selectedRouteId) ?? options[0]
  return <section className="connecting-journey-card ux4g-card ux4g-card-solid ux4g-card-vertical" aria-labelledby="connecting-journey-heading">
    <div className="section-heading"><div><p className="eyebrow">CONNECTING JOURNEY</p><h2 id="connecting-journey-heading">No direct train — here’s how to get there</h2><p>{options.length} prepared routes · each with one change</p></div><StatusTag tone="info" icon="route">Two separate bookings</StatusTag></div>
    <div className="connecting-route-options" role="radiogroup" aria-label="Connecting train routes">
      {options.map((option) => {
        const connection = option.connections[0]
        const durationHours = Math.floor(option.totalDurationMinutes / 60)
        const durationMinutes = option.totalDurationMinutes % 60
        const isSelected = option.routeId === selectedRoute.routeId
        return <article className={`connecting-route-option ${isSelected ? 'is-selected' : ''}`} key={option.routeId}>
          <button className="connecting-route-select" type="button" role="radio" aria-checked={isSelected} onClick={() => setSelectedRouteId(option.routeId)}>
            <span><strong>{option.routeLabel}</strong><small>{option.routeReason}</small></span>
            <span className="connecting-route-metrics"><strong>{durationHours}h {durationMinutes}m</strong><small>₹{option.totalPrice.toLocaleString('en-IN')} total</small></span>
          </button>
          <div className="connecting-route-legs">
            {option.legs.map((leg, index) => <div className="connecting-leg" key={leg.train.id}><div className="connecting-leg-heading"><div><span>LEG {index + 1}</span><h3>{leg.train.number} · {leg.train.name}</h3></div><StatusTag tone="success">{leg.train.classes[0].seats} seats</StatusTag></div><div className="connecting-leg-route"><strong>{leg.train.departure}</strong><span>{leg.fromStation.code} {leg.fromStation.name}</span><i>→</i><strong>{leg.train.arrival}</strong><span>{leg.toStation.code} {leg.toStation.name}</span></div><p>{leg.train.duration} · {leg.train.classes[0].code} · ₹{leg.train.classes[0].fare.toLocaleString('en-IN')}</p>{index === 0 && connection ? <div className={`connecting-connection risk-${connection.risk}`}><Icon name="sync_alt" /><div><strong>Change at {connection.atStation} · {connection.bufferMinutes} min</strong><span>{connection.arrivalOfPreviousLeg} arrival → {connection.departureOfNextLeg} departure · {connection.riskNote}</span><StatusTag tone={riskTone[connection.risk]}>{connection.risk}</StatusTag></div></div> : null}</div>)}
          </div>
        </article>
      })}
    </div>
    <div className="connecting-summary"><span>Selected route <strong>{selectedRoute.routeLabel}</strong></span><span>Total fare <strong>₹{selectedRoute.totalPrice.toLocaleString('en-IN')}</strong></span><p><Icon name="info" /> Each leg gets its own booking and PNR. Passenger details will carry across both.</p></div><button className="ux4g-btn ux4g-btn-primary ux4g-btn-md" type="button" onClick={() => onBookBoth(selectedRoute)}>BOOK THIS ROUTE <Icon name="arrow_forward" /></button>
  </section>
}

export function SearchForm({ value, onChange, onSubmit, compact = false }: {
  value: SearchState
  onChange: (next: SearchState) => void
  onSubmit: (search: SearchState) => void
  compact?: boolean
}) {
  const update = (key: keyof SearchState, next: string | number) => onChange({ ...value, [key]: next })
  return (
    <form className={`search-form ${compact ? 'search-form-compact' : ''}`} onSubmit={(event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      // Read directly from the submitted controls as well as the prop. This
      // keeps a just-edited date or traveller count when submit happens in the
      // same tick as the controlled input's state update.
      const form = event.currentTarget
      const fieldValue = (selector: string) => form.querySelector<HTMLInputElement | HTMLSelectElement>(selector)?.value
      const quota = form.querySelector<HTMLInputElement>('input[name="quota"]:checked')?.value as Quota | undefined
      onSubmit({
        ...value,
        source: fieldValue('[aria-label="From station"]') ?? value.source,
        destination: fieldValue('[aria-label="To station"]') ?? value.destination,
        date: fieldValue('[aria-label="Journey date"]') ?? value.date,
        passengers: Number(fieldValue('[aria-label="Number of travellers"]') ?? value.passengers),
        quota: quota ?? value.quota,
      })
    }}>
      <div className="search-form-heading">
        <div>
          <p className="eyebrow">Plan your journey</p>
          <h2>{compact ? 'Update your search' : 'Where will you go next?'}</h2>
        </div>
        <StatusTag tone="info" icon="verified_user">Mock journey data</StatusTag>
      </div>
      <div className="search-fields">
        <label className="ux4g-form-group station-field">
          <span>From</span>
          <div className="ux4g-input-container ux4g-input-md ux4g-input-default">
            <Icon name="trip_origin" />
            <input aria-label="From station" list="station-options" value={value.source} onChange={(event) => update('source', event.target.value)} placeholder="Station or city" />
          </div>
        </label>
        <button className="ux4g-icon-btn ux4g-icon-btn-outline-primary ux4g-icon-btn-md swap-button" type="button" aria-label="Swap departure and arrival stations" onClick={() => onChange({ ...value, source: value.destination, destination: value.source })}>
          <Icon name="swap_horiz" />
        </button>
        <label className="ux4g-form-group station-field">
          <span>To</span>
          <div className="ux4g-input-container ux4g-input-md ux4g-input-default">
            <Icon name="location_on" />
            <input aria-label="To station" list="station-options" value={value.destination} onChange={(event) => update('destination', event.target.value)} placeholder="Station or city" />
          </div>
        </label>
        <label className="ux4g-form-group">
          <span>Journey date</span>
          <div className="ux4g-date-picker-container ux4g-input-md">
            <Icon name="calendar_month" />
            <input className="ux4g-date-picker-input" aria-label="Journey date" type="date" value={value.date} onChange={(event) => update('date', event.target.value)} />
          </div>
        </label>
        <label className="ux4g-form-group">
          <span>Travellers</span>
          <div className="ux4g-input-container ux4g-input-md ux4g-input-default">
            <Icon name="group" />
            <select aria-label="Number of travellers" value={value.passengers} onChange={(event) => update('passengers', Number(event.target.value))}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((count) => <option key={count} value={count}>{count} {count === 1 ? 'Adult' : 'Adults'}</option>)}
            </select>
          </div>
        </label>
      </div>
      <fieldset className="quota-fieldset">
        <legend>Quota</legend>
        <div className="quota-options">
          {(['General', 'Tatkal', 'Premium Tatkal'] as Quota[]).map((quota) => (
            <label key={quota} className="ux4g-radio ux4g-radio-md">
              <input type="radio" name="quota" value={quota} checked={value.quota === quota} onChange={() => update('quota', quota)} />
              <span>{quota}</span>
            </label>
          ))}
        </div>
      </fieldset>
      {value.quota === 'Tatkal' ? (
        <div className="tatkal-inline" role="status">
          <Icon name="bolt" />
          <div><strong>Tatkal opens today at 10:00 AM</strong><span>Have passenger details ready. AC classes are eligible in this mock journey.</span></div>
          <span className="tatkal-countdown">00:42:18</span>
        </div>
      ) : null}
      <button className="ux4g-btn ux4g-btn-primary ux4g-btn-md search-submit" type="submit">
        <Icon name="search" /> Search trains
      </button>
      <datalist id="station-options"><option value="Chandigarh" /><option value="New Delhi" /><option value="Kalka" /><option value="Shimla" /><option value="NDLS" /><option value="KLK" /><option value="SML" /></datalist>
    </form>
  )
}

export type TatkalPreference = 'Highest chance of confirmation' | 'Earliest arrival' | 'Lowest price'

const AC_TATKAL_CLASSES = ['2A', '3A', 'CC', 'EC', '3E']

const formatCountdown = (seconds: number) => [Math.floor(seconds / 3600), Math.floor(seconds / 60) % 60, seconds % 60]
  .map((part) => String(Math.max(0, part)).padStart(2, '0')).join(':')

// Future OpenAI integration point: preserve this input/output contract when replacing mock copy.
export function getRecommendationReasoning(train: TatkalTrain, preference: TatkalPreference): string {
  if (preference === 'Lowest price') return `${train.name} keeps this ${train.classCode} option among the lower fares prepared for your route.`
  if (preference === 'Earliest arrival') return `${train.name} is prepared for an earlier arrival while keeping your ${train.classCode} preference.`
  return `${train.name} is the strongest prepared fit for confirmation-focused travel in ${train.classCode}.`
}

function TatkalTrainOption({ train, seats, preference, primary = false, onBook }: { train: TatkalTrain; seats?: number; preference: TatkalPreference; primary?: boolean; onBook?: (train: TatkalTrain, seats: number) => void }) {
  const soldOut = seats === 0
  return <article className={`tatkal-train-option ${primary ? 'tatkal-train-hero' : ''} ${soldOut ? 'is-sold-out' : ''}`}>
    <div className="tatkal-train-heading"><div><strong>{train.number} · {train.name}</strong><span>{train.departure} → {train.arrival} · {train.classCode}</span></div>{seats === undefined ? <StatusTag tone={train.role === 'backup' ? 'neutral' : 'brand'}>{train.role === 'backup' ? 'Backup' : 'Likely best fit'}</StatusTag> : <StatusTag tone={soldOut ? 'neutral' : 'success'}>{soldOut ? 'SOLD OUT' : `${seats} seats`}</StatusTag>}</div>
    {seats === undefined ? <p className="tatkal-availability-note"><Icon name="info" /> Tatkal availability opens with booking</p> : <p className="tatkal-reasoning"><Icon name="lightbulb" /> {getRecommendationReasoning(train, preference)} <span>· Simulated availability</span></p>}
    <div className="tatkal-train-footer"><strong>₹{train.price.toLocaleString('en-IN')} <small>per passenger</small></strong>{seats !== undefined ? <button className={`ux4g-btn ${primary ? 'ux4g-btn-primary' : 'ux4g-btn-outline-primary'} ux4g-btn-md`} type="button" disabled={soldOut} onClick={() => onBook?.(train, seats)}>{primary ? 'BOOK NOW' : 'BOOK BACKUP'}</button> : null}</div>
  </article>
}

export function TatkalCommandCard({ from, to, journeyDate, selectedClass, passengerCount, preference, onBook }: {
  from: string
  to: string
  journeyDate: string
  selectedClass: string
  passengerCount: number
  preference: TatkalPreference
  onBook: (train: TatkalTrain, seats: number) => void
}) {
  const isEligible = selectedClass !== '1A'
  const openingTime = AC_TATKAL_CLASSES.includes(selectedClass) ? '10:00 AM' : '11:00 AM'
  const [now, setNow] = useState(() => Date.now())
  const openingAt = new Date(`${journeyDate}T${openingTime === '10:00 AM' ? '10:00:00' : '11:00:00'}`)
  openingAt.setDate(openingAt.getDate() - 1)
  const secondsUntilOpen = Math.max(0, Math.ceil((openingAt.getTime() - now) / 1000))
  const isOpen = isEligible && secondsUntilOpen === 0
  const [seatStep, setSeatStep] = useState(0)
  const preparedTrains = tatkalTrains.filter((train) => train.classCode === selectedClass)
  const fallbackTrains = preparedTrains.length >= 2 ? preparedTrains : tatkalTrains.filter((train) => train.classCode !== 'SL').slice(0, 3)
  const recommended = fallbackTrains.find((train) => train.role === 'recommended') ?? fallbackTrains[0]
  const backup = fallbackTrains.find((train) => train.role === 'backup') ?? fallbackTrains[1]

  useEffect(() => {
    if (isOpen) return
    const timer = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(timer)
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const timer = window.setInterval(() => setSeatStep((step) => Math.min(step + 1, 4)), 9000)
    return () => window.clearInterval(timer)
  }, [isOpen])

  if (!isEligible) return <section className="ux4g-card ux4g-card-outline ux4g-card-vertical tatkal-command-card"><div className="tatkal-command-header"><div><p className="eyebrow"><Icon name="bolt" /> Tatkal</p><h2>{from} → {to}</h2><p>{formatDate(journeyDate)}</p></div><StatusTag tone="neutral">Not eligible</StatusTag></div><div className="ux4g-alert ux4g-alert-info"><Icon name="info" /><div><strong>1A is not eligible for Tatkal.</strong><p>Select 2A, 3A, CC, EC, 3E, or a non-AC class to prepare a Tatkal booking.</p></div></div></section>

  return <section className={`ux4g-card ux4g-card-solid ux4g-card-vertical tatkal-command-card ${isOpen ? 'is-open' : ''}`} aria-live="polite">
    <div className="tatkal-command-header"><div><p className="eyebrow"><Icon name="bolt" /> Tatkal</p><h2>{from} → {to}</h2><p>{formatDate(journeyDate)} · {selectedClass}</p></div>{isOpen ? <StatusTag tone="brand" icon="bolt">TATKAL OPEN</StatusTag> : <StatusTag tone="warning" icon="schedule">Opens {openingTime}</StatusTag>}</div>
    {passengerCount > 4 ? <div className="ux4g-alert ux4g-alert-warning tatkal-passenger-warning"><Icon name="info" /><div><strong>More than 4 passengers</strong><p>Tatkal permits a maximum of 4 passengers per PNR. Your saved details can still be used across separate bookings.</p></div></div> : null}
    {isOpen ? <><p className="tatkal-ready-summary"><Icon name="check_circle" /> Ready · {passengerCount} {passengerCount === 1 ? 'passenger' : 'passengers'} · {selectedClass}</p><div className="tatkal-live-options"><TatkalTrainOption train={recommended} seats={recommended.seatSequence[seatStep]} preference={preference} primary onBook={onBook} /><TatkalTrainOption train={backup} seats={backup.seatSequence[seatStep]} preference={preference} onBook={onBook} /></div></> : <><div className="tatkal-opening-info"><div><span>Class</span><strong>{selectedClass}</strong></div><div><span>Opens one day before departure</span><strong>{openingTime}</strong></div><div><span>Countdown</span><strong>{formatCountdown(secondsUntilOpen)}</strong></div></div><div className="tatkal-readiness"><div><div><p className="meta-label">Readiness</p><h3>100% READY</h3></div><StatusTag tone="success" icon="check_circle">Saved</StatusTag></div><ul>{['Passenger details', 'Preferences', 'Primary option selected', 'Backup option selected', 'Payment method ready'].map((item) => <li key={item}><Icon name="check_circle" /> {item}</li>)}</ul></div><div className="tatkal-preview-list">{fallbackTrains.slice(0, 3).map((train) => <TatkalTrainOption key={train.id} train={train} preference={preference} />)}</div></>}
    <div className="tatkal-rules-strip">AC opens 10:00 AM <span>·</span> Non-AC opens 11:00 AM <span>·</span> Max 4 passengers per PNR <span>·</span> Opens 1 day before departure</div>
  </section>
}

export function TrainCard({ train, selectedClass, compare, compareDisabled = false, onCompare, onSelect, onExplain }: {
  train: Train
  selectedClass: string
  compare: boolean
  compareDisabled?: boolean
  onCompare: () => void
  onSelect: (trainClass: TrainClassAvailability) => void
  onExplain: (title: string, body: string) => void
}) {
  const [expanded, setExpanded] = useState(false)
  const [showBreakdown, setShowBreakdown] = useState(false)
  return (
    <article className={`ux4g-card ux4g-card-solid ux4g-card-vertical app-train-card ${train.score >= 90 ? 'is-recommended' : ''}`}>
      <div className="train-card-topline">
        <div className="train-title-wrap">
          {train.score >= 90 ? <StatusTag tone="brand" icon="auto_awesome">Best for you</StatusTag> : null}
          <div><h3>{train.name}</h3><p>{train.number} · {train.type}</p></div>
        </div>
        <label className="compare-check"><input type="checkbox" checked={compare} disabled={compareDisabled} onChange={onCompare} /> Compare{compareDisabled ? <small>Compare up to 3</small> : null}</label>
      </div>
      <div className="train-route">
        <div className="station-time"><strong>{train.departure}</strong><span>{train.sourceCode}</span><small>{train.source}</small></div>
        <div className="route-line"><span>{train.duration}</span><div><span className="route-dot" /><span className="route-track" /><span className="route-dot" /></div><small>{train.stops === 0 ? 'Direct' : `${train.stops} stops`}</small></div>
        <div className="station-time station-time-right"><strong>{train.arrival}</strong><span>{train.destinationCode}</span><small>{train.destination}</small></div>
      </div>
      <div className="train-meta-grid">
        <div><span className="meta-label">Why this train?</span><div className="reason-list">{(train.relativeReasons?.length ? train.relativeReasons : train.recommendation).map((reason) => <span key={reason}><Icon name="check_circle" />{reason}</span>)}</div>{train.breakdown ? <button className="score-breakdown-toggle" type="button" onClick={() => setShowBreakdown(!showBreakdown)}><Icon name={showBreakdown ? 'expand_less' : 'expand_more'} /> Score breakdown</button> : null}{showBreakdown && train.breakdown ? <div className="score-breakdown">{Object.entries(train.breakdown).map(([label, value]) => <div key={label}><span>{label}</span><i><b style={{ width: `${value}%` }} /></i><strong>{value}</strong></div>)}</div> : null}</div>
        <div><span className="meta-label">Amenities</span><div className="amenity-list">{train.amenities.map((amenity) => <span key={amenity}>{amenity}</span>)}</div></div>
      </div>
      <div className="availability-row">
        {train.classes.map((trainClass) => {
          const isSelected = selectedClass === `${train.id}-${trainClass.code}`
          const tone = getStatusTone(trainClass.status)
          const waitlistStatus = trainClass.waitlistType ?? (trainClass.status === 'rac' ? 'RAC' : 'GNWL')
          return (
            <div className={`availability-option ${isSelected ? 'selected' : ''}`} key={trainClass.code} role="button" tabIndex={0} aria-label={`${trainClass.code} ${trainClass.status === 'available' ? `${trainClass.seats} confirmed seats` : `${trainClass.status === 'rac' ? 'RAC' : 'WL'} ${trainClass.position}`} ₹${trainClass.fare}`} onClick={() => onSelect(trainClass)} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); onSelect(trainClass) } }}>
              <span className="availability-class">{trainClass.code} <small>{trainClass.label}</small></span>
              <StatusTag tone={tone}>{trainClass.status === 'available' ? `${trainClass.seats} confirmed seats` : `${trainClass.status === 'rac' ? 'RAC' : 'WL'} ${trainClass.position} · ${trainClass.confirmationProbability ?? getStatusLabel(trainClass.status)}`}</StatusTag>
              <strong>₹{trainClass.fare.toLocaleString('en-IN')}</strong>
              {trainClass.status !== 'available' ? <span className="availability-explanation">{trainClass.status === 'rac' ? 'You can board · berth may be shared' : 'Seat is not confirmed yet'} <WaitlistExplainer status={waitlistStatus} position={trainClass.position} outlook={trainClass.confirmationProbability} /></span> : null}
            </div>
          )
        })}
      </div>
      {expanded ? <div className="train-advanced"><strong>Good to know</strong><p>Mock availability is checked again at payment. A seat request is not a confirmed allocation until the booking state changes to confirmed.</p><div className="advanced-facts"><span><Icon name="luggage" /> No transfer</span><span><Icon name="schedule" /> On-time history not connected</span><span><Icon name="restaurant" /> Pantry available</span></div></div> : null}
      <div className="train-card-actions"><button className="ux4g-btn ux4g-btn-text-primary ux4g-btn-md" type="button" onClick={() => setExpanded(!expanded)}><Icon name={expanded ? 'expand_less' : 'expand_more'} /> {expanded ? 'Hide details' : 'More details'}</button><button className="ux4g-btn ux4g-btn-outline-primary ux4g-btn-md" type="button" onClick={() => onExplain('How this recommendation works', `${train.name} scores ${train.score}/100 because of its ${train.duration} journey, ${train.classes[0].status === 'available' ? 'good availability' : 'current booking status'}, and departure time. You can change the priority above at any time.`)}>Why this train?</button><button className="ux4g-btn ux4g-btn-primary ux4g-btn-md" type="button" onClick={() => onSelect(train.classes[0])}>Select train <Icon name="arrow_forward" /></button></div>
    </article>
  )
}

export function CompareDrawer({ trains, onClose, onSelect }: { trains: ScoredTrain[]; onClose: () => void; onSelect: (train: ScoredTrain) => void }) {
  const rows = buildComparisonRows(trains)
  return <div className="compare-drawer-backdrop" role="presentation"><section className="compare-drawer ux4g-card ux4g-card-solid" role="dialog" aria-modal="true" aria-label="Compare selected trains"><div className="drawer-header"><div><p className="eyebrow">Compare trains</p><h2>See the trade-offs</h2></div><button className="ux4g-icon-btn ux4g-icon-btn-outline-primary ux4g-icon-btn-md" type="button" onClick={onClose} aria-label="Close comparison"><Icon name="close" /></button></div><div className="comparison-table" style={{ '--comparison-columns': trains.length } as CSSProperties}><div className="comparison-row comparison-heading"><span>Attribute</span>{trains.map((train) => <strong key={train.id}>{train.name}<small>{train.number}</small></strong>)}</div>{rows.map((row) => <div className="comparison-row" key={row.label}><span>{row.label}</span>{row.values.map((value, index) => <strong className={row.bestIndexes.includes(index) ? 'is-best' : ''} key={`${row.label}-${index}`}>{value}</strong>)}</div>)}<div className="comparison-row comparison-actions"><span /><div className="comparison-select-buttons">{trains.map((train) => <button className="ux4g-btn ux4g-btn-primary ux4g-btn-sm" type="button" key={train.id} onClick={() => onSelect(train)}>Select this train</button>)}</div></div></div></section></div>
}

export function BookingStepper({ active }: { active: BookingStage }) {
  const steps: Array<{ id: BookingStage; label: string }> = [
    { id: 'passengers', label: 'Passengers' }, { id: 'seats', label: 'Seats' }, { id: 'review', label: 'Review' }, { id: 'payment', label: 'Payment' },
  ]
  const activeIndex = steps.findIndex((step) => step.id === active)
  return <div className="ux4g-stepper ux4g-stepper-horizontal ux4g-stepper-center booking-stepper" aria-label="Booking progress">
    {steps.map((step, index) => <div className={`ux4g-stepper-step ${index < activeIndex ? 'completed' : ''} ${step.id === active ? 'active' : ''}`} key={step.id}><span>{index < activeIndex ? <Icon name="check" /> : index + 1}</span><small>{step.label}</small></div>)}
  </div>
}

export function CoachMap({ selectedCoach = 'B2', onSelect }: { selectedCoach?: string; onSelect?: (coach: string) => void }) {
  return <div className="coach-map" aria-label="Coach selector">
    {['B1', 'B2', 'B3', 'B4'].map((coach) => <button type="button" className={`coach-card ${selectedCoach === coach ? 'selected' : ''}`} key={coach} onClick={() => onSelect?.(coach)}><span>{coach}</span><small>{coach === 'B2' ? 'Your coach' : 'AC 3 Tier'}</small></button>)}
  </div>
}

export function SeatMap({ selectedSeats, onToggle }: { selectedSeats: string[]; onToggle: (seat: string) => void }) {
  const seats = ['21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32']
  return <div className="seat-map" aria-label="Seat map for coach B2">
    <div className="seat-map-header"><span>Window</span><span>Coach B2 · AC 3 Tier</span><span>Aisle</span></div>
    <div className="seat-grid">{seats.map((seat, index) => {
      const unavailable = ['25', '29'].includes(seat)
      const selected = selectedSeats.includes(seat)
      return <button key={seat} type="button" className={`seat ${unavailable ? 'unavailable' : ''} ${selected ? 'selected' : ''}`} disabled={unavailable} aria-pressed={selected} onClick={() => onToggle(seat)}><strong>{seat}</strong><span>{index % 3 === 0 ? 'Lower' : index % 3 === 1 ? 'Middle' : 'Upper'}</span></button>
    })}</div>
    <div className="seat-legend"><span><i className="seat-key available" /> Available</span><span><i className="seat-key chosen" /> Selected</span><span><i className="seat-key locked" /> Unavailable</span></div>
  </div>
}

export function PassengerFields({ passengers, onChange }: { passengers: Passenger[]; onChange: (passengers: Passenger[]) => void }) {
  const update = (index: number, key: keyof Passenger, value: string) => onChange(passengers.map((passenger, passengerIndex) => passengerIndex === index ? { ...passenger, [key]: value } : passenger))
  return <div className="passenger-fields">{passengers.map((passenger, index) => <div className="passenger-row" key={index}><div className="passenger-number">{index + 1}</div><label className="ux4g-form-group"><span>Passenger name</span><div className={`ux4g-input-container ux4g-input-md ux4g-input-${passenger.name ? 'default' : 'error'}`}><input aria-label={`Passenger ${index + 1} name`} value={passenger.name} onChange={(event) => update(index, 'name', event.target.value)} placeholder="Full name" /></div></label><label className="ux4g-form-group"><span>Age</span><div className="ux4g-input-container ux4g-input-md ux4g-input-default"><input aria-label={`Passenger ${index + 1} age`} value={passenger.age} onChange={(event) => update(index, 'age', event.target.value)} inputMode="numeric" placeholder="Age" /></div></label><label className="ux4g-form-group"><span>Berth preference</span><div className="ux4g-input-container ux4g-input-md ux4g-input-default"><select aria-label={`Passenger ${index + 1} berth preference`} value={passenger.berth} onChange={(event) => update(index, 'berth', event.target.value)}><option>Lower</option><option>Middle</option><option>Upper</option><option>No preference</option></select></div></label></div>)}</div>
}

export function ExplanationModal({ title, body, onClose }: { title: string; body: string; onClose: () => void }) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])
  return <div className="ux4g-modal-backdrop ux4g-modal-backdrop-50 app-modal-backdrop" role="presentation" onMouseDown={onClose}><div className="ux4g-modal-box ux4g-modal-m app-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onMouseDown={(event) => event.stopPropagation()}><div className="modal-header"><div className="modal-icon"><Icon name="lightbulb" /></div><button className="ux4g-icon-btn ux4g-icon-btn-text-primary ux4g-icon-btn-md" type="button" aria-label="Close explanation" onClick={onClose}><Icon name="close" /></button></div><h2 id="modal-title">{title}</h2><p>{body}</p><button className="ux4g-btn ux4g-btn-primary ux4g-btn-md" type="button" onClick={onClose}>Got it</button></div></div>
}

export function NotificationDrawer({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])
  return <div className="drawer-layer" role="presentation" onMouseDown={onClose}><aside className="ux4g-drawer ux4g-drawer-right app-drawer" role="dialog" aria-modal="true" aria-labelledby="notifications-title" onMouseDown={(event) => event.stopPropagation()}><div className="drawer-header"><div><p className="eyebrow">Your updates</p><h2 id="notifications-title">Notifications</h2></div><button className="ux4g-icon-btn ux4g-icon-btn-text-primary ux4g-icon-btn-md" type="button" aria-label="Close notifications" onClick={onClose}><Icon name="close" /></button></div><div className="notification-list">{mockNotifications.map((notification) => <div className="notification-item" key={notification.id}><StatusTag tone={notification.tone} icon={notification.icon}>New</StatusTag><h3>{notification.title}</h3><p>{notification.body}</p><span>Mock journey update</span></div>)}</div><div className="drawer-footnote"><Icon name="info" /><p>Live notifications will appear here when a railway service is connected.</p></div></aside></div>
}

export function FAQPanel() {
  const [open, setOpen] = useState(0)
  return <div className="faq-list">{faqItems.map((item, index) => <div className={`ux4g-accordion ux4g-accordion-arrow-right ux4g-accordion-bordered faq-item ${open === index ? 'open' : ''}`} key={item.question}><button type="button" onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}><span>{item.question}</span><Icon name={open === index ? 'expand_less' : 'expand_more'} /></button>{open === index ? <p>{item.answer}</p> : null}</div>)}</div>
}

export function AssistantPanel() {
  const [answer, setAnswer] = useState('Ask about a booking, RAC, refunds, coaches, or your journey status.')
  const prompts = ['What does RAC mean?', 'Can I cancel this ticket?', 'Where is my coach?']
  const answers: Record<string, string> = {
    'What does RAC mean?': 'RAC means you can board the train. Your seat is valid, but the berth may be shared. Your status can improve before departure.',
    'Can I cancel this ticket?': 'This mock booking is eligible for cancellation. The estimated refund is ₹1,045 after a ₹180 cancellation charge and ₹20 in non-refundable charges.',
    'Where is my coach?': 'Your coach is B2, near the middle of the train. Your selected seats are B2-21 and B2-22.',
  }
  return <div className="assistant-panel ux4g-card ux4g-card-solid ux4g-card-vertical"><div className="assistant-heading"><div className="assistant-avatar"><Icon name="auto_awesome" /></div><div><p className="eyebrow">RailConnect assistant</p><h3>Understand your journey</h3></div><StatusTag tone="info">Context-aware mock</StatusTag></div><div className="assistant-message"><p>{answer}</p></div><div className="assistant-prompts">{prompts.map((prompt) => <button key={prompt} className="ux4g-filter-chip-md" type="button" onClick={() => setAnswer(answers[prompt])}>{prompt}</button>)}</div><div className="ux4g-feedback"><p>Was this helpful?</p><div className="ux4g-feedback-chip-wrapper"><button className="ux4g-filter-chip-md" type="button">Yes</button><button className="ux4g-filter-chip-md" type="button">No</button></div></div></div>
}

export function formatDate(date: string, includeWeekday = false) {
  return new Intl.DateTimeFormat('en-IN', { ...(includeWeekday ? { weekday: 'long' as const } : {}), day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(`${date}T12:00:00`))
}

export function defaultPassenger(): Passenger {
  return { name: '', age: '', gender: 'Prefer not to say', berth: 'Lower' }
}

export function useEscape(onEscape: () => void) {
  // Kept as a small reusable hook so dialogs and drawers can share the same keyboard behaviour.
  const [mounted] = useState(true)
  if (mounted) {
    // Keyboard close is handled by the owning view when the overlay is mounted.
  }
  return onEscape
}

export function NotificationIconButton({ onClick, count }: { onClick: () => void; count: number }) {
  return <button className="ux4g-icon-btn ux4g-icon-btn-text-primary ux4g-icon-btn-md notification-button" type="button" aria-label={`${count} notifications`} onClick={onClick}><Icon name="notifications" /><span>{count}</span></button>
}

export function handleInputChange<T extends HTMLInputElement | HTMLSelectElement>(setter: (value: string) => void) {
  return (event: ChangeEvent<T>) => setter(event.target.value)
}
