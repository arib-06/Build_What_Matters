export type SeatStatus = 'GNWL' | 'RLWL' | 'PQWL' | 'RAC' | 'confirmed'

/** Plain-language status copy kept separate from the booking UI. */
export function explainStatus(status: SeatStatus, position?: number): string {
  if (status === 'GNWL') return `General waitlist${position ? `, position ${position}` : ''} — this is the most common waitlist type.`
  if (status === 'RLWL') return `Remote location waitlist${position ? `, position ${position}` : ''} — it clears from cancellations on this route segment.`
  if (status === 'PQWL') return `Pooled quota waitlist${position ? `, position ${position}` : ''} — it has a smaller cancellation pool than general waitlist.`
  if (status === 'RAC') return `RAC${position ? `, position ${position}` : ''} — you are guaranteed a seat to sit, with a chance of a full berth later.`
  return ''
}
