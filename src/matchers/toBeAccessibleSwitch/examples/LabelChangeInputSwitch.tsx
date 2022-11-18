import React, { useCallback } from 'react'

export const LabelChangeInputSwitch = () => {
  const [on, setOn] = React.useState(false)

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('current val', e.currentTarget.checked)
    console.log('current val', e.target.checked)
    setOn(e.target.checked)
  }, [])

  return (
    <div className="switch-wrapper">
      <div>Turn on the lights</div>
      <input
        checked={on}
        aria-label={`Lights ${on ? 'On' : 'Off'}`}
        className={`switch ${on ? 'on' : 'off'}`}
        data-testid="an-switch"
        onChange={onChange}
        role="switch"
        type="checkbox"
      />
    </div>
  )
}
