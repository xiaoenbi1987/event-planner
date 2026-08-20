import type { EventType } from './types'

export function money(amount: number): string {
  return '$' + Math.round(amount).toLocaleString('en-US')
}

export const EVENT_TYPES: { id: EventType; label: string }[] = [
  { id: 'wedding', label: 'Wedding' },
  { id: 'birthday', label: 'Birthday' },
  { id: 'anniversary', label: 'Anniversary' },
  { id: 'graduation', label: 'Graduation' },
]

export function eventTypeLabel(type: EventType): string {
  return EVENT_TYPES.find((t) => t.id === type)?.label ?? 'Event'
}

/** "2026-09-12" -> "12 Sep 2026". Falls back to the raw value if unset. */
export function formatDate(value: string): string {
  if (!value) return 'No date'
  const [year, month, day] = value.split('-').map(Number)
  if (!year || !month || !day) return value
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return `${day} ${months[month - 1]} ${year}`
}
