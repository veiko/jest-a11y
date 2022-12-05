import { TestRunner } from '../TestRunner'
import { toBeAccessibleAccordion } from '../../matchers/toBeAccessibleAccordion/to-be-accessible-accordion'
import React from 'react'

type Props = { children: React.ReactNode; code: string }

/**
 * Component to display a summary of all the tests.
 * TODO: Classes and styles have been hard-coded for now. Ideally this would import the Prism component?
 */
export const AccordionTestRunner: React.FunctionComponent<Props> = () => {
  return (
    <TestRunner
      className="accordion"
      code={`<div className="accordion">
  <h3>
    <button aria-controls="something">
      Accordion Panel 1
    </button>
  </h3>
</div>`}
      matcher={toBeAccessibleAccordion}
    />
  )
}
