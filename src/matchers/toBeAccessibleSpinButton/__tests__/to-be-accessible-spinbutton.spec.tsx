import { render, screen } from '@testing-library/react'
import { SpinButton } from 'matchers/toBeAccessibleSpinButton/examples/SpinButton'
import { toBeAccessibleSpinButton } from 'matchers/toBeAccessibleSpinButton/to-be-accessible-spinbutton'
import React from 'react'
import { mockUtils } from 'utils/mockUtils'

class MockExpect {
  isNot: boolean = false
  toBeAccessibleSpinButton: (this: any, element: HTMLElement) => jest.CustomMatcherResult =
    toBeAccessibleSpinButton
  utils: any = mockUtils
}

describe('toBeAccessibleSpinButton', () => {
  let mockExpect: MockExpect
  beforeEach(() => {
    mockExpect = new MockExpect()
  })

  it('passes when element is valid', async () => {
    render(<SpinButton />)

    expect(screen.getByRole('spinbutton')).toBeAccessibleSpinButton()
  })

  it('fails if the element does not have a role of spinbutton', () => {
    render(<div data-testid="a-spinbutton">hello world</div>)

    const returnValue = mockExpect.toBeAccessibleSpinButton(
      screen.getByTestId('a-spinbutton', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('✕ element has role spinbutton')
  })

  it('fails if the element does not have an accessible label', () => {
    render(
      <input
        aria-valuemax={10}
        aria-valuemin={0}
        aria-valuenow={5}
        data-testid="a-spinbutton"
        role="spinbutton"
      />,
    )

    const returnValue = mockExpect.toBeAccessibleSpinButton(
      screen.getByTestId('a-spinbutton', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('✕ element has accessible label')
  })

  it('fails if aria-valuemin is not less than aria-valuemax', () => {
    render(
      <input
        aria-label="some number"
        aria-valuemax={10}
        aria-valuemin={10}
        aria-valuenow={5}
        data-testid="a-spinbutton"
        role="spinbutton"
      />,
    )

    const returnValue = mockExpect.toBeAccessibleSpinButton(
      screen.getByTestId('a-spinbutton', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain(
      '✕ element has aria-valuemin set to a decimal number less than aria-valuemax',
    )
  })

  it('fails if aria-valuenow is not valid', () => {
    render(
      <input
        aria-label="some number"
        aria-valuemax={10}
        aria-valuemin={0}
        aria-valuenow={-5}
        data-testid="a-spinbutton"
        role="spinbutton"
      />,
    )

    const returnValue = mockExpect.toBeAccessibleSpinButton(
      screen.getByTestId('a-spinbutton', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('✕ element has valid aria-valuenow')
  })

  it('fails if aria-valuenow does not increase when {arrowup} is pressed', () => {
    render(
      <input
        aria-label="some number"
        aria-valuemax={10}
        aria-valuemin={0}
        aria-valuenow={5}
        data-testid="a-spinbutton"
        role="spinbutton"
      />,
    )

    const returnValue = mockExpect.toBeAccessibleSpinButton(
      screen.getByTestId('a-spinbutton', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain(
      '✕ element increases aria-valuenow when {arrowup} is pressed',
    )
  })

  it('fails if aria-valuenow does not decrease when {arrowdown} is pressed', () => {
    render(
      <input
        aria-label="some number"
        aria-valuemax={10}
        aria-valuemin={0}
        aria-valuenow={5}
        data-testid="a-spinbutton"
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'ArrowUp') e.currentTarget.setAttribute('aria-valuenow', '6')
        }}
        role="spinbutton"
      />,
    )

    const returnValue = mockExpect.toBeAccessibleSpinButton(
      screen.getByTestId('a-spinbutton', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain(
      '✕ element decreases aria-valuenow when {arrowdown} is pressed',
    )
  })
})
