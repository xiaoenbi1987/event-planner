import type { CategoryId, EventType } from '../types'
import { usePlan } from '../state/planStore'
import { CATEGORIES, lowestRate, vendorById } from '../data/vendors'
import { EVENT_TYPES, money } from '../format'

type Props = {
  onOpenCategory: (category: CategoryId) => void
}

export function PlanScreen({ onOpenCategory }: Props) {
  const { details, setDetails, selectionFor } = usePlan()

  return (
    <div className="stack">
      <header className="pagehead">
        <h1 className="pagehead__title">Plan your event</h1>
        <p className="pagehead__sub">Book each part by the hour and keep the total in view.</p>
      </header>

      <section className="section" aria-labelledby="event-type-label">
        <h2 className="section__title" id="event-type-label">
          Event type
        </h2>
        <div className="chips" role="group" aria-labelledby="event-type-label">
          {EVENT_TYPES.map((type) => (
            <button
              key={type.id}
              type="button"
              className="chip"
              aria-pressed={details.type === type.id}
              onClick={() => setDetails({ type: type.id as EventType })}
            >
              {type.label}
            </button>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">Details</h2>
        <div className="fields">
          <div className="field">
            <label htmlFor="field-date">Date</label>
            <input
              id="field-date"
              type="date"
              value={details.date}
              onChange={(e) => setDetails({ date: e.target.value })}
            />
          </div>
          <div className="field">
            <label htmlFor="field-city">City</label>
            <input
              id="field-city"
              type="text"
              autoComplete="address-level2"
              placeholder="Lisbon"
              value={details.city}
              onChange={(e) => setDetails({ city: e.target.value })}
            />
          </div>
          <div className="field-row">
            <div className="field">
              <label htmlFor="field-guests">Guests</label>
              <input
                id="field-guests"
                type="number"
                min={1}
                inputMode="numeric"
                value={details.guests}
                onChange={(e) => setDetails({ guests: Math.max(1, Number(e.target.value) || 0) })}
              />
            </div>
            <div className="field">
              <label htmlFor="field-budget">Budget ($)</label>
              <input
                id="field-budget"
                type="number"
                min={0}
                step={50}
                inputMode="numeric"
                value={details.budget}
                onChange={(e) => setDetails({ budget: Math.max(0, Number(e.target.value) || 0) })}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">What your event needs</h2>
        <ul className="list">
          {CATEGORIES.map((category) => {
            const selection = selectionFor(category.id)
            const vendor = selection ? vendorById(selection.vendorId) : undefined
            return (
              <li key={category.id}>
                <button
                  type="button"
                  className="row"
                  onClick={() => onOpenCategory(category.id)}
                >
                  <span className="row__main">
                    <span className="row__title">{category.label}</span>
                    <span className="row__meta">
                      {vendor && selection
                        ? `${vendor.name} · ${selection.hours}h · ${money(vendor.rate * selection.hours)}`
                        : category.hint}
                    </span>
                  </span>
                  {vendor ? (
                    <span className="tag tag--added">Added</span>
                  ) : (
                    <span className="row__price">from {money(lowestRate(category.id))}/hr</span>
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}
