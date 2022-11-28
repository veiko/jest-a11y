import React, { useCallback, useState } from 'react'
import { ArrowPointer } from './ArrowPointer'
import { Control, ControlConfig } from './Control'
import { List } from './List'

type ExampleTextConfig = { transformY?: number }
type ExampleTextComplete = ExampleTextConfig & { text: React.ReactNode }

type ExampleContextValue = {
  accessibleLabel?: React.ReactNode
  actions: React.ReactNode[]
  addControl: (control: ControlConfig) => void
  controls: ControlConfig[]
  exampleText?: ExampleTextComplete
  getControlValue: (label: string) => unknown
  tooltip: boolean
  setAccessibleLabel(label?: string): void
  setActions(actions: React.ReactNode[]): void
  setExampleText(text: React.ReactNode, config?: ExampleTextConfig): void
  setTooltip(tooltip: boolean): void
}

export const ExampleContext = React.createContext<ExampleContextValue>({
  actions: [],
  addControl: () => {},
  controls: [],
  getControlValue: () => {},
  setAccessibleLabel: () => {},
  setActions: () => {},
  setExampleText: () => {},
  setTooltip: () => {},
  tooltip: true,
})

export const ExampleContextProvider = ({ children }) => {
  const [actions, setActions] = useState<React.ReactNode[]>([])
  const [controls, setControls] = useState<ControlConfig[]>([])
  const [accessibleLabel, setAccessibleLabel] = useState<React.ReactNode>()
  const [exampleText, setExampleText] = useState<ExampleTextComplete>()
  const [tooltip, setTooltip] = useState(true)

  const addControl = useCallback(control => setControls(controls => [...controls, control]), [setControls])

  const getControlValue = useCallback(() => {}, [])

  return (
    <ExampleContext.Provider
      value={{
        accessibleLabel,
        actions,
        addControl,
        controls,
        exampleText,
        getControlValue,
        setAccessibleLabel,
        setActions,
        setExampleText: (text, config) => setExampleText({ text, ...config }),
        setTooltip,
        tooltip,
      }}
    >
      {children}
    </ExampleContext.Provider>
  )
}

const ExampleControls = () => {
  const { controls } = React.useContext(ExampleContext)
  return (
    <div className="example-controls">
      {controls.map((config, i) => (
        <Control key={i} {...config} />
      ))}
    </div>
  )
}

const ExampleFooter = () => {
  const { actions, accessibleLabel } = React.useContext(ExampleContext)
  return (
    <div className="example-actions">
      {accessibleLabel ? (
        <div style={{ alignItems: 'center', display: 'inline-flex', gap: '4px' }}>
          <img src="/jest-a11y/img/audio.svg" />{' '}
          <span>
            <strong>Accessible Label: </strong>
            {accessibleLabel}
          </span>
        </div>
      ) : null}
      {actions.length > 0 && <List items={actions} />}
    </div>
  )
}

export const ExampleContainer = ({ size = 1, children }) => {
  const arrowSize = 40
  return (
    <ExampleContextProvider>
      <div className="example centered" style={{ '--arrow-size': `${arrowSize}px`, '--grid-size': `${size}fr` } as React.CSSProperties}>
        <div className="left" />
        <div className="center">{children}</div>
        <div className="right">{<ArrowPointer color="var(--purple)" size={arrowSize} />}</div>
      </div>
      <ExampleControls />
      <ExampleFooter />
    </ExampleContextProvider>
  )
}
