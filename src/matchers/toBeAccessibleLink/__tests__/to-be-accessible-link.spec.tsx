import { render, screen } from '@testing-library/react'
import React from 'react'
import { toBeAccessibleLink } from '../to-be-accessible-link'
import { mockUtils } from '../../../utils/mockUtils'

class MockExpect {
  isNot: boolean = false
  toBeAccessibleLink: any = toBeAccessibleLink
  utils: any = mockUtils
}

describe('toBeAccessibleLink', () => {
  let mockExpect: MockExpect
  beforeEach(() => {
    mockExpect = new MockExpect()
  })

  it('passes when element is valid', async () => {
    render(<a href="https://ww.google.com">hello world</a>)

    expect(screen.getByRole('link')).toBeAccessibleLink()
  })

  it('fails if the element does not have a role of link', () => {
    render(<div data-testid="a-link">hello world</div>)

    const returnValue = mockExpect.toBeAccessibleLink(
      screen.getByTestId('a-link', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('✕ element has role link')
  })

  it('fails if the element does not activate on {enter}', () => {
    render(<div data-testid="a-link">hello world</div>)

    const returnValue = mockExpect.toBeAccessibleLink(
      screen.getByTestId('a-link', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('✕ element has role link')
  })
})
