import { render, screen } from '@testing-library/react'
import React from 'react'
import { toBeAccessibleMeter } from '../to-be-accessible-meter'
import { stripAnsi } from '../../../utils/testUtils'

describe('toBeAccessibleMeter', () => {
  it('passes when element is valid', async () => {
    render(
      <div
        aria-label="progress"
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={50}
        data-testid="an-meter"
        role="meter"
      />,
    )

    expect(screen.getByRole('meter')).toBeAccessibleMeter()
  })

  it('passes without aria-valuenow (indeterminate state)', async () => {
    render(
      <div
        aria-label="progress"
        aria-valuemax={100}
        aria-valuemin={0}
        data-testid="an-meter"
        role="meter"
      />,
    )

    expect(screen.getByRole('meter')).toBeAccessibleMeter()
  })

  it('fails if the element does not have a role of meter', () => {
    render(<div aria-label="progress" data-testid="an-meter" />)

    const meter = screen.getByTestId('an-meter', { suggest: false })
    expect(toBeAccessibleMeter(meter)).toFailWith('element has role meter')
  })

  it('fails if the element does not have an accessible label', () => {
    render(<div data-testid="an-meter" role="meter" />)

    const meter = screen.getByTestId('an-meter', { suggest: false })
    expect(toBeAccessibleMeter(meter)).toFailWith('element has accessible label')
  })

  it('fails if the element does not have aria-valuemax attribute', () => {
    render(
      <div
        aria-label="progress"
        data-testid="an-meter"
        aria-valuemax={0}
        aria-valuenow={0}
        role="meter"
      />,
    )

    const meter = screen.getByTestId('an-meter', { suggest: false })
    expect(toBeAccessibleMeter(meter)).toFailWith(
      'element has aria-valuemin set to a decimal number less than aria-valuemax',
    )
  })

  it('fails if the element does not have aria-valuemin attribute', () => {
    render(
      <div
        aria-label="progress"
        data-testid="an-meter"
        aria-valuemin={0}
        aria-valuenow={0}
        role="meter"
      />,
    )

    const meter = screen.getByTestId('an-meter', { suggest: false })
    expect(toBeAccessibleMeter(meter)).toFailWith(
      'element has aria-valuemin set to a decimal number less than aria-valuemax',
    )
  })

  it('fails if aria-valuemin is less than aria-valuemax', () => {
    render(
      <div
        aria-label="progress"
        aria-valuemax={0}
        aria-valuemin={1}
        data-testid="an-meter"
        role="meter"
      />,
    )

    const returnValue = toBeAccessibleMeter(screen.getByTestId('an-meter', { suggest: false }))
    expect(returnValue).toFailWith(
      'element has aria-valuemin set to a decimal number less than aria-valuemax',
    )
    // it is valid to not have an aria-valuenow
    expect(stripAnsi(returnValue.message())).toContain('✓ element has valid aria-valuenow')
  })
})
