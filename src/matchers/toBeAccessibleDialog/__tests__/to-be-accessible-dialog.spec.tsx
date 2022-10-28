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

  it('fails if the element does not have aria-modal="true"', () => {
    render(
      <div data-testid="a-modal" role="dialog">
        hello world
      </div>,
    )

    const returnValue = mockExpect.toBeAccessibleDialog(
      screen.getByTestId('a-modal', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('✕ element has attribute aria-modal')
  })

  it('fails if the element does not have an accessible label', () => {
    render(<div role="dialog" />)

    const returnValue = mockExpect.toBeAccessibleDialog(screen.getByRole('dialog'))
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('✕ element has accessible label')
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

    const returnValue = mockExpect.toBeAccessibleDialog(screen.getByRole('dialog'))
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('✕ focus outside of element')
  })
})
