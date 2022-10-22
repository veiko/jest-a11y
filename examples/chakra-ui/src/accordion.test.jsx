import { Accordion, AccordionItem, AccordionButton, AccordionPanel } from '@chakra-ui/react'
import { render, screen } from '@testing-library/react'
import React from 'react'

import 'jest-a11y'

window.scrollTo = jest.fn()

test('passes when valid', async () => {
  render(
    <Accordion data-testid="accordion">
      <AccordionItem>
        <h2>
          <AccordionButton>Section 1 title</AccordionButton>
        </h2>
        <AccordionPanel>Panel 1</AccordionPanel>
      </AccordionItem>
    </Accordion>,
  )

  await expect(screen.getByTestId('accordion')).toBeAccessibleAccordion()
})

test('passes when using heading without implicit roles', async () => {
  render(
    <Accordion data-testid="accordion">
      <AccordionItem>
        <div aria-level={2} role="heading">
          <AccordionButton>Section 1 title</AccordionButton>
        </div>
        <AccordionPanel>Panel 1</AccordionPanel>
      </AccordionItem>
    </Accordion>,
  )

  await expect(screen.getByTestId('accordion')).toBeAccessibleAccordion()
})

test('fails when there are no buttons', async () => {
  render(
    <Accordion data-testid="accordion">
      <AccordionItem>
        <div>Section 1 title</div>
        <AccordionPanel>Panel 1</AccordionPanel>
      </AccordionItem>
    </Accordion>,
  )

  await expect(screen.getByTestId('accordion')).not.toBeAccessibleAccordion()
})

test('fails when the button is not wrapped in a heading', async () => {
  render(
    <Accordion data-testid="accordion">
      <AccordionItem>
        <AccordionButton>Section 1 title</AccordionButton>
        <AccordionPanel>Panel 1</AccordionPanel>
      </AccordionItem>
    </Accordion>,
  )

  await expect(screen.getByTestId('accordion')).not.toBeAccessibleAccordion()
})

test('fails when the button does not have aria-controls', async () => {
  render(
    <Accordion data-testid="accordion">
      <AccordionItem>
        <h2>
          <button>Section 1 title</button>
        </h2>
        <AccordionPanel>Panel 1</AccordionPanel>
      </AccordionItem>
    </Accordion>,
  )

  await expect(screen.getByTestId('accordion')).not.toBeAccessibleAccordion()
})
