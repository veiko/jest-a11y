import React, { useCallback } from 'react'

const tabs = [
  { title: 'Fruits', list: ['Apple', 'Banana'] },
  { title: 'Vegetables', list: ['Aubergine', 'Bok Choy'] },
  { title: 'Meats', list: ['Alpaca', 'Boar'] },
]

export const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(0)
  const tabRefs = React.useRef<HTMLDivElement[]>([])

  const activateTab = useCallback(
    (index: number) => {
      if (activeTab !== index) {
        tabRefs.current[index].focus()
        setActiveTab(index)
      }
    },
    [activeTab, setActiveTab, tabRefs],
  )

  return (
    <div>
      <div
        aria-label="The tabs"
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
            id={`tab-${i}`}
            key={`tab-${i}`}
            onClick={() => activateTab(i)}
            ref={el => (tabRefs.current[i] = el as HTMLDivElement)}
            role="tab"
            tabIndex={activeTab === i ? 0 : -1}
          >
            {tab.title} {activeTab}
          </div>
        ))}
      </div>
      {tabs.map(({ list }, i) => (
        <div
          aria-labelledby={`tab-${i}`}
          hidden={activeTab !== i}
          id={`panel-${i}`}
          key={`panel-${i}`}
          role="tabpanel"
          tabIndex={i === 0 ? -1 : 0}
        >
          <ul>
            {list.map((item, j) => (
              <li key={`item-${j}`}>{item}</li>
            ))}
          </ul>
          {i === 0 ? <button className="button">Ok</button> : null}
        </div>
      ))}
    </div>
  )
}
