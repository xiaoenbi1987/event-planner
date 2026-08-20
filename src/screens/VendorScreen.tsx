import { useState } from 'react'
import { usePlan } from '../state/planStore'
import { CATEGORIES, vendorById } from '../data/vendors'
import { money } from '../format'
import { Placeholder } from '../components/Placeholder'

type Props = {
  vendorId: string
  onBack: () => void
  onAdded: () => void
}

export function VendorScreen({ vendorId, onBack, onAdded }: Props) {
  const { details, total, selectionFor, addSelection, subtotalOf } = usePlan()
  const vendor = vendorById(vendorId)
  const existing = vendor ? selectionFor(vendor.category) : undefined
  const isCurrent = existing?.vendorId === vendorId

  const [hours, setHours] = useState(isCurrent && existing ? existing.hours : 3)
  const [startTime, setStartTime] = useState(
    isCurrent && existing ? existing.startTime : (vendor?.slots[0] ?? ''),
  )

  if (!vendor) {
    return (
      <div className="stack">
        <button type="button" className="backlink" onClick={onBack}>
          Back
        </button>
        <p className="empty">This vendor is no longer listed.</p>
      </div>
    )
  }

  const categoryLabel = CATEGORIES.find((c) => c.id === vendor.category)?.label ?? ''
  const estimate = vendor.rate * hours
  // What the total becomes once this booking replaces anything already in the category.
  const replaced = existing ? subtotalOf(existing) : 0
  const remainingAfter = details.budget - (total - replaced + estimate)
  const over = remainingAfter < 0

  return (
    <div className="stack stack--sticky">
      <header className="pagehead">
        <button type="button" className="backlink" onClick={onBack}>
          Back to {categoryLabel.toLowerCase()}
        </button>
      </header>

      <Placeholder caption={vendor.placeholder} />

      <div className="vendorhead">
        <h1 className="pagehead__title">{vendor.name}</h1>
        <p className="pagehead__sub">{vendor.meta}</p>
        <p className="vendorhead__rate">
          <strong>{money(vendor.rate)}/hr</strong>
        </p>
      </div>

      <p className="prose">{vendor.bio}</p>

      <section className="section">
        <h2 className="section__title" id="hours-label">
          Hours
        </h2>
        <div className="stepper" role="group" aria-labelledby="hours-label">
          <button
            type="button"
            className="stepper__btn"
            onClick={() => setHours((h) => Math.max(1, h - 1))}
            disabled={hours <= 1}
            aria-label="Remove one hour"
          >
            &minus;
          </button>
          <output className="stepper__value" aria-live="polite">
            {hours} {hours === 1 ? 'hour' : 'hours'}
          </output>
          <button
            type="button"
            className="stepper__btn"
            onClick={() => setHours((h) => Math.min(12, h + 1))}
            disabled={hours >= 12}
            aria-label="Add one hour"
          >
            +
          </button>
        </div>
        <p className="estimate">
          Estimate <strong>{money(estimate)}</strong>
          <span className="estimate__calc">
            {' '}
            = {money(vendor.rate)} × {hours}
          </span>
        </p>
      </section>

      <section className="section">
        <h2 className="section__title" id="start-label">
          Start time
        </h2>
        <div className="chips" role="group" aria-labelledby="start-label">
          {vendor.slots.map((slot) => (
            <button
              key={slot}
              type="button"
              className="chip"
              aria-pressed={startTime === slot}
              onClick={() => setStartTime(slot)}
            >
              {slot}
            </button>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">Reviews</h2>
        <ul className="reviews">
          {vendor.reviews.map((review) => (
            <li key={review.author} className="review">
              <p className="review__head">
                <span className="review__author">{review.author}</span>
                <span className="review__rating" aria-label={`${review.rating} out of 5`}>
                  {'★'.repeat(review.rating)}
                  <span className="review__rating-dim">{'★'.repeat(5 - review.rating)}</span>
                </span>
              </p>
              <p className="review__text">{review.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="stickybar">
        <p className={over ? 'stickybar__budget stickybar__budget--over' : 'stickybar__budget'}>
          {over
            ? `${money(Math.abs(remainingAfter))} over budget`
            : `${money(remainingAfter)} left of budget`}
        </p>
        <button
          type="button"
          className="btn btn--primary"
          onClick={() => {
            addSelection({
              category: vendor.category,
              vendorId: vendor.id,
              hours,
              startTime,
            })
            onAdded()
          }}
        >
          {isCurrent ? 'Update booking' : 'Add to event'} · {money(estimate)}
        </button>
      </div>
    </div>
  )
}
