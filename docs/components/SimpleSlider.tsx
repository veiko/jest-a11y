import React from 'react'

type Props = {
  id: string
  label?: string
  max: number
  min: number
  onChange: (value: number) => void
  value: number
}

export const SimpleSlider: React.FC<Props> = ({ id, label, max, min, onChange, value }) => (
  <div>
    {label ? (
      <div className="slider-label">
        <label htmlFor={id}>{label}:</label>
        <div>{value}</div>
      </div>
    ) : null}
    <input
      aria-label="slider"
      className="slider"
      id={id}
      max={max}
      min={min}
      onChange={(e: React.SyntheticEvent<HTMLInputElement>) => {
        onChange(parseInt(e.currentTarget.value, 10))
      }}
      role="slider"
      style={{ '--percent-value': `${value / max}%` } as React.CSSProperties}
      tabIndex={0}
      type="range"
      value={value}
    />
  </div>
)
