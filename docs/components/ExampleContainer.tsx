import React, { useState } from 'react'
import { ArrowPointer } from './ArrowPointer'

type ExampleContextValue = {
  exampleText?: string
  setAccessibleLabel(label: string): void
  setExampleText(text?: string): void
}

export const ExampleContext = React.createContext<ExampleContextValue>({ setAccessibleLabel: () => {}, setExampleText: () => {} })

export const ExampleContextProvider = ({ children }) => {
  const [accessibleLabel, setAccessibleLabel] = useState<string>()
  const [exampleText, setExampleText] = useState<string>()
  return <ExampleContext.Provider value={{ exampleText, setAccessibleLabel, setExampleText }}>{children}</ExampleContext.Provider>
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
    </ExampleContextProvider>
  )
}
