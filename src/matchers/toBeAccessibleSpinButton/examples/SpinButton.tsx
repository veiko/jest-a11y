import React from 'react'

/**
 * SpinButton example for tests
 */
export const SpinButton: React.FC = () => {
  const [value, setValue] = React.useState(0)
  const max = 100
  const min = 0

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      setValue(v => (v + 1 > max ? max : v + 1))
    } else if (e.key === 'ArrowDown') {
      setValue(v => (v - 1 < min ? min : v - 1))
    }
  }

  return (
    <div>
      <button tabIndex={-1} />
      <input
        aria-label="some number"
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={value}
        onKeyDown={onKeyDown}
        role="spinbutton"
        type="text"
      />
      <button tabIndex={-1} />
    </div>
  )
}
