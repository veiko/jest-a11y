import { render, screen } from '@testing-library/react'
import React from 'react'
import { Accordion } from '../examples/Accordion'
import { toBeAccessibleAccordion } from '../to-be-accessible-accordion'
import { closest } from '../../../utils/closest'

const unitFunc = (s: any) => s

class MockExpect {
  isNot: boolean = false
  toBeAccessibleAccordion: any = toBeAccessibleAccordion
  utils: any = {
    BOLD_WEIGHT: unitFunc,
    DIM_COLOR: unitFunc,
    EXPECTED_COLOR: unitFunc,
    INVERTED_COLOR: unitFunc,
    printExpected: unitFunc,
    printReceived: unitFunc,
    RECEIVED_COLOR: unitFunc,
  }
}

describe('toBeAccessibleAccordion', () => {
  let mockExpect: MockExpect
  beforeEach(() => {
    mockExpect = new MockExpect()
  })

  it('passes when element is valid', () => {
    render(<Accordion id="accordionGroup" />)

    expect(screen.getByTestId('accordionGroup')).toBeAccessibleAccordion()
  })

  it('fails if there are no elements with role="button"', async () => {
    render(<div data-testid="accordionGroup">hello world</div>)

    const returnValue = await mockExpect.toBeAccessibleAccordion(
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

    const returnValue = await mockExpect.toBeAccessibleAccordion(
      screen.getByTestId('accordionGroup', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('element is wrapped in an element with role heading')
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

    const returnValue = await mockExpect.toBeAccessibleAccordion(
      screen.getByTestId('accordionGroup', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('has attribute aria-controls')
  })
})
