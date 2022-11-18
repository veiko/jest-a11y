import { render, screen } from '@testing-library/react'
import React from 'react'
import { toBeAccessibleInputSwitch } from '../to-be-accessible-input-switch'
import { mockUtils } from '../../../utils/mockUtils'
import { InputSwitch } from '../examples/InputSwitch'
import { LabelChangeInputSwitch } from '../examples/LabelChangeInputSwitch'

class MockExpect {
  isNot: boolean = false
  toBeAccessibleInputSwitch: any = toBeAccessibleInputSwitch
  utils: any = mockUtils
}

describe('toBeAccessibleInputSwitch', () => {
  let mockExpect: MockExpect
  beforeEach(() => {
    mockExpect = new MockExpect()
  })

  it('passes when element is valid', async () => {
    render(<InputSwitch />)

    expect(screen.getByRole('switch')).toBeAccessibleInputSwitch()
  })

  it('fails if the element does not have a role of switch', () => {
    render(<input data-testid="an-switch" type="checkbox" />)

    const returnValue = mockExpect.toBeAccessibleInputSwitch(
      screen.getByTestId('an-switch', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('✕ element has role switch')
  })

  it('fails if the element does not have an accessible label', () => {
    render(<input data-testid="an-switch" role="switch" type="checkbox" />)

    const returnValue = mockExpect.toBeAccessibleInputSwitch(
      screen.getByTestId('an-switch', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('✕ element has accessible label')
  })

  it('fails if the element does not toggle checked on space', () => {
    render(
      <input
        aria-label="My Switch"
        data-testid="an-switch"
        onChange={(e: React.ChangeEvent) => e.preventDefault()}
        role="switch"
        type="checkbox"
      />,
    )

    const returnValue = mockExpect.toBeAccessibleInputSwitch(
      screen.getByTestId('an-switch', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('✕ element toggles checked on {space}')
  })

  it('fails if the element label changes when the state changes', () => {
    render(<LabelChangeInputSwitch />)

    const returnValue = mockExpect.toBeAccessibleInputSwitch(
      screen.getByTestId('an-switch', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('✕ element label does not change when state changes')
  })
})
