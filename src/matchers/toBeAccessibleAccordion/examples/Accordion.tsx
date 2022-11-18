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
      <div
        aria-labelledby={btnId}
        className={`panel ${isOpen ? 'open' : ''}`}
        id={id}
        role="region"
      >
        <div className="panel-content">{children}</div>
      </div>
    </>
  )
}

export const Accordion: React.FC<{ id: string }> = ({ id }) => (
  <div className="accordion" data-testid={id}>
    <AccordionItem btnId="accordion1id" id="sect1" title="Section 1">
      Item 1
    </AccordionItem>
    <AccordionItem btnId="accordion1id" id="sect1" title="Section 2">
      Item 2
    </AccordionItem>
  </div>
)
