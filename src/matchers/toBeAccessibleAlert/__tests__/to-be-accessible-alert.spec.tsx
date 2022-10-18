import { render, screen } from '@testing-library/react'
import React from 'react'
import { toBeAccessibleAlert } from '../to-be-accessible-alert'

const unitFunc = (s: any) => s

class MockExpect {
  isNot: boolean = false
  toBeAccessibleAlert: any = toBeAccessibleAlert
  utils: any = {
    EXPECTED_COLOR: unitFunc,
    printExpected: unitFunc,
    printReceived: unitFunc,
    RECEIVED_COLOR: unitFunc,
  }
}

describe('toBeAccessibleAlert', () => {
  let mockExpect: MockExpect
  beforeEach(() => {
    mockExpect = new MockExpect()
  })

  it('passes when element is valid', async () => {
    render(<div role="alert">hello world</div>)

    expect(screen.getByRole('alert')).toBeAccessibleAlert()
  })

  it('fails if the element does not have a role of alert', () => {
    render(<div data-testid="an-alert">hello world</div>)

    const returnValue = mockExpect.toBeAccessibleAlert(
      screen.getByTestId('an-alert', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('✕ element does not have role alert')
  })
})
