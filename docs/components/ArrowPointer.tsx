import React, { useContext } from 'react'
import { Arrow } from './Arrow'
import { ExampleContext } from './ExampleContainer'

export const ArrowPointer = ({ color, size }) => {
  const { exampleText = 'tab to this item' } = useContext(ExampleContext)
  return (
    <div className="arrow-pointer">
      <div className="arrow-text">{exampleText}</div>
      <div>
        <Arrow color={color} size={size} />
      </div>
      <div></div>
    </div>
  )
}
