import { useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import type { Plan } from '../types'
import { vendorById } from '../data/vendors'
import { loadPlan, PlanContext, STORAGE_KEY } from './planStore'
import type { PlanContextValue } from './planStore'

export function PlanProvider({ children }: { children: ReactNode }) {
  const [plan, setPlan] = useState<Plan>(loadPlan)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(plan))
    } catch {
      // Storage can be unavailable (private mode, full quota); the app still works.
    }
  }, [plan])

  const value = useMemo<PlanContextValue>(() => {
    const subtotalOf = (selection: { vendorId: string; hours: number }) => {
      const vendor = vendorById(selection.vendorId)
      return vendor ? vendor.rate * selection.hours : 0
    }
    const total = plan.selections.reduce((sum, s) => sum + subtotalOf(s), 0)

    return {
      details: plan.details,
      selections: plan.selections,
      setDetails: (patch) =>
        setPlan((prev) => ({ ...prev, details: { ...prev.details, ...patch } })),
      addSelection: (selection) =>
        setPlan((prev) => ({
          ...prev,
          selections: [
            ...prev.selections.filter((s) => s.category !== selection.category),
            selection,
          ],
        })),
      removeSelection: (category) =>
        setPlan((prev) => ({
          ...prev,
          selections: prev.selections.filter((s) => s.category !== category),
        })),
      selectionFor: (category) => plan.selections.find((s) => s.category === category),
      subtotalOf,
      total,
      remaining: plan.details.budget - total,
      overBudget: total > plan.details.budget,
    }
  }, [plan])

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>
}
