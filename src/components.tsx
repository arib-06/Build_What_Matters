import { useEffect, useState } from 'react'
import type { ChangeEvent, FormEvent, ReactNode } from 'react'
import { faqItems, getStatusLabel, getStatusTone, mockNotifications } from './data'
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

export function SearchForm({ value, onChange, onSubmit, compact = false }: {
  value: SearchState
  onChange: (next: SearchState) => void
  onSubmit: () => void
  compact?: boolean
}) {
  const update = (key: keyof SearchState, next: string | number) => onChange({ ...value, [key]: next })
  return (
    <form className={`search-form ${compact ? 'search-form-compact' : ''}`} onSubmit={(event: FormEvent) => { event.preventDefault(); onSubmit() }}>
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
            <input aria-label="From station" value={value.source} onChange={(event) => update('source', event.target.value)} placeholder="Station or city" />
          </div>
        </label>
        <button className="ux4g-icon-btn ux4g-icon-btn-outline-primary ux4g-icon-btn-md swap-button" type="button" aria-label="Swap departure and arrival stations" onClick={() => onChange({ ...value, source: value.destination, destination: value.source })}>
          <Icon name="swap_horiz" />
        </button>
        <label className="ux4g-form-group station-field">
          <span>To</span>
          <div className="ux4g-input-container ux4g-input-md ux4g-input-default">
            <Icon name="location_on" />
            <input aria-label="To station" value={value.destination} onChange={(event) => update('destination', event.target.value)} placeholder="Station or city" />
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
              <input type="radio" name="quota" checked={value.quota === quota} onChange={() => update('quota', quota)} />
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
    </form>
  )
}

export function TatkalReadiness() {
  return (
    <div className="ux4g-card ux4g-card-outline ux4g-card-horizontal tatkal-card">
      <div className="tatkal-icon"><Icon name="bolt" /></div>
      <div className="tatkal-copy"><p className="eyebrow">Tatkal readiness</p><h3>Be ready when the window opens</h3><p>Passenger details and class options are prepared in advance. Availability remains mock data until a railway service is connected.</p></div>
      <div className="tatkal-time"><span>Opens today</span><strong>10:00 AM</strong><StatusTag tone="warning">00:42:18 left</StatusTag></div>
    </div>
  )
}

export function TrainCard({ train, selectedClass, compare, onCompare, onSelect, onExplain }: {
  train: Train
  selectedClass: string
  compare: boolean
  onCompare: () => void
  onSelect: (trainClass: TrainClassAvailability) => void
  onExplain: (title: string, body: string) => void
}) {
  const [expanded, setExpanded] = useState(false)
  return (
    <article className={`ux4g-card ux4g-card-solid ux4g-card-vertical app-train-card ${train.score >= 90 ? 'is-recommended' : ''}`}>
      <div className="train-card-topline">
        <div className="train-title-wrap">
          {train.score >= 90 ? <StatusTag tone="brand" icon="auto_awesome">Best for you</StatusTag> : null}
          <div><h3>{train.name}</h3><p>{train.number} · {train.type}</p></div>
        </div>
        <label className="compare-check"><input type="checkbox" checked={compare} onChange={onCompare} /> Compare</label>
      </div>
      <div className="train-route">
        <div className="station-time"><strong>{train.departure}</strong><span>{train.sourceCode}</span><small>{train.source}</small></div>
        <div className="route-line"><span>{train.duration}</span><div><span className="route-dot" /><span className="route-track" /><span className="route-dot" /></div><small>{train.stops === 0 ? 'Direct' : `${train.stops} stops`}</small></div>
        <div className="station-time station-time-right"><strong>{train.arrival}</strong><span>{train.destinationCode}</span><small>{train.destination}</small></div>
      </div>
      <div className="train-meta-grid">
        <div><span className="meta-label">Why it stands out</span><div className="reason-list">{train.recommendation.map((reason) => <span key={reason}><Icon name="check_circle" />{reason}</span>)}</div></div>
        <div><span className="meta-label">Amenities</span><div className="amenity-list">{train.amenities.map((amenity) => <span key={amenity}>{amenity}</span>)}</div></div>
      </div>
      <div className="availability-row">
        {train.classes.map((trainClass) => {
          const isSelected = selectedClass === `${train.id}-${trainClass.code}`
          const tone = getStatusTone(trainClass.status)
          return (
            <button type="button" className={`availability-option ${isSelected ? 'selected' : ''}`} key={trainClass.code} onClick={() => onSelect(trainClass)}>
              <span className="availability-class">{trainClass.code} <small>{trainClass.label}</small></span>
              <StatusTag tone={tone}>{trainClass.status === 'available' ? `${trainClass.seats} seats` : `${getStatusLabel(trainClass.status)} ${trainClass.position}`}</StatusTag>
              <strong>₹{trainClass.fare.toLocaleString('en-IN')}</strong>
              {trainClass.status !== 'available' ? <span className="availability-explanation">{trainClass.status === 'rac' ? 'You can board · berth may be shared' : 'Seat is not confirmed yet'}</span> : null}
            </button>
          )
        })}
      </div>
      {expanded ? <div className="train-advanced"><strong>Good to know</strong><p>Mock availability is checked again at payment. A seat request is not a confirmed allocation until the booking state changes to confirmed.</p><div className="advanced-facts"><span><Icon name="luggage" /> No transfer</span><span><Icon name="schedule" /> On-time history not connected</span><span><Icon name="restaurant" /> Pantry available</span></div></div> : null}
      <div className="train-card-actions"><button className="ux4g-btn ux4g-btn-text-primary ux4g-btn-md" type="button" onClick={() => setExpanded(!expanded)}><Icon name={expanded ? 'expand_less' : 'expand_more'} /> {expanded ? 'Hide details' : 'More details'}</button><button className="ux4g-btn ux4g-btn-outline-primary ux4g-btn-md" type="button" onClick={() => onExplain('How this recommendation works', `${train.name} scores ${train.score}/100 because of its ${train.duration} journey, ${train.classes[0].status === 'available' ? 'good availability' : 'current booking status'}, and departure time. You can change the priority above at any time.`)}>Why this train?</button><button className="ux4g-btn ux4g-btn-primary ux4g-btn-md" type="button" onClick={() => onSelect(train.classes[0])}>Select train <Icon name="arrow_forward" /></button></div>
    </article>
  )
}

export function BookingStepper({ active }: { active: BookingStage }) {
  const steps: Array<{ id: BookingStage; label: string }> = [
    { id: 'seats', label: 'Seats' }, { id: 'passengers', label: 'Passengers' }, { id: 'review', label: 'Review' }, { id: 'payment', label: 'Payment' },
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

export function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(`${date}T12:00:00`))
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
