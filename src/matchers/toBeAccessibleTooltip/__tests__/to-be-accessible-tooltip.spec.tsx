import { render, screen } from '@testing-library/react'
import React from 'react'
import { toBeAccessibleTooltip } from '../to-be-accessible-tooltip'
import { Tooltip } from '../examples/Tooltip'

describe('toBeAccessibleTooltip', () => {
  it('passes when element is valid', async () => {
    render(<Tooltip />)

    expect(screen.getByText(/hover me/i)).toBeAccessibleTooltip()
  })

  it('fails if the element does not have a role of tooltip', () => {
    render(
      <>
        <div aria-describedby="tooltip-text" data-testid="a-trigger" tabIndex={0}>
          hover me
        </div>
        <div id="tooltip-text" data-testid="a-tooltip">
          hello world
        </div>
      </>,
    )

    const tooltip = screen.getByText(/hover me/i)
    expect(toBeAccessibleTooltip(tooltip)).toFailWith('tooltip element has role tooltip')
  })

  it('fails if the trigger element does not have aria-describedby', () => {
    render(
      <>
        <button>hover me</button>
        <div id="tooltip-text" role="tooltip">
          hello world
        </div>
      </>,
    )

    const trigger = screen.getByRole('button')
    expect(toBeAccessibleTooltip(trigger)).toFailWith(
      'trigger element does not have aria-describedby set to a valid id',
    )
  })

  it('fails if the trigger element does not have valid aria-describedby', () => {
    render(
      <>
        <button aria-describedby="tooltip-text">hover me</button>
        <div id="tooltip-text2" role="tooltip">
          hello world
        </div>
      </>,
    )

    const trigger = screen.getByRole('button')
    expect(toBeAccessibleTooltip(trigger)).toFailWith(
      'trigger element does not have aria-describedby set to a valid id',
    )
  })

  it('fails if the tooltip does not appear on focus', () => {
    render(
      <>
        <div aria-describedby="tooltip-text" data-testid="a-trigger">
          hover me
        </div>
        <div aria-hidden="true" id="tooltip-text" data-testid="a-tooltip" role="tooltip">
          hello world
        </div>
      </>,
    )

    const tooltip = screen.getByText(/hover me/i)
    expect(toBeAccessibleTooltip(tooltip)).toFailWith(
      'tooltip element has aria-hidden attribute set to true',
    )
  })

  it('fails if the escape key does not hide the tooltip', () => {
    render(
      <>
        <div aria-describedby="tooltip-text" data-testid="a-trigger">
          hover me
        </div>
        <div id="tooltip-text" data-testid="a-tooltip" role="tooltip">
          hello world
        </div>
      </>,
    )

    const tooltip = screen.getByText(/hover me/i)
    expect(toBeAccessibleTooltip(tooltip)).toFailWith('tooltip element is hidden on {esc}')
  })
})
