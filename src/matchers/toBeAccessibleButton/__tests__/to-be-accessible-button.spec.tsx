import { render, screen } from '@testing-library/react'
import React from 'react'
import { toBeAccessibleButton } from '../to-be-accessible-button'

const unitFunc = (s: any) => s

class MockExpect {
  isNot: boolean = false
  toBeAccessibleButton: any = toBeAccessibleButton
  utils: any = {
    EXPECTED_COLOR: unitFunc,
    printExpected: unitFunc,
    printReceived: unitFunc,
    RECEIVED_COLOR: unitFunc,
  }
}

describe('toBeAccessibleButton', () => {
  let mockExpect: MockExpect
  beforeEach(() => {
    mockExpect = new MockExpect()
  })

  it('checks element has correct role', async () => {
    render(<button>click me</button>)

    expect(screen.getByRole('button')).toBeAccessibleButton()
  })

  it('fails if the element does not have a role of button', () => {
    render(<div data-testid="a-button">click me</div>)

    const returnValue = mockExpect.toBeAccessibleButton(
      screen.getByTestId('a-button', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('Element did not have correct role')
  })

  it('fails if the element does not have an accessible label', () => {
    render(<button />)

    const returnValue = mockExpect.toBeAccessibleButton(screen.getByRole('button'))
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('Element did not have accessible label')
  })

  it('fails if the element does not focus on tab', () => {
    render(<button disabled>text</button>)

    const returnValue = mockExpect.toBeAccessibleButton(screen.getByRole('button'))
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('element can be reached with Tab')
  })

  // TODO: How to test this and with {enter}?
  it.skip('fails if the element does not activate on {space}', () => {
    render(<button>text</button>)

    const returnValue = mockExpect.toBeAccessibleButton(screen.getByRole('button'))
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('element can be reached with Tab')
  })
})
