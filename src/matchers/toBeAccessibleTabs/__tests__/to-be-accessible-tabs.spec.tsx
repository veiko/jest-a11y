import { render, screen } from '@testing-library/react'
import React from 'react'
import { toBeAccessibleTabs } from '../to-be-accessible-tabs'
import { mockUtils } from '../../../utils/mockUtils'
import { Tabs } from '../examples/Tabs'

class MockExpect {
  isNot: boolean = false
  toBeAccessibleTabs: any = toBeAccessibleTabs
  utils: any = mockUtils
}

describe('toBeAccessibleTabs', () => {
  let mockExpect: MockExpect
  beforeEach(() => {
    mockExpect = new MockExpect()
  })

  it('passes when element is valid', async () => {
    render(<Tabs />)

    expect(screen.getByRole('tablist')).toBeAccessibleTabs()
  })

  it('fails if the container element does not have a role of tablist', () => {
    render(
      <div data-testid="tablist-id">
        <div role="tab">1</div>
        <div role="tab">2</div>
      </div>,
    )

    const returnValue = mockExpect.toBeAccessibleTabs(
      screen.getByTestId('tablist-id', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('✕ element has role tablist')
  })

  it('fails if the container element has no tabs', () => {
    render(
      <div data-testid="tablist-id" role="tablist">
        hello world
      </div>,
    )

    const returnValue = mockExpect.toBeAccessibleTabs(
      screen.getByTestId('tablist-id', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain(
      '✕ element contains one or more elements with role="tab"',
    )
  })

  it('fails if the container element does not have an accessible name', () => {
    render(
      <div data-testid="tablist-id" role="tablist">
        <div role="tab">1</div>
        <div role="tab">2</div>
      </div>,
    )

    const returnValue = mockExpect.toBeAccessibleTabs(
      screen.getByTestId('tablist-id', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('✕ element has accessible label')
  })

  it('fails if the container is not part of the tab sequence', () => {
    render(
      <div aria-label="The Tabs" data-testid="tablist-id" role="tablist" tabIndex={-1}>
        <div role="tab">1</div>
        <div role="tab">2</div>
      </div>,
    )

    const returnValue = mockExpect.toBeAccessibleTabs(
      screen.getByTestId('tablist-id', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('✕ element is part of tab sequence')
  })

  // TODO: how to test
  xit('fails if a tab element does not have role="tab"', () => {
    render(
      <div aria-label="The Tabs" data-testid="tablist-id" role="tablist" tabIndex={-1}>
        <div>1</div>
      </div>,
    )

    const returnValue = mockExpect.toBeAccessibleTabs(
      screen.getByTestId('tablist-id', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('✕ element has role tablist')
  })

  it('fails if a tab element does not have aria-controls set to a valid panel', () => {
    render(
      <div aria-label="The Tabs" data-testid="tablist-id" role="tablist" tabIndex={0}>
        <div aria-controls="some-panel" role="tab">
          1
        </div>
      </div>,
    )

    const returnValue = mockExpect.toBeAccessibleTabs(
      screen.getByTestId('tablist-id', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain(
      '✕ element has valid aria-controls referring to a tabpanel',
    )
  })

  it('fails if a tab element does not navigate to the next tab on {arrowright}', () => {
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

    const returnValue = mockExpect.toBeAccessibleTabs(
      screen.getByTestId('tablist-id', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('✕ element blurs as it navigates to the next element')
  })

  it('fails if a tab element does not navigate to the previous tab on {arrowleft}', () => {
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

    const returnValue = mockExpect.toBeAccessibleTabs(
      screen.getByTestId('tablist-id', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('✕ element blurs as it navigates to the next element')
  })

  // TODO: how to test? perhaps use the aria-controls from the previous test?
  it('fails if a panel element does not have role=tabpanel', () => {
    render(
      <>
        <div aria-label="The Tabs" data-testid="tablist-id" role="tablist">
          <div aria-controls="panel-0" role="tab" tabIndex={0}>
            1
          </div>
        </div>
        <div id="panel-0">panel 0</div>
      </>,
    )

    const returnValue = mockExpect.toBeAccessibleTabs(
      screen.getByTestId('tablist-id', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('✕ tab panel element has role tabpanel')
  })

  it('fails if a panel element does not have aria-labelledby', () => {
    render(
      <>
        <div aria-label="The Tabs" data-testid="tablist-id" role="tablist">
          <div aria-controls="panel-0" role="tab" tabIndex={0}>
            1
          </div>
        </div>
        <div id="panel-0" role="tabpanel">
          panel 0
        </div>
      </>,
    )

    const returnValue = mockExpect.toBeAccessibleTabs(
      screen.getByTestId('tablist-id', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain(
      '✕ tab panel element has valid aria-labelledby referring to a tab',
    )
  })

  it('fails if a panel element does not have aria-labelledby set to a valid tab', () => {
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

    const returnValue = mockExpect.toBeAccessibleTabs(
      screen.getByTestId('tablist-id', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain(
      '✕ tab panel element has valid aria-labelledby referring to a tab',
    )
  })

  it('fails if a panel element is not focusable and has no focusable children', () => {
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

    const returnValue = mockExpect.toBeAccessibleTabs(
      screen.getByTestId('tablist-id', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain(
      "✕ element (or element's child) is part of tab sequence",
    )
  })
})
