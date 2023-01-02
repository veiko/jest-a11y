import { render, screen } from '@testing-library/react'
import React from 'react'
import { toBeAccessibleLink } from '../to-be-accessible-link'

describe('toBeAccessibleLink', () => {
  it('passes when element is valid', async () => {
    render(<a href="https://ww.google.com">hello world</a>)

    expect(screen.getByRole('link')).toBeAccessibleLink()
  })

  it('fails if the element does not have a role of link', () => {
    render(<div data-testid="a-link">hello world</div>)

    const link = screen.getByTestId('a-link', { suggest: false })
    expect(toBeAccessibleLink(link)).toFailWith('element has role link')
  })

  it('fails if the element does not activate on {enter}', () => {
    render(<div data-testid="a-link">hello world</div>)

    const link = screen.getByTestId('a-link', { suggest: false })
    expect(toBeAccessibleLink(link)).toFailWith('element has role link')
  })
})
