import { render, screen } from '@testing-library/react'
import React from 'react'
import { toBeAccessibleCheckbox } from '../to-be-accessible-checkbox'

describe('toBeAccessibleCheckbox', () => {
  it('passes when element is valid', async () => {
    render(<input aria-label="My Checkbox" type="checkbox" />)

    expect(screen.getByRole('checkbox')).toBeAccessibleCheckbox()
  })

  it('fails if the element does not have a role of checkbox', () => {
    render(<input data-testid="an-element" />)

    const checkbox = screen.getByTestId('an-element', { suggest: false })
    expect(toBeAccessibleCheckbox(checkbox)).toFailWith('element has role checkbox')
  })

  it('fails if the element does not have an accessible label', () => {
    render(<input type="checkbox" />)

    const checkbox = screen.getByRole('checkbox')
    expect(toBeAccessibleCheckbox(checkbox)).toFailWith('element has accessible label')
  })

  it('fails if the element does not focus on tab', () => {
    render(<input aria-label="My Checkbox" disabled type="checkbox" />)

    const checkbox = screen.getByRole('checkbox')
    expect(toBeAccessibleCheckbox(checkbox)).toFailWith('element is part of tab sequence')
  })

  it('fails if the element does not activate on {space}', () => {
    render(<input aria-label="My Checkbox" disabled type="checkbox" />)

    const checkbox = screen.getByRole('checkbox')
    expect(toBeAccessibleCheckbox(checkbox)).toFailWith('element activated on')
  })
})
