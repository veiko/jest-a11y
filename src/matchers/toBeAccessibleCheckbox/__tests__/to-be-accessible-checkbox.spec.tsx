import { render, screen } from '@testing-library/react'
import React from 'react'
import { toBeAccessibleCheckbox } from '../to-be-accessible-checkbox'
import { mockUtils } from '../../../utils/mockUtils'

class MockExpect {
  isNot: boolean = false
  toBeAccessibleCheckbox: any = toBeAccessibleCheckbox
  utils: any = mockUtils
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
    expect(returnValue.message()).toContain('✕ element has role checkbox')
  })

  it('fails if the element does not have an accessible label', () => {
    render(<input type="checkbox" />)

    const returnValue = mockExpect.toBeAccessibleCheckbox(screen.getByRole('checkbox'))
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('✕ element has accessible label')
  })

  it('fails if the element does not focus on tab', () => {
    render(<input aria-label="My Checkbox" disabled type="checkbox" />)

    const returnValue = mockExpect.toBeAccessibleCheckbox(screen.getByRole('checkbox'))
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('✕ element has focus on {tab}')
  })

  it('fails if the element does not activate on {space}', () => {
    render(<input aria-label="My Checkbox" disabled type="checkbox" />)

    const returnValue = mockExpect.toBeAccessibleCheckbox(screen.getByRole('checkbox'))
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('✕ element activated on')
  })
})
