import { usePlan } from '../state/planStore'
import { eventTypeLabel, formatDate, money } from '../format'

/** The global event frame, repeated on Browse and My event. */
export function FilterLine() {
  const { details } = usePlan()
  return (
    <p className="filterline">
      {eventTypeLabel(details.type)} · {formatDate(details.date)} · {details.city || 'No city'} ·{' '}
      {details.guests} guests · {money(details.budget)} budget
    </p>
  )
}
