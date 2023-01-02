import React, { useState } from 'react'

/**
 * Sample RadioGroup component. Browsers do not handle aria-checked attribute, so it must be
 * done with JavaScript
 */
export const RadioGroup = () => {
  const [activeItem, setActiveItem] = useState(0)
  const onKeyUp = (e: React.KeyboardEvent) => {
    setActiveItem(idx => {
      let newIdx: number = idx
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        newIdx = idx === 3 ? 0 : idx + 1
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        newIdx = idx === 0 ? 3 : idx - 1
      }

      return newIdx
    })
  }

  return (
    <div aria-label="group" role="radiogroup">
      <input
        aria-label="item 0"
        checked={activeItem === 0}
        id="item-0"
        name="group"
        onChange={e => e.preventDefault()}
        onKeyUp={onKeyUp}
        type="radio"
      />
      <div
        aria-checked={activeItem === 1}
        aria-label="item 1"
        id="item-1"
        onChange={e => e.preventDefault()}
        onKeyUp={onKeyUp}
        role="radio"
      />
      <label>
        item 2
        <input
          checked={activeItem === 2}
          id="item-2"
          name="group"
          onChange={e => e.preventDefault()}
          onKeyUp={onKeyUp}
          type="radio"
        />
      </label>

      <label htmlFor="item-3">item 3</label>
      <input
        checked={activeItem === 3}
        id="item-3"
        name="group"
        onChange={e => e.preventDefault()}
        onKeyUp={onKeyUp}
        type="radio"
      />
    </div>
  )
}
