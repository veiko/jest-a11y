import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import { assertFocusLock } from '../../utils/assertFocusLock'
import { mockUtils } from '../../utils/mockUtils'

const idPrefix = 'el'
const firstElementId = 'el-0'
const focusEl = (e: React.KeyboardEvent) => {
  if (e.key === 'Tab') document.getElementById(firstElementId)?.focus()
}

describe('assertFocusLock', () => {
  afterEach(() => cleanup())

  it('passes when focus is trapped', () => {
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
    const result = assertFocusLock({
      element: document.getElementById('trap') as HTMLElement,
      utils: mockUtils,
    })

    expect(result.message()).toBe('')
    expect(result.pass).toBe(true)
  })

  // a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])
  it.each(['button', 'input', 'textarea', 'select'])('passes with %s element(s)', tagName => {
    const items = [0, 1, 2].map((idx: number) =>
      React.createElement(tagName, {
        id: `${idPrefix}-${idx}`,
        key: idx,
        onKeyUp: idx === 2 ? focusEl : undefined,
      }),
    )
    render(<div data-testid="trap">{items}</div>)

    const result = assertFocusLock({
      element: screen.getByTestId('trap'),
      utils: mockUtils,
    })

    expect(result.message()).toBe('')
    expect(result.pass).toBe(true)
  })

  it('fails when focus is not trapped', () => {
    render(
      <div id="trap">
        <button>1</button>
        <button>2</button>
      </div>,
    )
    const result = assertFocusLock({
      element: document.getElementById('trap') as HTMLElement,
      utils: mockUtils,
    })

    expect(result.pass).toBe(false)
    expect(result.message()).toContain('✕ focus outside of element')
  })
})