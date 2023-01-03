import { render, screen } from '@testing-library/react'
import React from 'react'
import { assertChecked } from 'utils/assertChecked'

/**
 * N.B. The readOnly props are to silence console errors:
 * Warning: You provided a `checked` prop to a form field without an `onChange` handler. This will
 * render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set
 * either `onChange` or `readOnly`.
 */

test('passes when checked is true for an input element', () => {
  render(<input type="checkbox" checked readOnly />)

  const element = screen.getByRole('checkbox')
  expect(assertChecked({ element, checked: true }).pass).toBe(true)
})

test('passes when checked is false for an input element', () => {
  render(<input type="checkbox" />)

  const element = screen.getByRole('checkbox')
  expect(assertChecked({ element, checked: false }).pass).toBe(true)
})

test('fails when checked is true for an input element', () => {
  render(<input type="checkbox" checked readOnly />)

  const element = screen.getByRole('checkbox')
  expect(assertChecked({ element, checked: false })).toFailWith('element is not checked')
})

test('fails when checked is undefined for an input element', () => {
  render(<input type="checkbox" />)

  const element = screen.getByRole('checkbox')
  expect(assertChecked({ element, checked: true })).toFailWith('element is checked')
})

test('fails when checked is false for an input element', () => {
  render(<input checked={false} readOnly type="checkbox" />)

  const element = screen.getByRole('checkbox')
  expect(assertChecked({ element, checked: true })).toFailWith('element is checked')
})

test('passes when checked is true for an element with aria-checked', () => {
  render(<div aria-checked="true" role="checkbox" />)

  const element = screen.getByRole('checkbox')
  expect(assertChecked({ element, checked: true }).pass).toBe(true)
})

test('passes when checked is false for an element with aria-checked', () => {
  render(<div aria-checked="false" role="checkbox" />)

  const element = screen.getByRole('checkbox')
  expect(assertChecked({ element, checked: false }).pass).toBe(true)
})

test('fails when checked is false for an input element', () => {
  render(<div aria-checked="false" role="checkbox" />)

  const element = screen.getByRole('checkbox')
  expect(assertChecked({ element, checked: true })).toFailWith('element is checked')
})

test('fails when checked is true for an input element', () => {
  render(<div aria-checked="true" role="checkbox" />)

  const element = screen.getByRole('checkbox')
  expect(assertChecked({ element, checked: false })).toFailWith('element is not checked')
})
