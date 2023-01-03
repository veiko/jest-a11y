import { render, screen } from '@testing-library/react'
import React from 'react'
import { toBeAccessibleDialog } from '../to-be-accessible-dialog'
import { DialogExample } from '../examples/DialogValidExample'

describe('toBeAccessibleDialog', () => {
  it('passes when element is valid', async () => {
    render(<DialogExample />)

    await expect(screen.getByRole('dialog')).toBeAccessibleDialog()
  })

  it('fails if the element does not have a role of dialog', async () => {
    render(<div data-testid="a-modal">hello world</div>)

    const modal = screen.getByText(/hello world/i)
    expect(await toBeAccessibleDialog(modal)).toFailWith('element has role dialog')
  })

  it('fails if the element does not have aria-modal="true"', async () => {
    render(
      <div data-testid="a-modal" role="dialog">
        hello world
      </div>,
    )

    const modal = screen.getByRole('dialog')
    expect(await toBeAccessibleDialog(modal)).toFailWith('element has attribute aria-modal')
  })

  it('fails if the element does not have an accessible label', async () => {
    render(<div role="dialog" />)

    const modal = screen.getByRole('dialog')
    expect(await toBeAccessibleDialog(modal)).toFailWith('element has accessible label')
  })

  it('fails if the element does not create a focus trap', async () => {
    render(
      <>
        <div aria-modal="true" data-testid="a-modal" role="dialog">
          <button>1</button>
          <button>2</button>
        </div>
        <button>3</button>
      </>,
    )

    const modal = screen.getByRole('dialog')
    expect(await toBeAccessibleDialog(modal)).toFailWith('focus outside of element')
  })
})
