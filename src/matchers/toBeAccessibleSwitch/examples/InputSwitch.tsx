import React from 'react'

export const InputSwitch = () => {
  const [checked, setChecked] = React.useState(false)

  return (
    <div className="switch-wrapper">
      <div>Turn on the lights</div>
      <input
        aria-label="Lights"
        checked={checked}
        onChange={() => setChecked(v => !v)}
        type="checkbox"
        role="switch"
      />
    </div>
  )
}
