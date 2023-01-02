import { render, screen } from '@testing-library/react'
import React from 'react'
import { toBeAccessibleRadioGroup } from '../to-be-accessible-radiogroup'
import { RadioGroup } from '../examples/RadioGroup'

describe('toBeAccessibleRadioGroup', () => {
  it('passes when element is valid', async () => {
    // Note: jsdom does not support the following:
    // - tabbing to the first element with aria-checked="true". Reversing the checked elements, should still pass, but fails
    // - arrow navigation should select the next focused element
    // render(
    //   <div aria-label="Question" data-testid="a-radiogroup" role="radiogroup">
    //     <input aria-checked="true" aria-label="Yes" name="group1" type="radio" />
    //     <input aria-checked="false" aria-label="No" name="group1" type="radio" />
    //   </div>,
    // )
    render(<RadioGroup />)

    expect(screen.getByRole('radiogroup')).toBeAccessibleRadioGroup()
  })

  it('fails if the container element does not have a role of radiogroup', () => {
    render(
      <div aria-label="Question" data-testid="a-radiogroup">
        <input aria-checked="true" aria-label="Yes" type="radio" />
        <input aria-checked="false" aria-label="No" type="radio" />
      </div>,
    )

    const radiogroup = screen.getByTestId('a-radiogroup', { suggest: false })
    expect(toBeAccessibleRadioGroup(radiogroup)).toFailWith('container element has role radiogroup')
  })

  it('fails when the container element has no label', async () => {
    render(
      <div data-testid="a-radiogroup" role="radiogroup">
        <input aria-checked="true" aria-label="Yes" type="radio" />
        <input aria-checked="false" aria-label="No" type="radio" />
      </div>,
    )

    const radiogroup = screen.getByTestId('a-radiogroup', { suggest: false })
    expect(toBeAccessibleRadioGroup(radiogroup)).toFailWith(
      'container element has accessible label',
    )
  })

  // FIXME: how to get these elements without a role
  it('fails if one of the radio button elements does not have a role of radio', () => {
    render(
      <div aria-label="Question" data-testid="a-radiogroup" role="radiogroup">
        <input aria-checked="true" aria-label="Yes" />
        <input aria-checked="false" aria-label="No" role="radio" />
      </div>,
    )

    const radiogroup = screen.getByTestId('a-radiogroup', { suggest: false })
    expect(toBeAccessibleRadioGroup(radiogroup)).toFailWith('radio button element has role radio')
  })

  it('fails when one of the radio button elements have no label', async () => {
    render(
      <div aria-label="Question" data-testid="a-radiogroup" role="radiogroup">
        <input aria-checked="true" type="radio" />
        <input aria-checked="false" aria-label="No" type="radio" />
      </div>,
    )

    const radiogroup = screen.getByTestId('a-radiogroup', { suggest: false })
    expect(toBeAccessibleRadioGroup(radiogroup)).toFailWith(
      'radio button element has accessible label',
    )
  })

  // FIXME: jest-dom currently does not tab to the correct element with aria-checked
  xit('FIXME fails if the checked radio element does not focus on tab', async () => {
    render(
      <div aria-label="Question" data-testid="a-radiogroup" role="radiogroup">
        <input aria-checked="true" aria-label="Yes" type="radio" />
        <input aria-checked="true" aria-label="No" type="radio" />
      </div>,
    )

    const radiogroup = screen.getByTestId('a-radiogroup', { suggest: false })
    expect(toBeAccessibleRadioGroup(radiogroup)).toFailWith('element is part of tab sequence')
  })

  // FIXME: can not check whether the element is active when it is navigated to
  it('FIXME fails if the arrow keys do not navigate and select', async () => {
    render(
      <div aria-label="Question" data-testid="a-radiogroup" role="radiogroup">
        <input aria-checked="true" aria-label="Yes" type="radio" />
        <input aria-checked="false" aria-label="No" type="radio" />
      </div>,
    )

    const radiogroup = screen.getByTestId('a-radiogroup', { suggest: false })
    expect(toBeAccessibleRadioGroup(radiogroup)).toFailWith(
      'radio button element has aria-checked="true"',
    )
  })
})
