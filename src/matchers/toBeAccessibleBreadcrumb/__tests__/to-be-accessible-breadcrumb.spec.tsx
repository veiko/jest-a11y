import { render, screen } from '@testing-library/react'
import React from 'react'
import { toBeAccessibleBreadcrumb } from '../to-be-accessible-breadcrumb'

describe('toBeAccessibleBreadcrumb', () => {
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

    const returnValue = toBeAccessibleBreadcrumb(
      screen.getByTestId('an-breadcrumb', { suggest: false }),
    )
    const breadcrumb = screen.getByTestId('an-breadcrumb', { suggest: false })
    expect(toBeAccessibleBreadcrumb(breadcrumb)).toFailWith('element has tagName nav')
  })

  it('fails if the element does not have an accessible label', () => {
    render(<nav data-testid="an-breadcrumb">hello world</nav>)

    const breadcrumb = screen.getByTestId('an-breadcrumb', { suggest: false })
    expect(toBeAccessibleBreadcrumb(breadcrumb)).toFailWith('element has accessible label')
  })
})
