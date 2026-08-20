import { createContext, useContext } from 'react'
import type { CategoryId, EventDetails, Plan, Selection } from '../types'
import { vendorById } from '../data/vendors'

export const STORAGE_KEY = 'event-planner.plan'

export const DEFAULT_PLAN: Plan = {
  details: {
    type: 'wedding',
    date: '2026-09-12',
    city: 'Lisbon',
    guests: 60,
    budget: 3000,
  },
  selections: [],
}

/** Reads the saved plan, dropping anything that no longer matches the data. */
export function loadPlan(): Plan {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULT_PLAN
    const parsed = JSON.parse(raw) as Partial<Plan>
    const details = { ...DEFAULT_PLAN.details, ...(parsed.details ?? {}) }
    const selections = Array.isArray(parsed.selections)
      ? parsed.selections.filter((s): s is Selection => {
          const vendor = vendorById(s?.vendorId ?? '')
          return Boolean(vendor && vendor.category === s.category && s.hours >= 1)
        })
      : []
    return { details, selections }
  } catch {
    return DEFAULT_PLAN
  }
}

export type PlanContextValue = {
  details: EventDetails
  selections: Selection[]
  setDetails: (patch: Partial<EventDetails>) => void
  /** One vendor per category: adding a second replaces the first. */
  addSelection: (selection: Selection) => void
  removeSelection: (category: CategoryId) => void
  selectionFor: (category: CategoryId) => Selection | undefined
  subtotalOf: (selection: Selection) => number
  total: number
  remaining: number
  overBudget: boolean
}

export const PlanContext = createContext<PlanContextValue | null>(null)

export function usePlan(): PlanContextValue {
  const context = useContext(PlanContext)
  if (!context) throw new Error('usePlan must be used inside a PlanProvider')
  return context
}
