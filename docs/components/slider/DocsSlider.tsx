import React, { useContext, useState } from 'react'
import { ExampleContext } from '../ExampleContainer'

export const Slider = () => {
  const min = 0
  const max = 10
  const [value, setValue] = useState(5)
  const { setExampleText, setTooltip } = useContext(ExampleContext)

  return (
    <input
      aria-label="Sample Slider"
      aria-valuemax={max}
      aria-valuemin={min}
      aria-valuenow={value}
      className="slider"
      max={max}
      min={min}
      onBlur={() => setTooltip(false)}
      onChange={(e: React.SyntheticEvent<HTMLInputElement>) => {
        setExampleText(
          <>
            <kbd>Home</kbd> and <kbd>End</kbd> keys will change the value to the <code>min</code> and <code>max</code> values
          </>,
        )
        setValue(parseInt(e.currentTarget.value, 10))
      }}
      onFocus={() =>
        setExampleText(
          <>
            <kbd>←</kbd> and <kbd>→</kbd> will change the value by one step
          </>,
        )
      }
      // onKeyDown={onKeyDown}
      role="slider"
      style={{ '--percent-value': `${value * 10}%` } as React.CSSProperties}
      tabIndex={0}
      type="range"
      value={value}
    />
  )
}
