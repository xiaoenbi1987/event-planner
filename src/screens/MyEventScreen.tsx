import type { CategoryId } from '../types'
import { usePlan } from '../state/planStore'
import { CATEGORIES, vendorById } from '../data/vendors'
import { money } from '../format'
import { FilterLine } from '../components/FilterLine'

type Props = {
  onBack: () => void
  onOpenCategory: (category: CategoryId) => void
  onSend: () => void
}

export function MyEventScreen({ onBack, onOpenCategory, onSend }: Props) {
  const { details, selections, removeSelection, subtotalOf, total, remaining, overBudget } = usePlan()

  const chosen = CATEGORIES.filter((c) => selections.some((s) => s.category === c.id))
  const missing = CATEGORIES.filter((c) => !selections.some((s) => s.category === c.id))
  const percent = details.budget > 0 ? Math.min(100, (total / details.budget) * 100) : 0

  return (
    <div className="stack">
      <header className="pagehead">
        <h1 className="pagehead__title">My event</h1>
        <FilterLine />
      </header>

      {chosen.length === 0 ? (
        <div className="empty">
          <p>Nothing booked yet.</p>
          <button type="button" className="btn btn--ghost" onClick={onBack}>
            Pick a category
          </button>
        </div>
      ) : (
        <ul className="list">
          {chosen.map((category) => {
            const selection = selections.find((s) => s.category === category.id)!
            const vendor = vendorById(selection.vendorId)
            if (!vendor) return null
            return (
              <li key={category.id} className="booking">
                <div className="booking__main">
                  <p className="booking__category">{category.label}</p>
                  <p className="booking__name">{vendor.name}</p>
                  <p className="booking__calc">
                    {selection.hours} {selection.hours === 1 ? 'hour' : 'hours'} ×{' '}
                    {money(vendor.rate)}/hr · from {selection.startTime}
                  </p>
                </div>
                <div className="booking__side">
                  <p className="booking__subtotal">{money(subtotalOf(selection))}</p>
                  <button
                    type="button"
                    className="linkbtn"
                    onClick={() => removeSelection(category.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      )}

      {missing.length > 0 && (
        <section className="section">
          <h2 className="section__title">Still missing</h2>
          <div className="chips">
            {missing.map((category) => (
              <button
                key={category.id}
                type="button"
                className="chip"
                onClick={() => onOpenCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </section>
      )}

      <section className="section budget">
        <div className="budget__row">
          <span className="budget__label">Total</span>
          <span className="budget__total">{money(total)}</span>
        </div>
        <div
          className="progress"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={details.budget}
          aria-valuenow={total}
          aria-label="Budget used"
        >
          <div
            className={overBudget ? 'progress__fill progress__fill--over' : 'progress__fill'}
            style={{ width: `${percent}%` }}
          />
        </div>
        <p className={overBudget ? 'budget__note budget__note--over' : 'budget__note'}>
          {overBudget
            ? `${money(Math.abs(remaining))} over your ${money(details.budget)} budget`
            : `${money(remaining)} left of your ${money(details.budget)} budget`}
        </p>
      </section>

      <button
        type="button"
        className="btn btn--primary btn--block"
        onClick={onSend}
        disabled={selections.length === 0}
      >
        Send booking requests
      </button>
    </div>
  )
}
