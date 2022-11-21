import userEvent from '@testing-library/user-event'
import { assertFocus } from './assertFocus'

type AssertTabConfig = {
  element: HTMLElement
  elementName?: string
  utils: JestMatcherUtils
}

export const assertTab = ({
  element,
  elementName = 'element',
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
  message += focusCheck.message()
  pass = pass ? focusCheck.pass : false

  return { message: () => message, pass }
}
