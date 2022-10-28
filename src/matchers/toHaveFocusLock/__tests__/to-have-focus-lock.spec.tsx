import { render, screen } from '@testing-library/react'
import React from 'react'
import { toHaveFocusLock } from '../to-have-focus-lock'
import { mockUtils } from '../../../utils/mockUtils'

class MockExpect {
  isNot: boolean = false
  toHaveFocusLock: any = toHaveFocusLock
  utils: any = mockUtils
}

const MockFocusLock = () => {
  const theRef = React.useRef<HTMLButtonElement>(null)
  const onKeyUp = (e: React.KeyboardEvent) => e.key === 'Tab' && theRef.current?.focus()
  return (
    <div aria-label="Test Dialog" aria-modal="true" role="dialog">
      <button ref={theRef}>cancel</button>
      <button onKeyUp={onKeyUp}>ok</button>
    </div>
  )
}

describe('toHaveFocusLock', () => {
  let mockExpect: MockExpect
  beforeEach(() => {
    mockExpect = new MockExpect()
  })

  it('passes when element is valid', async () => {
    render(<MockFocusLock />)

    expect(screen.getByRole('dialog')).toHaveFocusLock()
  })

  it('fails if the element does not create focus trap', () => {
    render(
      <div data-testid="trap">
        <button>cancel</button>
        <button>ok</button>
      </div>,
    )

    const returnValue = mockExpect.toHaveFocusLock(screen.getByTestId('trap'))
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('✕ focus outside of element')
  })
})
