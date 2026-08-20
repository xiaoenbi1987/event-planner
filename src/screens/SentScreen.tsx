import type { EventType } from '../types'
import { eventTypeLabel, formatDate, money } from '../format'

export type SentSummary = {
  vendorCount: number
  total: number
  eventType: EventType
  date: string
}

type Props = {
  summary: SentSummary
  onBackToPlan: () => void
}

export function SentScreen({ summary, onBackToPlan }: Props) {
  return (
    <div className="stack stack--centered">
      <div className="sent">
        <p className="sent__mark" aria-hidden="true">
          ✓
        </p>
        <h1 className="pagehead__title">Requests sent</h1>
        <p className="pagehead__sub">
          {summary.vendorCount} {summary.vendorCount === 1 ? 'vendor has' : 'vendors have'} been
          asked to confirm. They usually reply within two days.
        </p>

        <dl className="summary">
          <div className="summary__row">
            <dt>Event</dt>
            <dd>{eventTypeLabel(summary.eventType)}</dd>
          </div>
          <div className="summary__row">
            <dt>Date</dt>
            <dd>{formatDate(summary.date)}</dd>
          </div>
          <div className="summary__row">
            <dt>Vendors</dt>
            <dd>{summary.vendorCount}</dd>
          </div>
          <div className="summary__row">
            <dt>Estimated total</dt>
            <dd>{money(summary.total)}</dd>
          </div>
        </dl>

        <button type="button" className="btn btn--primary btn--block" onClick={onBackToPlan}>
          Back to plan
        </button>
      </div>
    </div>
  )
}
