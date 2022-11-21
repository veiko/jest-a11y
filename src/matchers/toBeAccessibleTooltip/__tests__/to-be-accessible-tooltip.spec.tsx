import { render, screen } from '@testing-library/react'
import React from 'react'
import { toBeAccessibleTooltip } from '../to-be-accessible-tooltip'
import { mockUtils } from '../../../utils/mockUtils'
import { Tooltip } from '../examples/Tooltip'

class MockExpect {
  isNot: boolean = false
  toBeAccessibleTooltip: any = toBeAccessibleTooltip
  utils: any = mockUtils
}

describe('toBeAccessibleTooltip', () => {
  let mockExpect: MockExpect
  beforeEach(() => {
    mockExpect = new MockExpect()
  })

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

    const returnValue = mockExpect.toBeAccessibleTooltip(screen.getByText(/hover me/i))
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('✕ tooltip element has role tooltip')
  })

  it('fails if the trigger element does not have a description', () => {
    render(
      <>
        <div>hover me</div>
        <div id="tooltip-text" role="tooltip">
          hello world
        </div>
      </>,
    )

    const returnValue = mockExpect.toBeAccessibleTooltip(screen.getByText(/hover me/i))
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('✕ trigger element has attribute aria-describedby')
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

    const returnValue = mockExpect.toBeAccessibleTooltip(screen.getByText(/hover me/i))
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain(
      '✕ tooltip element has aria-hidden attribute set to true',
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

    const returnValue = mockExpect.toBeAccessibleTooltip(screen.getByText(/hover me/i))
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('✕ tooltip element is hidden on {esc}')
  })
})
