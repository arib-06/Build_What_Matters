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
 * Return an indicative confirmation chance for a waitlisted/RAC request.
 *
 * Indian Railways/CRIS describes its production prediction as a dynamic,
 * machine-learning model trained on historical waitlisted PNRs. The exact
 * weights are not published, so this UI intentionally does not pretend to
 * reproduce the railway's private formula. Instead, this deterministic
 * proxy mirrors the public signals we can explain to a passenger: quota type
 * (GNWL/RLWL/PQWL/TQWL), current position and RAC versus waitlist. It can be
 * replaced by a live prediction response later without changing the card UI.
 */
export function getConfirmationChance(status: SeatStatus, position?: number, outlook?: ConfirmationOutlook): number | null {
  if (status === 'confirmed') return 100

  const currentPosition = Math.max(1, position ?? 1)
  const model = {
    // GNWL generally clears from the broadest cancellation pool.
    GNWL: { startingChance: 94, penaltyPerPosition: 3 },
    // RLWL/PQWL draw from smaller pools, so their outlook falls faster.
    RLWL: { startingChance: 82, penaltyPerPosition: 4 },
    PQWL: { startingChance: 76, penaltyPerPosition: 4 },
    // Tatkal waitlist is only cleared if seats release before charting.
    TQWL: { startingChance: 58, penaltyPerPosition: 5 },
    // RAC permits boarding; the estimate is for a full berth becoming free.
    RAC: { startingChance: 94, penaltyPerPosition: 2 },
  } satisfies Record<Exclude<SeatStatus, 'confirmed'>, { startingChance: number; penaltyPerPosition: number }>

  const { startingChance, penaltyPerPosition } = model[status]
  const rawChance = startingChance - (currentPosition - 1) * penaltyPerPosition
  if (status === 'RAC') return Math.max(70, Math.min(96, rawChance))

  // Keep the number and the plain-language band shown beside it aligned.
  const resolvedOutlook = outlook ?? inferredOutlook(status, currentPosition)
  const range = resolvedOutlook === 'Likely to confirm'
    ? { min: 70, max: 95 }
    : resolvedOutlook === 'Possible'
      ? { min: 35, max: 69 }
      : { min: 5, max: 34 }
  return Math.max(range.min, Math.min(range.max, rawChance))
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
