import userEvent from '@testing-library/user-event'
import { assertFocus } from './assertFocus'
import { getFirstFocusableElement } from './getFirstFocusableElement'

type AssertTabOptions = {
  includeChildren?: boolean
  resetFocus?: boolean
}

type AssertTabConfig = {
  element: HTMLElement
  elementName?: string
  options?: AssertTabOptions
  utils: JestMatcherUtils
}

export const assertTab = ({
  element,
  elementName = 'element',
  options: { includeChildren, resetFocus } = {},
  utils,
}: AssertTabConfig): jest.CustomMatcherResult => {
  let message = ''
  let pass = true

  userEvent.tab()

  const focusCheck = assertFocus({
    element,
    elementName,
    message: 'is part of tab sequence',
    utils,
  })

  if (includeChildren && !focusCheck.pass) {
    const childCheck = assertFocus({
      element: getFirstFocusableElement(element) as HTMLElement,
      elementName: "element (or element's child)",
      message: 'is part of tab sequence',
      utils,
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
