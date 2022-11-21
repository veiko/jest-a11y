import { Tooltip } from '@chakra-ui/react'
import { render, screen } from '@testing-library/react'
import React from 'react'

import 'jest-a11y'

test('passes when valid', () => {
  render(<Tooltip tabIndex={0}>Click me</Tooltip>)

  expect(screen.getByRole('button')).toBeAccessibleTooltip()
})
