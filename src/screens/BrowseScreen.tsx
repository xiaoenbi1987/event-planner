import type { CategoryId } from '../types'
import { usePlan } from '../state/planStore'
import { CATEGORIES, vendorsInCategory } from '../data/vendors'
import { money } from '../format'
import { FilterLine } from '../components/FilterLine'
import { Placeholder } from '../components/Placeholder'

type Props = {
  category: CategoryId
  onBack: () => void
  onOpenVendor: (vendorId: string) => void
}

export function BrowseScreen({ category, onBack, onOpenVendor }: Props) {
  const { selectionFor } = usePlan()
  const label = CATEGORIES.find((c) => c.id === category)?.label ?? 'Vendors'
  const vendors = vendorsInCategory(category)
  const selection = selectionFor(category)

  return (
    <div className="stack">
      <header className="pagehead">
        <button type="button" className="backlink" onClick={onBack}>
          Back to plan
        </button>
        <h1 className="pagehead__title">{label}</h1>
        <FilterLine />
      </header>

      <ul className="list">
        {vendors.map((vendor) => (
          <li key={vendor.id}>
            <button type="button" className="card" onClick={() => onOpenVendor(vendor.id)}>
              <Placeholder caption={vendor.placeholder} variant="thumb" />
              <span className="card__body">
                <span className="card__head">
                  <span className="card__title">{vendor.name}</span>
                  {selection?.vendorId === vendor.id && <span className="tag tag--added">Added</span>}
                </span>
                <span className="card__meta">{vendor.meta}</span>
                <span className="card__price">
                  <strong>{money(vendor.rate)}/hr</strong>
                  <span className="card__ref">{money(vendor.rate * 3)} for 3 hours</span>
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
