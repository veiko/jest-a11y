import React from 'react'
import { ExampleContext } from '../ExampleContainer'

/**
 * SpinButton example for docs
 */
export const SpinButton: React.FC = () => {
  const { setAccessibleLabel, setExampleText } = React.useContext(ExampleContext)
  const [hasFocus, setFocus] = React.useState(false)
  const [value, setValue] = React.useState(0)
  const max = 100
  const min = 0

  const dec = () => setValue(v => (v - 1 < min ? min : v - 1))
  const inc = () => setValue(v => (v + 1 > max ? max : v + 1))

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      inc()
    } else if (e.key === 'ArrowDown') {
      dec()
    }
  }

  return (
    <div className={`spinbutton-wrapper textfield ${hasFocus ? 'outline' : ''}`}>
      <button disabled={value === min} onClick={() => inc()} tabIndex={-1} />
      <input
        aria-label="some number"
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={value}
        onBlur={() => {
          setFocus(false)
          setExampleText()
        }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(parseFloat(e.target.value))}
        onFocus={() => {
          setFocus(true)
          setExampleText('up and down arrow keys change the value')
          setAccessibleLabel('some number')
        }}
        onKeyDown={onKeyDown}
        role="spinbutton"
        type="text"
        value={value}
      />
      <button disabled={value === max} onClick={() => dec()} tabIndex={-1} />
    </div>
  )
}
