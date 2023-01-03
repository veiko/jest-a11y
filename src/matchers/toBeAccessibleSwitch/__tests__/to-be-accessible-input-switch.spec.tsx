import { render, screen } from '@testing-library/react'
import React from 'react'
import { toBeAccessibleInputSwitch } from '../to-be-accessible-input-switch'
import { InputSwitch } from '../examples/InputSwitch'
import { LabelChangeInputSwitch } from '../examples/LabelChangeInputSwitch'

describe('toBeAccessibleInputSwitch', () => {
  it('passes when element is valid', async () => {
    render(<InputSwitch />)

    await expect(screen.getByRole('switch')).toBeAccessibleInputSwitch()
  })

  it('fails if the element does not have a role of switch', async () => {
    render(<input data-testid="an-switch" type="checkbox" />)

    const inputSwitch = screen.getByTestId('an-switch', { suggest: false })
    expect(await toBeAccessibleInputSwitch(inputSwitch)).toFailWith('element has role switch')
  })

  it('fails if the element does not have an accessible label', async () => {
    render(<input data-testid="an-switch" role="switch" type="checkbox" />)

    const inputSwitch = screen.getByTestId('an-switch', { suggest: false })
    expect(await toBeAccessibleInputSwitch(inputSwitch)).toFailWith('element has accessible label')
  })

  it('fails if the element does not toggle checked on space', async () => {
    render(
      <input
        aria-label="My Switch"
        data-testid="an-switch"
        onChange={(e: React.ChangeEvent) => e.preventDefault()}
        role="switch"
        type="checkbox"
      />,
    )

    const inputSwitch = screen.getByTestId('an-switch', { suggest: false })
    expect(await toBeAccessibleInputSwitch(inputSwitch)).toFailWith(
      'element toggles checked on {space}',
    )
  })

  it('fails if the element label changes when the state changes', async () => {
    render(<LabelChangeInputSwitch />)

    const inputSwitch = screen.getByTestId('an-switch', { suggest: false })
    expect(await toBeAccessibleInputSwitch(inputSwitch)).toFailWith(
      'element label does not change when state changes',
    )
  })
})
