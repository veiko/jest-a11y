import React, { useRef, useState } from 'react'

export const AlertDialog = () => {
  const [isOpen, setOpen] = useState(false)
  const onClose = () => {
    setOpen(false)
    launchRef.current?.focus()
  }
  const launchRef = useRef<HTMLButtonElement>(null)
  const noRef = useRef<HTMLButtonElement>(null)

  return (
    <>
      <button className="button" onClick={() => setOpen(true)} ref={launchRef}>
        Launch
      </button>
      {isOpen && (
        <div
          aria-describedby="alert-dialog-description"
          className={`alertdialog ${isOpen ? 'open' : ''}`}
          data-testid="alertdialog"
          onKeyUp={e => e.key === 'Escape' && onClose()}
          role="alertdialog"
        >
          <h3>Are you sure?</h3>
          <div id="alert-dialog-description">
            The alertdialog role enables assistive technologies and browsers to distinguish alert
            dialogs from other dialogs so they have the option of giving alert dialogs special
            treatment, such as playing a system alert sound.
          </div>
          <br />
          <br />
          <button autoFocus className="button" onClick={onClose} ref={noRef}>
            No
          </button>
          &nbsp; &nbsp;
          <button
            className="button primary"
            onClick={onClose}
            onKeyDown={e => {
              if (e.key === 'Tab') {
                e.preventDefault()
                noRef.current?.focus()
              }
            }}
          >
            Yes
          </button>
        </div>
      )}
    </>
  )
}
