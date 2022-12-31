import { Button } from 'reactstrap'
import { render, screen } from '@testing-library/react'
import React from 'react'

test('passes when valid', () => {
  render(<Button tabIndex={0}>Click me</Button>)

  expect(screen.getByRole('button')).toBeAccessibleButton()
})

test('fails when tabIndex=-1', () => {
  render(<Button tabIndex={-1}>Click me</Button>)

  expect(screen.getByRole('button')).not.toBeAccessibleButton()
})

test('fails without a label', () => {
  render(<Button />)

  expect(screen.getByRole('button')).not.toBeAccessibleButton()
})

test('fails when disabled', () => {
  render(<Button disabled>Click me</Button>)

  expect(screen.getByRole('button')).not.toBeAccessibleButton()
})
