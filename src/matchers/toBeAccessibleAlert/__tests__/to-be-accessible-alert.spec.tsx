import { render, screen } from '@testing-library/react'
import React from 'react'
import { toBeAccessibleAlert } from '../to-be-accessible-alert'
import { mockUtils } from 'utils/mockUtils'

class MockExpect {
  isNot: boolean = false
  toBeAccessibleAlert: any = toBeAccessibleAlert
  utils: any = mockUtils
}

describe('toBeAccessibleAlert', () => {
  let mockExpect: MockExpect
  beforeEach(() => {
    mockExpect = new MockExpect()
  })

  it('passes when element is valid', async () => {
    render(
      <div data-testid="an-alert" role="alert">
        hello world
      </div>,
    )

    expect(screen.getByRole('alert')).toBeAccessibleAlert()
  })

  it('fails if the element does not have a role of alert', () => {
    render(<div data-testid="an-alert">hello world</div>)

    const returnValue = mockExpect.toBeAccessibleAlert(
      screen.getByTestId('an-alert', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('✕ element has role alert')
  })
})
