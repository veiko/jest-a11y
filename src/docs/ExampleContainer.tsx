import React, { useCallback, useState } from 'react'
import { ArrowPointer } from './ArrowPointer'
import { Control, ControlConfig } from './Control'
import { List } from './List'
import { AudioIcon } from './AudioIcon'

type ExampleTextConfig = { transformY?: number }
type ExampleTextComplete = ExampleTextConfig & { text: React.ReactNode }

type ExampleContextValue = {
  accessibleLabel?: string
  actions: React.ReactNode[]
  addControl: (control: ControlConfig) => void
  controls: ControlConfig[]
  exampleText?: ExampleTextComplete
  getControlValue: (label: string) => unknown
  tooltip: boolean
  setAccessibleLabel(label?: string): void
  setActions(actions: React.ReactNode[]): void
  setExampleText(text?: React.ReactNode, config?: ExampleTextConfig): void
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

type ExampleContextProviderProps = { children: React.ReactNode }
export const ExampleContextProvider = ({ children }: ExampleContextProviderProps) => {
  const [actions, setActions] = useState<React.ReactNode[]>([])
  const [controls, setControls] = useState<ControlConfig[]>([])
  const [accessibleLabel, setAccessibleLabel] = useState<string>()
  const [exampleText, setExampleText] = useState<ExampleTextComplete>()
  const [tooltip, setTooltip] = useState(true)

  const addControl = useCallback(
    (control: any) => setControls(controls => [...controls, control]),
    [setControls],
  )

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
        setAccessibleLabel: () => {},
        setActions,
        setExampleText: () => {},
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
          <div className="audio-btn">
            <AudioIcon
              onClick={() => {
                var msg = new SpeechSynthesisUtterance(accessibleLabel)
                speechSynthesis.speak(msg)
              }}
            />
          </div>
          <span>
            <strong>Accessible Label: </strong>
            {accessibleLabel}
          </span>
        </div>
      ) : null}
      {actions.length > 0 && (
        <div>
          <List items={actions} />
        </div>
      )}
    </div>
  )
}
type ExampleContainerProps = { height: number; size?: number; children: React.ReactNode }
export const ExampleContainer = ({ height, size = 1, children }: ExampleContainerProps) => {
  const arrowSize = 40

  return (
    <ExampleContextProvider>
      <div className="example-wrapper">
        <div
          className="example centered"
          style={
            {
              '--arrow-size': `${arrowSize}px`,
              '--grid-size': `${size}fr`,
              height,
            } as React.CSSProperties
          }
        >
          <div className="left" />
          <div className="center">{children}</div>
          <div className="right">{<ArrowPointer color="var(--purple)" size={arrowSize} />}</div>
        </div>
      </div>
      <ExampleControls />
      <ExampleFooter />
    </ExampleContextProvider>
  )
}
