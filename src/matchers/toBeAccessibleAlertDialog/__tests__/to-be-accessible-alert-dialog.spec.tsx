import { render, screen } from '@testing-library/react'
import React from 'react'
import { toBeAccessibleAlertDialog } from '../to-be-accessible-alert-dialog'
import { mockUtils } from '../../../utils/mockUtils'

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
    render(
      <div aria-label="label" role="alertdialog">
        <button>close</button>
        <button>ok</button>
      </div>,
    )

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
