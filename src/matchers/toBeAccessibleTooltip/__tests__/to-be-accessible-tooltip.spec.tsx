import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import { toBeAccessibleTooltip } from '../to-be-accessible-tooltip'
import { Tooltip } from '../examples/Tooltip'

describe('toBeAccessibleTooltip', () => {
  afterEach(() => cleanup())
  it('passes when element is valid', async () => {
    render(<Tooltip />)

    await expect(screen.getByText(/hover me/i)).toBeAccessibleTooltip()
  })

  it('fails if the element does not have a role of tooltip', async () => {
    render(
      <>
        <button aria-describedby="tooltip-text" data-testid="a-trigger" tabIndex={0}>
          hover me 2
        </button>
        <div id="tooltip-text" data-testid="a-tooltip">
          hello world
        </div>
      </>,
    )

    const tooltip = screen.getByRole('button')
    expect(await toBeAccessibleTooltip(tooltip)).toFailWith('tooltip element has role tooltip')
  })

  it('fails if the trigger element does not have aria-describedby', async () => {
    render(
      <>
        <button>hover me 3</button>
        <div id="tooltip-text" role="tooltip">
          hello world
        </div>
      </>,
    )

    const trigger = screen.getByRole('button')
    expect(await toBeAccessibleTooltip(trigger)).toFailWith(
      'trigger element does not have aria-describedby set to a valid id',
    )
  })

  it('fails if the trigger element does not have valid aria-describedby', async () => {
    render(
      <>
        <button aria-describedby="tooltip-text">hover me 4</button>
        <div id="tooltip-text2" role="tooltip">
          hello world
        </div>
      </>,
    )

    const trigger = screen.getByRole('button')
    expect(await toBeAccessibleTooltip(trigger)).toFailWith(
      'trigger element does not have aria-describedby set to a valid id',
    )
  })

  it('fails if the tooltip does not appear on focus', async () => {
    render(
      <>
        <div aria-describedby="tooltip-text" data-testid="a-trigger">
          hover me 5
        </div>
        <div aria-hidden="true" id="tooltip-text" data-testid="a-tooltip" role="tooltip">
          hello world
        </div>
      </>,
    )

    const tooltip = screen.getByText(/hover me 5/i)
    expect(await toBeAccessibleTooltip(tooltip)).toFailWith(
      'tooltip element has aria-hidden attribute set to true',
    )
  })

  it('fails if the escape key does not hide the tooltip', async () => {
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
    expect(await toBeAccessibleTooltip(tooltip)).toFailWith('tooltip element is hidden on {Escape}')
  })
})
