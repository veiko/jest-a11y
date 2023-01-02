import userEvent from '@testing-library/user-event'
import { assertFocus } from 'utils/assertFocus'
import { getFirstFocusableElement } from 'utils/getFirstFocusableElement'

type AssertTabOptions = {
  includeChildren?: boolean
  resetFocus?: boolean
}

type AssertTabConfig = {
  element: HTMLElement
  elementName?: string
  options?: AssertTabOptions
}

export const assertTab = ({
  element,
  elementName = 'element',
  options: { includeChildren, resetFocus } = {},
}: AssertTabConfig): jest.CustomMatcherResult => {
  let message = ''
  let pass = true

  userEvent.tab()

  const focusCheck = assertFocus({
    element,
    elementName,
    message: 'is part of tab sequence',
  })

  if (includeChildren && !focusCheck.pass) {
    const childCheck = assertFocus({
      element: getFirstFocusableElement(element) as HTMLElement,
      elementName: "element (or element's child)",
      message: 'is part of tab sequence',
    })
    message += childCheck.message()
    pass = pass ? childCheck.pass : false
  } else {
    message += focusCheck.message()
    pass = pass ? focusCheck.pass : false
  }

  if (resetFocus) {
    userEvent.tab({ shift: true })
  }

  return { message: () => message, pass }
}
