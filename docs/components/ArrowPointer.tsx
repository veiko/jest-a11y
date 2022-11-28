import React, { useContext } from 'react'
import { Arrow } from './Arrow'
import { ExampleContext } from './ExampleContainer'

export const ArrowPointer = ({ color, size }) => {
  const {
    exampleText = {
      text: (
        <>
          <kbd>Tab</kbd> should focus this item as part of the tab sequence
        </>
      ),
    },
    tooltip,
  } = useContext(ExampleContext)
  return tooltip ? (
    <div className="arrow-pointer" style={{ transform: `translateY(${exampleText.transformY}px)` }}>
      <div className="arrow-text">{exampleText.text}</div>
      <div>
        <Arrow color={color} size={size} />
      </div>
      <div></div>
    </div>
  ) : null
}
