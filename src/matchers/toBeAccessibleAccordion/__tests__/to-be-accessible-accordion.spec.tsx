import { render, screen } from '@testing-library/react'
import React from 'react'
import { Accordion } from '../examples/Accordion'
import { toBeAccessibleAccordion } from '../to-be-accessible-accordion'

describe('toBeAccessibleAccordion', () => {
  it('passes when element is valid', async () => {
    render(<Accordion id="accordionGroup" />)

    await expect(screen.getByTestId('accordionGroup')).toBeAccessibleAccordion()
  })

  it('fails if there are no elements with role="button"', async () => {
    render(<div data-testid="accordionGroup">hello world</div>)

    const returnValue = await toBeAccessibleAccordion(
      screen.getByTestId('accordionGroup', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('No elements with role button found')
  })

  it('fails if the button is not wrapped in a heading', async () => {
    const SampleAccordion = () => {
      const [open, setOpen] = React.useState(false)
      return (
        <div data-testid="accordionGroup">
          <button aria-controls="something" aria-expanded={open} onClick={() => setOpen(!open)}>
            click me
          </button>
        </div>
      )
    }
    render(<SampleAccordion />)

    const accordion = screen.getByTestId('accordionGroup', { suggest: false })
    expect(await toBeAccessibleAccordion(accordion)).toFailWith(
      'element is wrapped in an element with role heading',
    )
  })

  it('fails if the button does not have aria-controls', async () => {
    const SampleAccordion = () => {
      const [open, setOpen] = React.useState(false)
      return (
        <div data-testid="accordionGroup">
          <h2>
            <button aria-expanded={open} onClick={() => setOpen(!open)}>
              click me
            </button>
          </h2>
        </div>
      )
    }
    render(<SampleAccordion />)

    const returnValue = await toBeAccessibleAccordion(
      screen.getByTestId('accordionGroup', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    // FIXME: The ✕ seems to not be able to be captured in the string
    // We risk having this return a false positive without the ✕
    expect(returnValue.message()).toContain('element has attribute aria-controls')
  })

  it('fails if the button does not toggle aria-expanded', async () => {
    const SampleAccordion = () => (
      <div data-testid="accordionGroup">
        <h2>
          <button aria-controls="one">click me</button>
        </h2>
      </div>
    )
    render(<SampleAccordion />)

    const returnValue = await toBeAccessibleAccordion(
      screen.getByTestId('accordionGroup', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    // FIXME: The ✕ seems to not be able to be captured in the string
    // We risk having this return a false positive without the ✕
    expect(returnValue.message()).toContain('aria-expanded toggled on Enter')
  })
})
