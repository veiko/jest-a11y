import React from 'react'

export const SliderWithoutEnd = () => {
  const min = 0
  const max = 100
  const [value, setValue] = React.useState(50)
  const onKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      setValue(v => v - 0.1)
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      setValue(v => v + 0.1)
    } else if (e.key === 'Home') {
      setValue(min)
    }
  }

  return (
    <div
      aria-label="progress"
      aria-valuemax={max}
      aria-valuemin={min}
      aria-valuenow={value}
      data-testid="an-slider"
      onKeyUp={onKeyUp}
      role="slider"
      tabIndex={0}
    />
  )
}
