import userEvent from '@testing-library/user-event'
import { assertFocus } from './assertFocus'

type AssertTabConfig = {
  element: HTMLElement
  utils: jest.MatcherUtils
}

export const assertTab = ({ element, utils }: AssertTabConfig): jest.CustomMatcherResult => {
  let message = ''
  let pass = true
  userEvent.tab()
  const focusCheck = assertFocus({ element, message: 'has focus on {tab}', utils })
  if (!focusCheck?.pass) {
    message += focusCheck.message()
    pass = false
  }
  return { message: () => message, pass }
}
