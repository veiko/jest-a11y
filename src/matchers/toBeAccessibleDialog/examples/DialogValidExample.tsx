import React, { useRef } from 'react'

export const DialogExample = () => {
  const [open, setOpen] = React.useState(false)
  // @see null because of https://github.com/DefinitelyTyped/DefinitelyTyped/issues/35572#issuecomment-498242139
  const btnRef = useRef<HTMLButtonElement>(null)

  return (
    <div
      aria-label="Test Dialog"
      aria-modal="true"
      onKeyDown={(e: React.KeyboardEvent) => e.key === 'Escape' && setOpen(false)}
      role="dialog"
    >
      <div>
        <button ref={btnRef}>close</button>
      </div>
      hello world
      <input />
      <a
        href="https://www.example.com"
        onKeyUp={e => {
          if (e.key === 'Tab') {
            e.preventDefault()
            btnRef.current?.focus()
          }
        }}
      >
        link
      </a>
    </div>
  )
}
