import { render, screen } from '@testing-library/react'
import React from 'react'
import { toBeAccessibleMeter } from '../to-be-accessible-meter'
import { mockUtils } from '../../../utils/mockUtils'

class MockExpect {
  isNot: boolean = false
  toBeAccessibleMeter: any = toBeAccessibleMeter
  utils: any = mockUtils
}

describe('toBeAccessibleMeter', () => {
  let mockExpect: MockExpect
  beforeEach(() => {
    mockExpect = new MockExpect()
  })

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

    const returnValue = mockExpect.toBeAccessibleMeter(
      screen.getByTestId('an-meter', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('✕ element has role meter')
  })

  it('fails if the element does not have an accessible label', () => {
    render(<div aria-label="progress" data-testid="an-meter" />)

    const returnValue = mockExpect.toBeAccessibleMeter(
      screen.getByTestId('an-meter', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('✕ element has role meter')
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

    const returnValue = mockExpect.toBeAccessibleMeter(
      screen.getByTestId('an-meter', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain(
      '✕ element has aria-valuemin set to a decimal number less than aria-valuemax',
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

    const returnValue = mockExpect.toBeAccessibleMeter(
      screen.getByTestId('an-meter', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain(
      '✕ element has aria-valuemin set to a decimal number less than aria-valuemax',
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

    const returnValue = mockExpect.toBeAccessibleMeter(
      screen.getByTestId('an-meter', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain(
      '✕ element has aria-valuemin set to a decimal number less than aria-valuemax',
    )
    // it is valid to not have an aria-valuenow
    expect(returnValue.message()).toContain('✓ element has valid aria-valuenow')
  })
})
