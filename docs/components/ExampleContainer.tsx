import React, { useState } from 'react'
import { ArrowPointer } from './ArrowPointer'
import { List } from './List'

type ExampleContextValue = {
  accessibleLabel?: React.ReactNode
  actions: React.ReactNode[]
  exampleText?: string
  setAccessibleLabel(label: string): void
  setActions(actions: React.ReactNode[]): void
  setExampleText(text?: string): void
}

export const ExampleContext = React.createContext<ExampleContextValue>({
  actions: [],
  setAccessibleLabel: () => {},
  setActions: () => {},
  setExampleText: () => {},
})

export const ExampleContextProvider = ({ children }) => {
  const [actions, setActions] = useState<React.ReactNode[]>([])
  const [accessibleLabel, setAccessibleLabel] = useState<React.ReactNode>()
  const [exampleText, setExampleText] = useState<string>()
  return (
    <ExampleContext.Provider value={{ accessibleLabel, actions, exampleText, setAccessibleLabel, setActions, setExampleText }}>
      {children}
    </ExampleContext.Provider>
  )
}

const ExampleFooter = () => {
  const { actions } = React.useContext(ExampleContext)
  return <div className="example-actions">{actions.length > 0 && <List items={actions} />}</div>
}

export const ExampleContainer = ({ children }) => {
  const size = 40
  return (
    <ExampleContextProvider>
      <div className="example" style={{ '--arrow-size': `${size}px` } as React.CSSProperties}>
        <div className="left" />
        <div className="center">{children}</div>
        <div className="right">
          <ArrowPointer color="var(--purple)" size={size} />
        </div>
      </div>
      <ExampleFooter />
    </ExampleContextProvider>
  )
}
