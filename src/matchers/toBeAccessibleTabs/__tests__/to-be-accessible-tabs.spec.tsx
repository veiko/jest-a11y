import { render, screen } from '@testing-library/react'
import React from 'react'
import { toBeAccessibleTabs } from '../to-be-accessible-tabs'
import { Tabs } from '../examples/Tabs'

describe('toBeAccessibleTabs', () => {
  it('passes when element is valid', async () => {
    render(<Tabs />)

    await expect(screen.getByRole('tablist')).toBeAccessibleTabs()
  })

  it('fails if the container element does not have a role of tablist', async () => {
    render(
      <div data-testid="tablist-id">
        <div role="tab">1</div>
        <div role="tab">2</div>
      </div>,
    )

    const tabs = screen.getByTestId('tablist-id', { suggest: false })
    expect(await toBeAccessibleTabs(tabs)).toFailWith('element has role tablist')
  })

  it('fails if the container element has no tabs', async () => {
    render(
      <div data-testid="tablist-id" role="tablist">
        hello world
      </div>,
    )

    const tabs = screen.getByTestId('tablist-id', { suggest: false })
    expect(await toBeAccessibleTabs(tabs)).toFailWith(
      'element contains one or more elements with role="tab"',
    )
  })

  it('fails if the container element does not have an accessible name', async () => {
    render(
      <div data-testid="tablist-id" role="tablist">
        <div role="tab">1</div>
        <div role="tab">2</div>
      </div>,
    )

    const tabs = screen.getByTestId('tablist-id', { suggest: false })
    expect(await toBeAccessibleTabs(tabs)).toFailWith('element has accessible label')
  })

  it('fails if the container is not part of the tab sequence', async () => {
    render(
      <div aria-label="The Tabs" data-testid="tablist-id" role="tablist" tabIndex={-1}>
        <div role="tab">1</div>
        <div role="tab">2</div>
      </div>,
    )

    const tabs = screen.getByTestId('tablist-id', { suggest: false })
    expect(await toBeAccessibleTabs(tabs)).toFailWith(
      "element (or element's child) is part of tab sequence",
    )
  })

  // TODO: how to test
  xit('fails if a tab element does not have role="tab"', async () => {
    render(
      <div aria-label="The Tabs" data-testid="tablist-id" role="tablist" tabIndex={-1}>
        <div>1</div>
      </div>,
    )

    const tabs = screen.getByTestId('tablist-id', { suggest: false })
    expect(await toBeAccessibleTabs(tabs)).toFailWith('element has role tablist')
  })

  it('fails if a tab element does not have aria-controls set to a valid panel', async () => {
    render(
      <div aria-label="The Tabs" data-testid="tablist-id" role="tablist" tabIndex={0}>
        <div aria-controls="some-panel" role="tab">
          1
        </div>
      </div>,
    )

    const tabs = screen.getByTestId('tablist-id', { suggest: false })
    expect(await toBeAccessibleTabs(tabs)).toFailWith(
      'element has valid aria-controls referring to a tabpanel',
    )
  })

  it('fails if a tab element does not navigate to the next tab on {arrowright}', async () => {
    render(
      <div aria-label="The Tabs" data-testid="tablist-id" role="tablist" tabIndex={-1}>
        <div aria-controls="some-panel" role="tab" tabIndex={0}>
          1
        </div>
        <div aria-controls="some-panel" role="tab" tabIndex={0}>
          2
        </div>
      </div>,
    )

    const tabs = screen.getByTestId('tablist-id', { suggest: false })
    expect(await toBeAccessibleTabs(tabs)).toFailWith(
      'element blurs as it navigates to the next element',
    )
  })

  it('fails if a tab element does not navigate to the previous tab on {arrowleft}', async () => {
    render(
      <div aria-label="The Tabs" data-testid="tablist-id" role="tablist" tabIndex={-1}>
        <div aria-controls="some-panel" role="tab" tabIndex={0}>
          1
        </div>
        <div aria-controls="some-panel" role="tab" tabIndex={0}>
          2
        </div>
      </div>,
    )

    const tabs = screen.getByTestId('tablist-id', { suggest: false })
    expect(await toBeAccessibleTabs(tabs)).toFailWith(
      'element blurs as it navigates to the next element',
    )
  })

  // TODO: how to test? perhaps use the aria-controls from the previous test?
  it.skip('fails if a panel element does not have role=tabpanel', async () => {
    render(
      <>
        <div aria-label="The Tabs" data-testid="tablist-id" role="tablist">
          <div aria-controls="panel-0" role="tab" tabIndex={0}>
            0
          </div>
          <div aria-controls="panel-1" role="tab" tabIndex={0}>
            1
          </div>
        </div>
        <div id="panel-0">panel 0</div>
        <div id="panel-1">panel 1</div>
      </>,
    )

    const tabs = screen.getByTestId('tablist-id', { suggest: false })
    expect(await toBeAccessibleTabs(tabs)).toFailWith('tab panel element has role tabpanel')
  })

  it('fails if a panel element does not have aria-labelledby', async () => {
    render(
      <>
        <div aria-label="The Tabs" data-testid="tablist-id" role="tablist">
          <button aria-controls="panel-0" role="tab" tabIndex={0}>
            0
          </button>
        </div>
        <div id="panel-0" role="tabpanel">
          panel 0
        </div>
      </>,
    )

    const tabs = screen.getByTestId('tablist-id', { suggest: false })
    expect(await toBeAccessibleTabs(tabs)).toFailWith(
      'tab panel element has valid aria-labelledby referring to a tab',
    )
  })

  it('fails if a panel element does not have aria-labelledby set to a valid tab', async () => {
    render(
      <>
        <div aria-label="The Tabs" data-testid="tablist-id" role="tablist">
          <div aria-controls="panel-0" role="tab" tabIndex={0}>
            1
          </div>
        </div>
        <div aria-labelledby="some-tab" id="panel-0" role="tabpanel">
          panel 0
        </div>
      </>,
    )

    const tabs = screen.getByTestId('tablist-id', { suggest: false })
    expect(await toBeAccessibleTabs(tabs)).toFailWith(
      'tab panel element has valid aria-labelledby referring to a tab',
    )
  })

  it('fails if a panel element is not focusable and has no focusable children', async () => {
    render(
      <>
        <div aria-label="The Tabs" data-testid="tablist-id" role="tablist">
          <div aria-controls="panel-0" id="tab-0" role="tab">
            1
          </div>
        </div>
        <div aria-labelledby="tab-0" id="panel-0" role="tabpanel">
          panel 0
        </div>
      </>,
    )

    const tabs = screen.getByTestId('tablist-id', { suggest: false })
    expect(await toBeAccessibleTabs(tabs)).toFailWith(
      "element (or element's child) is part of tab sequence",
    )
  })
})
