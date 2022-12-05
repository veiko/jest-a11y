import React, { useContext, useEffect, useRef, useState } from 'react'
import { ExampleContext } from '../ExampleContainer'

export const AlertDialog = () => {
  const launchRef = useRef<HTMLButtonElement>(null!)
  const noRef = useRef<HTMLButtonElement>(null!)

  const { setAccessibleLabel, setActions, setExampleText, setTooltip } = useContext(ExampleContext)

  useEffect(() => {
    setExampleText('Launch the alert dialog', { transformY: -45 })
  }, [])

  const [isOpen, setOpen] = useState(false)

  const onClose = () => {
    setOpen(false)

    launchRef.current.focus()
    setExampleText('When a dialog closes, focus should return to the element that invoked the dialog.', { transformY: launchRef.current.offsetTop })
    setAccessibleLabel('Launch')
    setActions(['lakdjf'])
  }

  const onOpen = () => {
    setOpen(true)
    setTooltip(true)
  }

  return (
    <>
      <button className="button" id="launch-button" onKeyDown={e => e.key === 'Tab' && setTooltip(false)} onClick={() => onOpen()} ref={launchRef}>
        Launch
      </button>
      {isOpen && (
        <div
          className={`alertdialog ${isOpen ? 'open' : ''}`}
          data-testid="alertdialog"
          onKeyUp={e => e.key === 'Escape' && onClose()}
          role="alertdialog"
        >
          <h3>Are you sure?</h3>
          <br />
          <button
            autoFocus
            className="button"
            onBlur={() =>
              setExampleText(
                <>
                  <kbd>Esc</kbd> closes the dialog
                </>,
              )
            }
            onFocus={() => setExampleText('When a dialog opens, focus moves to an element inside the dialog')}
            onClick={onClose}
            ref={noRef}
          >
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
