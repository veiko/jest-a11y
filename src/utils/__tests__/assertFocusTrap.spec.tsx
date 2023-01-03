import { cleanup, render, screen } from '@testing-library/react'
import { default as rtlUserEvent } from '@testing-library/user-event'
import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup'
import React from 'react'
import { assertFocusLock } from 'utils/assertFocusLock'

const idPrefix = 'el'
const firstElementId = 'el-0'
const focusEl = (e: React.KeyboardEvent) => {
  if (e.key === 'Tab') document.getElementById(firstElementId)?.focus()
}
let userEvent: UserEvent

describe('assertFocusLock', () => {
  afterEach(() => cleanup())
  beforeEach(() => {
    userEvent = rtlUserEvent.setup()
  })

  it('passes when focus is trapped', async () => {
    render(
      <>
        <button id="outside-1">should not focus</button>
        <button id="outside-2">should not focus</button>
        <div id="trap">
          <button id={firstElementId}>1</button>
          <button id="el-2" onKeyUp={focusEl}>
            2
          </button>
        </div>
        <button id="outside-3">should not focus</button>
        <button id="outside-4">should not focus</button>
      </>,
    )
    const result = await assertFocusLock({
      element: document.getElementById('trap') as HTMLElement,
      userEvent,
    })

    expect(result.message()).toBe('')
    expect(result.pass).toBe(true)
  })

  // a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])
  it.each(['button', 'input', 'textarea', 'select'])('passes with %s element(s)', async tagName => {
    const items = [0, 1, 2].map((idx: number) =>
      React.createElement(tagName, {
        id: `${idPrefix}-${idx}`,
        key: idx,
        onKeyUp: idx === 2 ? focusEl : undefined,
      }),
    )
    render(<div data-testid="trap">{items}</div>)

    const result = await assertFocusLock({
      element: screen.getByTestId('trap'),
      userEvent,
    })

    expect(result.message()).toBe('')
    expect(result.pass).toBe(true)
  })

  it('fails when focus is not trapped', async () => {
    render(
      <div id="trap">
        <button>1</button>
        <button>2</button>
      </div>,
    )
    const result = await assertFocusLock({
      element: document.getElementById('trap') as HTMLElement,
      userEvent,
    })

    expect(result).toFailWith('focus outside of element')
  })
})
