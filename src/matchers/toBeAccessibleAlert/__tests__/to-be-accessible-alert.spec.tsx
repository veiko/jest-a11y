import { render, screen } from '@testing-library/react'
import React from 'react'
import { toBeAccessibleAlert } from '../to-be-accessible-alert'

describe('toBeAccessibleAlert', () => {
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

    const alert = screen.getByTestId('an-alert', { suggest: false })
    expect(toBeAccessibleAlert(alert)).toFailWith('element has role alert')
  })
})
