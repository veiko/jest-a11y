import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { toBeAccessibleButton } from '../to-be-accessible-button'

describe('toBeAccessibleButton', () => {
  it('passes when element is valid', async () => {
    render(<button>click me</button>)

    expect(screen.getByRole('button')).toBeAccessibleButton()
  })

  it.only('fails if the element does not have a role of button', async () => {
    render(<div data-testid="a-button">click me</div>)

    const button = screen.getByText('click me')
    expect(await toBeAccessibleButton(button)).toFailWith('element has role button')
  })

  it('fails if the element does not have an accessible label', async () => {
    render(<button />)

    const button = screen.getByRole('button')
    expect(await toBeAccessibleButton(button)).toFailWith('element has accessible label')
  })

  it('fails if the element does not focus on tab', async () => {
    render(<button disabled>text</button>)

    const button = screen.getByRole('button')
    expect(await toBeAccessibleButton(button)).toFailWith('element is part of tab sequence')
  })

  it('fails if the element does not activate on {space}', async () => {
    const blockSpace = (e: React.KeyboardEvent) => e.code === 'Space' && e.preventDefault()

    render(<button onKeyDown={blockSpace}>text</button>)
    await userEvent.keyboard('{space}')

    const button = screen.getByRole('button')
    expect(await toBeAccessibleButton(button)).toFailWith('element activated on {space}')
  })

  it('fails if the element does not activate on {enter}', async () => {
    const blockSpace = (e: React.KeyboardEvent) => e.code === 'Enter' && e.preventDefault()

    render(<button onKeyDown={blockSpace}>text</button>)
    await userEvent.keyboard('{space}')

    const button = screen.getByRole('button')
    expect(await toBeAccessibleButton(button)).toFailWith('element activated on {enter}')
  })
})
