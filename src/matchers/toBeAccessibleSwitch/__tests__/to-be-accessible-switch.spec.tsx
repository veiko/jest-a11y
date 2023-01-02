import { render, screen } from '@testing-library/react'
import React from 'react'
import { printUtil } from 'utils/printUtil'
import { LabelChangeSwitch } from '../examples/LabelChangeSwitch'
import { Switch } from '../examples/Switch'
import { toBeAccessibleSwitch } from '../to-be-accessible-switch'

describe('toBeAccessibleSwitch', () => {
  it('passes when element is valid', async () => {
    render(<Switch />)

    expect(screen.getByTestId('an-switch', { suggest: false })).toBeAccessibleSwitch()
  })

  it('suggests different matcher if the element is an <input type="checkbox" />', () => {
    render(<input data-testid="an-switch" />)

    const switchEl = screen.getByTestId('an-switch', { suggest: false })
    const result = toBeAccessibleSwitch(switchEl)
    // Can not use toFailWith here because it will test for the ✕
    expect(result.pass).toBe(false)
    expect(result.message()).toContain(
      'A better matcher is available, try toBeAccessibleInputSwitch()',
    )
  })

  it('fails if the element does not have a role of switch', () => {
    render(<div data-testid="an-switch">hello world</div>)

    const switchEl = screen.getByTestId('an-switch', { suggest: false })
    expect(toBeAccessibleSwitch(switchEl)).toFailWith('element has role switch')
  })

  it('fails if the element does not have an accessible label', () => {
    render(<div data-testid="an-switch" role="switch" />)

    const switchEl = screen.getByTestId('an-switch', { suggest: false })
    expect(toBeAccessibleSwitch(switchEl)).toFailWith('element has accessible label')
  })

  it('fails if the element does not have aria-checked attribute', () => {
    render(<div aria-label="My Switch" data-testid="an-switch" role="switch" />)

    const switchEl = screen.getByTestId('an-switch', { suggest: false })
    expect(toBeAccessibleSwitch(switchEl)).toFailWith('element has attribute aria-checked')
  })

  it('fails if the value of aria-checked does not toggle on {space}', () => {
    render(
      <div aria-checked="false" aria-label="My Switch" data-testid="an-switch" role="switch" />,
    )

    const switchEl = screen.getByTestId('an-switch', { suggest: false })
    expect(toBeAccessibleSwitch(switchEl)).toFailWith('element toggles aria-checked on {space}')
  })

  it('fails if the label changes when the state changes', () => {
    render(<LabelChangeSwitch />)

    const switchEl = screen.getByTestId('an-switch', { suggest: false })
    expect(toBeAccessibleSwitch(switchEl)).toFailWith(
      'element label does not change when state changes',
    )
  })
})
