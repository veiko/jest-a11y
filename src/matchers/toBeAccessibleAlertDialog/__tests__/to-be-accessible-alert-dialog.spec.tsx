import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { AlertDialog } from '../examples/AlertDialog'
import { toBeAccessibleAlertDialog } from '../to-be-accessible-alert-dialog'

describe('toBeAccessibleAlertDialog', () => {
  it('passes when element is valid', async () => {
    render(<AlertDialog />)
    await userEvent.click(screen.getByRole('button', { name: /launch/i }))

    await expect(screen.getByRole('alertdialog')).toBeAccessibleAlertDialog()
  })

  it('fails if the element does not have a role of alertdialog', async () => {
    render(<div data-testid="a-modal">hello world</div>)

    const dialog = screen.getByText('hello world')
    expect(await toBeAccessibleAlertDialog(dialog)).toFailWith('element has role alertdialog')
  })

  it('fails if the element does not have an accessible label', async () => {
    render(<div role="alertdialog" />)

    const dialog = screen.getByRole('alertdialog')
    expect(await toBeAccessibleAlertDialog(dialog)).toFailWith('element has accessible label')
  })
})
