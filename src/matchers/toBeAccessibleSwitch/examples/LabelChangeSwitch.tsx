import React, { useCallback } from 'react'

export const LabelChangeSwitch = () => {
  const [on, setOn] = React.useState(false)

  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === ' ') {
      e.preventDefault()
      setOn(v => !v)
    }
  }, [])

  return (
    <div className="switch-wrapper">
      <div>Turn on the lights</div>
      <div
        aria-checked={on}
        aria-label={`Lights ${on ? 'On' : 'Off'}`}
        className={`switch ${on ? 'on' : 'off'}`}
        data-testid="an-switch"
        onClick={() => setOn(v => !v)}
        onKeyDown={onKeyDown}
        role="switch"
        tabIndex={0}
      />
    </div>
  )
}
