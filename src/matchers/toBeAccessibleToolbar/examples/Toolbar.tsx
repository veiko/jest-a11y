import React, { useCallback, useState } from 'react'

export const Toolbar: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0)
  const [hasFocus, setFocus] = useState(false)

  const btn0 = React.createRef<HTMLButtonElement>()
  const btn1 = React.createRef<HTMLButtonElement>()
  const btn2 = React.createRef<HTMLButtonElement>()

  const buttons = [btn0, btn1, btn2]

  const switchFocus = useCallback(
    (idx: number) => {
      setActiveIdx(idx)
      buttons[idx].current?.focus()
    },
    [buttons, setActiveIdx],
  )

  return (
    <div
      aria-label="My Toolbar"
      className={`toolbar ${hasFocus ? 'outline' : ''}`}
      onFocus={() => setFocus(true)}
      onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowRight') {
          switchFocus((activeIdx + 1) % 3)
        } else if (e.key === 'ArrowLeft') {
          switchFocus(activeIdx === 0 ? 2 : (activeIdx - 1) % 3)
        } else if (e.key === 'Home') {
          switchFocus(0)
        } else if (e.key === 'End') {
          switchFocus(2)
        } else if (e.key === 'Tab' || (e.shiftKey && e.key === 'Tab')) {
          setFocus(false)
        }
      }}
      role="toolbar"
    >
      <button className="button bold" ref={btn0} tabIndex={activeIdx === 0 ? 0 : -1}>
        B
      </button>
      <button className="button italic" ref={btn1} tabIndex={activeIdx === 1 ? 0 : -1}>
        I
      </button>
      <button className="button underline" ref={btn2} tabIndex={activeIdx === 2 ? 0 : -1}>
        U
      </button>
    </div>
  )
}
