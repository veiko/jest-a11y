import { render, screen } from '@testing-library/react'
import React from 'react'
import { toBeAccessibleToolbar } from '../to-be-accessible-toolbar'
import { mockUtils } from '../../../utils/mockUtils'
import { Toolbar } from '../examples/Toolbar'

class MockExpect {
  isNot: boolean = false
  toBeAccessibleToolbar: any = toBeAccessibleToolbar
  utils: any = mockUtils
}

describe('toBeAccessibleToolbar', () => {
  let mockExpect: MockExpect
  beforeEach(() => {
    mockExpect = new MockExpect()
  })

  it('passes when element is valid', async () => {
    render(<Toolbar />)

    expect(screen.getByRole('toolbar')).toBeAccessibleToolbar()
  })

  it('fails if the element does not have a role of toolbar', () => {
    render(
      <div data-testid="an-toolbar">
        <button>hello</button>
        <button>world</button>
      </div>,
    )

    const returnValue = mockExpect.toBeAccessibleToolbar(
      screen.getByTestId('an-toolbar', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('✕ element has role toolbar')
  })

  it('fails if the element does not have an accessible label', () => {
    render(
      <div data-testid="an-toolbar" role="toolbar">
        <button>hello</button>
        <button>world</button>
      </div>,
    )

    const returnValue = mockExpect.toBeAccessibleToolbar(
      screen.getByTestId('an-toolbar', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('✕ element has accessible label')
  })

  it('fails if the element does not navigate to the first control on {home}', () => {
    render(
      <div
        aria-label="a toolbar"
        data-testid="an-toolbar"
        onKeyDown={e => e.key === 'ArrowRight' && document.getElementById('btn-2')?.focus()}
        role="toolbar"
      >
        <button>hello</button>
        <button id="btn-2">world</button>
      </div>,
    )

    const returnValue = mockExpect.toBeAccessibleToolbar(
      screen.getByTestId('an-toolbar', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('✕ element navigates to first control on {home}')
  })

  it('fails if the element does not navigate to the last control on {end}', () => {
    render(
      <div
        aria-label="a toolbar"
        data-testid="an-toolbar"
        onKeyDown={e => {
          if (e.key === 'ArrowRight') {
            document.getElementById('btn-2')?.focus()
          } else if (e.key === 'Home') {
            document.getElementById('btn-1')?.focus()
          }
        }}
        role="toolbar"
      >
        <button>hello</button>
        <button>world</button>
      </div>,
    )

    const returnValue = mockExpect.toBeAccessibleToolbar(
      screen.getByTestId('an-toolbar', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('✕ element navigates to last control on {end}')
  })
})
