import { render, screen } from '@testing-library/react'
import * as React from 'react'

describe('toBeAccessibleButton', () => {
  it('checks element has correct role', () => {
    render(<button />)

    expect(screen.getByRole('button')).toBeAccessibleButton()
  })
})
