import React, { useState } from 'react'

export const RadioGroup = () => {
  const [activeItem, setActiveItem] = useState(0)
  const onKeyUp = (e: React.KeyboardEvent) => {
    setActiveItem(idx => {
      let newIdx: number = idx
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        newIdx = idx === 2 ? 0 : idx + 1
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        newIdx = idx === 0 ? 2 : idx - 1
      }

      return newIdx
    })
  }

  return (
    <div aria-label="group" role="radiogroup">
      <input
        aria-checked={activeItem === 0}
        aria-label="item 0"
        id="item-0"
        name="group"
        onKeyUp={onKeyUp}
        type="radio"
      />
      <input
        aria-checked={activeItem === 1}
        aria-label="item 1"
        id="item-1"
        name="group"
        onKeyUp={onKeyUp}
        type="radio"
      />
      <input
        aria-checked={activeItem === 2}
        aria-label="item 2"
        id="item-2"
        name="group"
        onKeyUp={onKeyUp}
        type="radio"
      />
    </div>
  )
}
