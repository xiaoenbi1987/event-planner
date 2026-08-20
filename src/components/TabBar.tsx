type Props = {
  active: 'plan' | 'event'
  eventCount: number
  onPlan: () => void
  onEvent: () => void
}

export function TabBar({ active, eventCount, onPlan, onEvent }: Props) {
  return (
    <nav className="tabbar" aria-label="Main">
      <button
        type="button"
        className="tabbar__tab"
        aria-current={active === 'plan' ? 'page' : undefined}
        onClick={onPlan}
      >
        Plan
      </button>
      <button
        type="button"
        className="tabbar__tab"
        aria-current={active === 'event' ? 'page' : undefined}
        onClick={onEvent}
      >
        My event ({eventCount})
      </button>
    </nav>
  )
}
