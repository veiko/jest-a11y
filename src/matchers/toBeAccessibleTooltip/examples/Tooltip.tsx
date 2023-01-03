import React from 'react'

export const Tooltip: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <div
        className={isOpen ? 'open' : 'closed'}
        aria-describedby="tooltip-text"
        data-testid="a-trigger"
        onBlur={() => setIsOpen(false)}
        onFocus={() => setIsOpen(true)}
        onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
          if (e.key === 'esc') {
            setIsOpen(false)
          }
        }}
        tabIndex={0}
      >
        hover me
      </div>
      <div aria-hidden={!isOpen} id="tooltip-text" data-testid="a-tooltip" role="tooltip">
        hello world
      </div>
    </>
  )
}
