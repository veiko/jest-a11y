import React, { useCallback, useContext, useEffect } from 'react'
import { ExampleContext } from '../ExampleContainer'
import { List } from '../List'

const tabs = [
  { title: 'Fruits', list: ['Apple', 'Banana'] },
  { title: 'Vegetables', list: ['Aubergine', 'Bok Choy'] },
  { title: 'Meats', list: ['Alpaca', 'Boar'] },
]

export const Tabs: React.FC = () => {
  const { setExampleText } = useContext(ExampleContext)
  const [activeTab, setActiveTab] = React.useState(0)
  const tabRefs = React.useRef<HTMLDivElement[]>([])

  const activateTab = useCallback(
    (index: number) => {
      tabRefs.current[index].focus()
      setActiveTab(index)
    },
    [tabRefs],
  )

  return (
    <div>
      <div
        aria-label="The tabs"
        className="tabs"
        onFocus={() => setExampleText('use right and left to navigate', { transformY: -110 })}
        onKeyDown={(e: React.KeyboardEvent) => {
          if (e.key === 'ArrowRight') {
            activateTab(activeTab === tabs.length - 1 ? 0 : activeTab + 1)
          } else if (e.key === 'ArrowLeft') {
            activateTab(activeTab === 0 ? tabs.length - 1 : activeTab - 1)
          }
        }}
        role="tablist"
      >
        {tabs.map((tab, i) => (
          <div
            aria-controls={`panel-${i}`}
            aria-selected={activeTab === i}
            className={`tab ${activeTab === i ? 'active focus' : ''}`}
            id={`tab-${i}`}
            key={`tab-${i}`}
            onClick={() => activateTab(i)}
            ref={el => (tabRefs.current[i] = el as HTMLDivElement)}
            role="tab"
            tabIndex={activeTab === i ? 0 : -1}
          >
            {tab.title}
          </div>
        ))}
      </div>
      {tabs.map(({ list }, i) => (
        <div
          aria-labelledby={`tab-${i}`}
          className="tabpanel"
          hidden={activeTab !== i}
          id={`panel-${i}`}
          key={`panel-${i}`}
          role="tabpanel"
          tabIndex={i === 0 ? -1 : 0}
        >
          <List items={list} />
          <>
            <br />
            {i === 0 ? <button className="button">Ok</button> : null}
          </>
        </div>
      ))}
    </div>
  )
}
