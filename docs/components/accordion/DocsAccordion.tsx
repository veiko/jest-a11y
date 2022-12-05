import React, { useContext, useEffect } from 'react'
import { ExampleContext } from '../ExampleContainer'

type AccordionItemProps = {
  btnId: string
  buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement>
  children: React.ReactNode
  id: string
  title: string
}

const AccordionItem: React.FC<AccordionItemProps> = ({ btnId, buttonProps: { onFocus, ...buttonProps }, children, id, title }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const { setAccessibleLabel } = useContext(ExampleContext)

  return (
    <>
      <h3>
        <button
          aria-expanded={isOpen}
          aria-controls={id}
          id={btnId}
          onClick={() => setIsOpen(!isOpen)}
          onFocus={e => {
            setAccessibleLabel(title)
            onFocus && onFocus(e)
          }}
          {...buttonProps}
        >
          <span>{title}</span>
        </button>
      </h3>
      <div aria-hidden={!isOpen} aria-labelledby={btnId} className={`panel ${isOpen ? 'open' : ''}`} id={id} role="region">
        <div className="panel-content">{children}</div>
      </div>
    </>
  )
}

export const Accordion: React.FC<{ id: string }> = ({ id }) => {
  const { setAccessibleLabel, setExampleText, setTooltip } = useContext(ExampleContext)

  useEffect(() => {
    setExampleText(
      <>
        <kbd>Tab</kbd> should focus the first accordion item
      </>,
      { transformY: -45 },
    )
  }, [])

  return (
    <div className="accordion" data-testid={id}>
      <AccordionItem
        btnId="accordion1id"
        id="sect1"
        buttonProps={{
          onFocus: () =>
            setExampleText(
              <>
                <kbd>Tab</kbd> to navigate to the next item
              </>,
            ),
        }}
        title="Section 1"
      >
        Item 1
      </AccordionItem>
      <AccordionItem
        btnId="accordion1id"
        id="sect1"
        buttonProps={{
          onFocus: () =>
            setExampleText(
              <>
                <kbd>Enter</kbd> or <kbd>Space</kbd> will expand the accordion panel. Make this very long so that it wraps even more.
              </>,
              { transformY: 0 },
            ),
          onKeyDown: e => {
            if (e.key === 'Tab') {
              setAccessibleLabel(undefined)
              setTooltip(false)
            }
          },
        }}
        title="Section 2"
      >
        Item 2
      </AccordionItem>
    </div>
  )
}
