import React from 'react'
import { SimpleSlider } from './SimpleSlider'

export type ControlConfig = {
  label: string
  type: 'slider' | 'checkbox'
  value: unknown
}

type ControlProps = ControlConfig

export const Control: React.FC<ControlProps> = ({ label, type, value }) => {
  switch (type) {
    case 'slider':
      return <SimpleSlider id={label} label={label} max={10} min={0} onChange={() => {}} value={value as number} />
    default:
      return <span>{JSON.stringify({ type, value })}</span>
  }
}
