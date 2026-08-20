import { useState } from 'react'
import type { CategoryId } from './types'
import { PlanProvider } from './state/PlanProvider'
import { usePlan } from './state/planStore'
import { TabBar } from './components/TabBar'
import { PlanScreen } from './screens/PlanScreen'
import { BrowseScreen } from './screens/BrowseScreen'
import { VendorScreen } from './screens/VendorScreen'
import { MyEventScreen } from './screens/MyEventScreen'
import { SentScreen } from './screens/SentScreen'
import type { SentSummary } from './screens/SentScreen'

type Screen =
  | { name: 'plan' }
  | { name: 'browse'; category: CategoryId }
  | { name: 'vendor'; vendorId: string; category: CategoryId }
  | { name: 'event' }
  | { name: 'sent'; summary: SentSummary }

function Shell() {
  const [screen, setScreen] = useState<Screen>({ name: 'plan' })
  const { selections, details, total } = usePlan()

  const goPlan = () => setScreen({ name: 'plan' })
  const goEvent = () => setScreen({ name: 'event' })

  // Vendor detail has its own sticky bar; Sent is a dead end.
  const showTabs = screen.name === 'plan' || screen.name === 'browse' || screen.name === 'event'
  const activeTab = screen.name === 'event' ? 'event' : 'plan'

  return (
    <div className="phone">
      <main className={showTabs ? 'screen screen--with-tabs' : 'screen'}>
        {screen.name === 'plan' && (
          <PlanScreen onOpenCategory={(category) => setScreen({ name: 'browse', category })} />
        )}
        {screen.name === 'browse' && (
          <BrowseScreen
            category={screen.category}
            onBack={goPlan}
            onOpenVendor={(vendorId) =>
              setScreen({ name: 'vendor', vendorId, category: screen.category })
            }
          />
        )}
        {screen.name === 'vendor' && (
          <VendorScreen
            vendorId={screen.vendorId}
            onBack={() => setScreen({ name: 'browse', category: screen.category })}
            onAdded={goEvent}
          />
        )}
        {screen.name === 'event' && (
          <MyEventScreen
            onBack={goPlan}
            onOpenCategory={(category) => setScreen({ name: 'browse', category })}
            onSend={() =>
              setScreen({
                name: 'sent',
                summary: {
                  vendorCount: selections.length,
                  total,
                  eventType: details.type,
                  date: details.date,
                },
              })
            }
          />
        )}
        {screen.name === 'sent' && <SentScreen summary={screen.summary} onBackToPlan={goPlan} />}
      </main>

      {showTabs && (
        <TabBar
          active={activeTab}
          eventCount={selections.length}
          onPlan={goPlan}
          onEvent={goEvent}
        />
      )}
    </div>
  )
}

export default function App() {
  return (
    <PlanProvider>
      <Shell />
    </PlanProvider>
  )
}
