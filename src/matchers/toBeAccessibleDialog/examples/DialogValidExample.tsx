import React from 'react'

export const DialogExample = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <div
      aria-label="Test Dialog"
      onKeyDown={(e: React.KeyboardEvent) => e.key === 'Escape' && setOpen(false)}
      role="dialog"
    >
      <div>
        <button>close</button>
      </div>
      hello world
      <a href="https://www.example.com">link</a>
    </div>
  )
}
