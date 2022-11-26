import React, { useCallback } from 'react'

export const SmallSwitch = ({ id, label }) => {
  const [on, setOn] = React.useState(false)

  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === ' ') {
      e.preventDefault()
      setOn(v => !v)
    }
  }, [])

  return (
    <>
      <div className="switch-wrapper small">
        <div
          aria-checked={on}
          aria-labelledby="Lights"
          className={`switch ${on ? 'on' : 'off'}`}
          data-testid={id}
          onClick={() => setOn(v => !v)}
          onKeyDown={onKeyDown}
          role="switch"
          tabIndex={0}
        />
      </div>
      <div className="switch-label" id={`${id}-label`}>
        {label}
      </div>
    </>
  )
}
