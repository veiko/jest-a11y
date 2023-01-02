import { render, screen } from '@testing-library/react'
import React from 'react'
import { assertLabel } from 'utils/assertLabel'

test('passes when element has valid aria-label', () => {
  render(<div aria-label="something">else</div>)
  const result = assertLabel({ element: screen.getByText('else') })

  expect(result.pass).toBe(true)
})

test('passes when element is labelable and is nested in <label />', () => {
  render(
    <label>
      something<textarea data-testid="labelable"></textarea>
    </label>,
  )

  const result = assertLabel({ element: screen.getByRole('textbox') })
  expect(result.pass).toBe(true)
})

test('passes when the element contains text content', () => {
  render(<div role="checkbox">some label</div>)

  const result = assertLabel({ element: screen.getByRole('checkbox') })
  expect(result.pass).toBe(true)
})

test('passes when the <label> has valid for', () => {
  render(
    <div>
      <label htmlFor="cb">associated</label>
      <input id="cb" type="checkbox" />
    </div>,
  )

  const result = assertLabel({ element: screen.getByRole('checkbox') })
  expect(result.pass).toBe(true)
})

test('fails when there is no associated label', () => {
  render(<input type="checkbox" />)

  const result = assertLabel({ element: screen.getByRole('checkbox') })
  expect(result).toFailWith('element has accessible label')
})

test('fails when the element is not wrapped in a label', () => {
  render(
    <div>
      <label>unassociated</label>
      <input type="checkbox" />
    </div>,
  )

  const result = assertLabel({ element: screen.getByRole('checkbox') })
  expect(result).toFailWith('element has accessible label')
})
