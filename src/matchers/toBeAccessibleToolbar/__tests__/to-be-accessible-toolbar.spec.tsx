import { render, screen } from '@testing-library/react'
import React from 'react'
import { toBeAccessibleToolbar } from '../to-be-accessible-toolbar'
import { Toolbar } from '../examples/Toolbar'

describe('toBeAccessibleToolbar', () => {
  it('passes when element is valid', async () => {
    render(<Toolbar />)

    await expect(screen.getByRole('toolbar')).toBeAccessibleToolbar()
  })

  it('fails if the element does not have a role of toolbar', async () => {
    render(
      <div data-testid="an-toolbar">
        <button>hello</button>
        <button>world</button>
      </div>,
    )

    const toolbar = screen.getByTestId('an-toolbar', { suggest: false })
    expect(await toBeAccessibleToolbar(toolbar)).toFailWith('element has role toolbar')
  })

  it('fails if the element does not have an accessible label', async () => {
    render(
      <div data-testid="an-toolbar" role="toolbar">
        <button>hello</button>
        <button>world</button>
      </div>,
    )

    const toolbar = screen.getByTestId('an-toolbar', { suggest: false })
    expect(await toBeAccessibleToolbar(toolbar)).toFailWith('element has accessible label')
  })

  it('fails if the element does not navigate to the first control on {home}', async () => {
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

    const toolbar = screen.getByTestId('an-toolbar', { suggest: false })
    expect(await toBeAccessibleToolbar(toolbar)).toFailWith(
      'element navigates to first control on {home}',
    )
  })

  it('fails if the element does not navigate to the last control on {end}', async () => {
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

    const toolbar = screen.getByTestId('an-toolbar', { suggest: false })
    expect(await toBeAccessibleToolbar(toolbar)).toFailWith(
      'element navigates to last control on {end}',
    )
  })
})
