import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { toBeAccessibleButton } from '../to-be-accessible-button'
import { mockUtils } from '../../../utils/mockUtils'

class MockExpect {
  isNot: boolean = false
  toBeAccessibleButton: any = toBeAccessibleButton
  utils: any = mockUtils
}

describe('toBeAccessibleButton', () => {
  let mockExpect: MockExpect
  beforeEach(() => {
    mockExpect = new MockExpect()
  })

  it('passes when element is valid', async () => {
    render(<button>click me</button>)

    expect(screen.getByRole('button')).toBeAccessibleButton()
  })

  it('fails if the element does not have a role of button', () => {
    render(<div data-testid="a-button">click me</div>)

    const returnValue = mockExpect.toBeAccessibleButton(
      screen.getByTestId('a-button', { suggest: false }),
    )
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain(`✕ element has role button`)
  })

  it('fails if the element does not have an accessible label', () => {
    render(<button />)

    const returnValue = mockExpect.toBeAccessibleButton(screen.getByRole('button'))
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('✕ element has accessible label')
  })

  it('fails if the element does not focus on tab', () => {
    render(<button disabled>text</button>)

    const returnValue = mockExpect.toBeAccessibleButton(screen.getByRole('button'))
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('✕ element has focus on {tab}')
  })

  it('fails if the element does not activate on {space}', () => {
    const blockSpace = (e: React.KeyboardEvent) => e.code === 'Space' && e.preventDefault()

    render(<button onKeyDown={blockSpace}>text</button>)
    userEvent.keyboard('{space}')

    const returnValue = mockExpect.toBeAccessibleButton(screen.getByRole('button'))
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('✕ element activated on {space}')
  })

  it('fails if the element does not activate on {enter}', () => {
    const blockSpace = (e: React.KeyboardEvent) => e.code === 'Enter' && e.preventDefault()

    render(<button onKeyDown={blockSpace}>text</button>)
    userEvent.keyboard('{space}')

    const returnValue = mockExpect.toBeAccessibleButton(screen.getByRole('button'))
    expect(returnValue.pass).toBe(false)
    expect(returnValue.message()).toContain('✕ element activated on {enter}')
  })
})
