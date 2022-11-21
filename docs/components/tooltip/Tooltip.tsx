import React, { useContext, useState } from 'react'
import { ExampleContext } from '../ExampleContainer'

export const Tooltip: React.FC = () => {
  const { setExampleText } = useContext(ExampleContext)
  const [isOpen, setIsOpen] = useState(false)

  const blur = () => {
    setIsOpen(false)
    setExampleText('press escape to close')
  }

  const focus = () => {
    setIsOpen(true)
    setExampleText('press escape to close')
  }

  return (
    <div className="tooltip-wrapper">
      <div
        aria-describedby="my-tooltip"
        className="tooltip-trigger"
        onBlur={blur}
        onFocus={focus}
        onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
          if (e.key === 'Escape') {
            blur()
            e.currentTarget.blur()
          }
        }}
        onMouseOver={focus}
        onMouseOut={blur}
        tabIndex={0}
      >
        Hey, listen!
      </div>
      {isOpen && (
        <div className="tooltip" id="my-tooltip" role="tooltip">
          :)
        </div>
      )}
    </div>
  )
}
