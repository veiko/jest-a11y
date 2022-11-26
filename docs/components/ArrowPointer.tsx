import React, { useContext } from 'react'
import { Arrow } from './Arrow'
import { ExampleContext } from './ExampleContainer'

export const ArrowPointer = ({ color, size }) => {
  const { exampleText = { text: 'tab to this item' } } = useContext(ExampleContext)
  return (
    <div className="arrow-pointer" style={{ transform: `translateY(${exampleText.transformY}px)` }}>
      <div className="arrow-text">{exampleText.text}</div>
      <div>
        <Arrow color={color} size={size} />
      </div>
      <div></div>
    </div>
  )
}
