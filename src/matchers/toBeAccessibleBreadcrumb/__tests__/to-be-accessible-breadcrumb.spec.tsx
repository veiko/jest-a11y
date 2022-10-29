import { render, screen } from '@testing-library/react'
import React from 'react'
import { toBeAccessibleBreadcrumb } from '../to-be-accessible-breadcrumb'
import { mockUtils } from '../../../utils/mockUtils'

class MockExpect {
  isNot: boolean = false
  toBeAccessibleBreadcrumb: any = toBeAccessibleBreadcrumb
  utils: any = mockUtils
}

describe('toBeAccessibleBreadcrumb', () => {
  let mockExpect: MockExpect
  beforeEach(() => {
    mockExpect = new MockExpect()
  })

  it('passes with vanillajs usage example', async () => {
    document.body.innerHTML = `<nav aria-label="Breadcrumb" id="breadcrumb"><a href="1">1</a><a href="2">2</a></nav>`

    await expect(document.getElementById('breadcrumb')).toBeAccessibleBreadcrumb()
  })

  it('passes with react testing library usage example', async () => {
    render(
      <nav aria-label="breadcrumbs" data-testid="breadcrumb">
        <a href="1">1</a>
        <a href="2">2</a>
      </nav>,
    )

    expect(screen.getByTestId('breadcrumb', { suggest: false })).toBeAccessibleBreadcrumb()
  })

  it('passes when element is valid', async () => {
    render(
      <nav aria-label="breadcrumbs" data-testid="breadcrumb">
        <a href="1">1</a>
        <a href="2">2</a>
      </nav>,
    )

    expect(screen.getByTestId('breadcrumb', { suggest: false })).toBeAccessibleBreadcrumb()
  })

  it('fails if the element is not a nav tag', () => {
    render(<div data-testid="an-breadcrumb">hello world</div>)

    const returnValue = mockExpect.toBeAccessibleBreadcrumb(
      screen.getByTestId('an-breadcrumb', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('✕ element has tagName nav')
  })

  it('fails if the element does not have an accessible label', () => {
    render(<nav data-testid="an-breadcrumb">hello world</nav>)

    const returnValue = mockExpect.toBeAccessibleBreadcrumb(
      screen.getByTestId('an-breadcrumb', { suggest: false }),
    )
    expect(returnValue.message()).toContain('✕ element has accessible label')
    expect(returnValue.pass).toBe(false)
  })
})
