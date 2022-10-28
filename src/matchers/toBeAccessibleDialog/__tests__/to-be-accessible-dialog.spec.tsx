import { render, screen } from '@testing-library/react'
import React from 'react'
import { toBeAccessibleDialog } from '../to-be-accessible-dialog'
import { DialogExample } from '../examples/DialogValidExample'
import { mockUtils } from '../../../utils/mockUtils'
import { getAllFocusableElements } from '../../../utils/getAllFocusableElements'

class MockExpect {
  isNot: boolean = false
  toBeAccessibleDialog: any = toBeAccessibleDialog
  utils: any = mockUtils
}

describe('toBeAccessibleDialog', () => {
  let mockExpect: MockExpect
  beforeEach(() => {
    mockExpect = new MockExpect()
  })

  it('passes when element is valid', async () => {
    render(<DialogExample />)

    expect(screen.getByRole('dialog')).toBeAccessibleDialog()
  })

  it('fails if the element does not have a role of dialog', () => {
    render(<div data-testid="a-modal">hello world</div>)

    const returnValue = mockExpect.toBeAccessibleDialog(
      screen.getByTestId('a-modal', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('✕ element has role dialog')
  })

  it('fails if the element does not have an accessible label', () => {
    render(<div role="dialog" />)

    const returnValue = mockExpect.toBeAccessibleDialog(screen.getByRole('dialog'))
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('✕ element has accessible label')
  })

  // TODO: How to test focus functionality?
  xit('fails if the element does not focus on tab', () => {
    render(<button disabled>text</button>)

    const returnValue = mockExpect.toBeAccessibleDialog(screen.getByRole('dialog'))
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('element can be reached with Tab')
  })
})
