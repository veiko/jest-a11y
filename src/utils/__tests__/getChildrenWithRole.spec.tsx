import { render, screen } from '@testing-library/react'
import React from 'react'
import { getChildrenWithRole } from 'utils/getChildrenWithRole'

test('returns nested children with role and tag', () => {
  render(
    <div aria-label="group" role="radiogroup">
      <label>
        <input checked type="radio" value="a" />
        <span aria-hidden="true" />
        <span>a</span>
      </label>
      <label>
        <input checked type="radio" value="b" />
        <span aria-hidden="true" />
        <span>b</span>
      </label>
      <label>
        <div role="radio" />
        <span aria-hidden="true" />
        <span>b</span>
      </label>
    </div>,
  )

  expect(
    getChildrenWithRole(screen.getByRole('radiogroup'), { role: 'radio', tag: 'input' }),
  ).toHaveLength(3)
})
