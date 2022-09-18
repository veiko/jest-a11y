import { render, screen } from '@testing-library/react'
import React from 'react'
import { toBeAccessibleCheckbox } from '../to-be-accessible-checkbox'

const unitFunc = (s: any) => s

class MockExpect {
  isNot: boolean = false
  toBeAccessibleCheckbox: any = toBeAccessibleCheckbox
  utils: any = {
    EXPECTED_COLOR: unitFunc,
    printExpected: unitFunc,
    printReceived: unitFunc,
    RECEIVED_COLOR: unitFunc,
  }
}

describe('toBeAccessibleCheckbox', () => {
  let mockExpect: MockExpect
  beforeEach(() => {
    mockExpect = new MockExpect()
  })

  it('passes when element is valid', async () => {
    render(<input aria-label="My Checkbox" type="checkbox" />)

    expect(screen.getByRole('checkbox')).toBeAccessibleCheckbox()
  })

  it('fails if the element does not have a role of checkbox', () => {
    render(<input data-testid="an-element" />)

    const returnValue = mockExpect.toBeAccessibleCheckbox(
      screen.getByTestId('an-element', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('Element did not have correct role')
  })

  it('fails if the element does not have an accessible label', () => {
    render(<input type="checkbox" />)

    const returnValue = mockExpect.toBeAccessibleCheckbox(screen.getByRole('checkbox'))
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('Element did not have accessible label')
  })

  it('fails if the element does not focus on tab', () => {
    render(<input aria-label="My Checkbox" disabled type="checkbox" />)

    const returnValue = mockExpect.toBeAccessibleCheckbox(screen.getByRole('checkbox'))
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('element can be reached with Tab')
  })

  // TODO: How to test this and with {enter}?
  it.skip('fails if the element does not activate on {space}', () => {
    render(<button>text</button>)

    const returnValue = mockExpect.toBeAccessibleCheckbox(screen.getByRole('button'))
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('element can be reached with Tab')
  })
})
