import React from 'react'

type AccordionItemProps = {
  btnId: string
  children: React.ReactNode
  id: string
  title: string
}

const AccordionItem: React.FC<AccordionItemProps> = ({ btnId, children, id, title }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <h3>
        <button
          aria-expanded={isOpen}
          aria-controls={id}
          id={btnId}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{title}</span>
        </button>
      </h3>
      <div id={id} role="region" aria-labelledby={btnId}>
        {children}
      </div>
    </>
  )
}

export const Accordion: React.FC<{ id: string }> = ({ id }) => (
  <div data-testid={id}>
    <AccordionItem btnId="accordion1id" id="sect1" title="Personal Information">
      Item 1
    </AccordionItem>
  </div>
)
