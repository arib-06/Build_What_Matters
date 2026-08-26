export type SeatStatus = 'GNWL' | 'RLWL' | 'PQWL' | 'TQWL' | 'RAC' | 'confirmed'
export type ConfirmationOutlook = 'Likely to confirm' | 'Possible' | 'Unlikely to confirm'

export interface WaitlistInsight {
  summary: string
  detail: string
  nextStep: string
}

const inferredOutlook = (status: SeatStatus, position?: number): ConfirmationOutlook => {
  if (status === 'confirmed' || status === 'RAC') return 'Likely to confirm'
  if (!position || position <= 5) return 'Likely to confirm'
  if (position <= 15) return 'Possible'
  return 'Unlikely to confirm'
}

/**
 * Keep railway terminology and the action it implies in one place. A live
 * prediction service can replace this deterministic copy without changing the
 * train-card or booking UI.
 */
export function getWaitlistInsight(status: SeatStatus, position?: number, outlook?: ConfirmationOutlook): WaitlistInsight {
  const resolvedOutlook = outlook ?? inferredOutlook(status, position)
  const positionText = position ? ` ${position}` : ''
  if (status === 'confirmed') return { summary: 'Confirmed seat', detail: 'A seat is currently available for this class.', nextStep: 'Book when ready.' }
  if (status === 'RAC') return { summary: `RAC${positionText} · ${resolvedOutlook}`, detail: 'You can board with a valid seat; a full berth may be assigned later.', nextStep: 'Book if boarding matters more than a guaranteed full berth.' }
  if (status === 'RLWL') return { summary: `RLWL${positionText} · ${resolvedOutlook}`, detail: 'Remote-location waitlist clears from a smaller route pool than GNWL.', nextStep: 'Prefer a confirmed or RAC alternative when timing is important.' }
  if (status === 'PQWL') return { summary: `PQWL${positionText} · ${resolvedOutlook}`, detail: 'Pooled-quota waitlist shares a smaller cancellation pool across stations.', nextStep: 'Keep an alternative ready.' }
  if (status === 'TQWL') return { summary: `TQWL${positionText} · ${resolvedOutlook}`, detail: 'Tatkal waitlist is cancelled if it remains waitlisted at chart preparation.', nextStep: 'Use a confirmed alternative if the journey is urgent.' }
  return { summary: `GNWL${positionText} · ${resolvedOutlook}`, detail: 'General waitlist usually has the broadest cancellation pool on the train.', nextStep: 'Wait only if you can accept the confirmation risk.' }
}

/** Plain-language status copy kept separate from the booking UI. */
export function explainStatus(status: SeatStatus, position?: number, outlook?: ConfirmationOutlook): { summary: string; detail: string } | null {
  if (status === 'confirmed') return null
  const insight = getWaitlistInsight(status, position, outlook)
  return { summary: insight.summary, detail: insight.detail }
}
