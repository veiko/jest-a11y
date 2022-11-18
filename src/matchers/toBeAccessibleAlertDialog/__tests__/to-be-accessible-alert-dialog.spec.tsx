import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { mockUtils } from '../../../utils/mockUtils'
import { AlertDialog } from '../examples/AlertDialog'
import { toBeAccessibleAlertDialog } from '../to-be-accessible-alert-dialog'

class MockExpect {
  isNot: boolean = false
  toBeAccessibleAlertDialog: any = toBeAccessibleAlertDialog
  utils: any = mockUtils
}

describe('toBeAccessibleAlertDialog', () => {
  let mockExpect: MockExpect
  beforeEach(() => {
    mockExpect = new MockExpect()
  })

  it('passes when element is valid', async () => {
    render(<AlertDialog />)
    userEvent.click(screen.getByRole('button', { name: /launch/i }))

    expect(screen.getByRole('alertdialog')).toBeAccessibleAlertDialog()
  })

  it('fails if the element does not have a role of alertdialog', () => {
    render(<div data-testid="a-modal">hello world</div>)

    const returnValue = mockExpect.toBeAccessibleAlertDialog(
      screen.getByTestId('a-modal', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('✕ element has role alertdialog')
  })

  it('fails if the element does not have an accessible label', () => {
    render(<div role="alertdialog" />)

    const returnValue = mockExpect.toBeAccessibleAlertDialog(screen.getByRole('alertdialog'))
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('✕ element has accessible label')
  })
})
