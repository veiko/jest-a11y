import userEvent from '@testing-library/user-event'
import { assertBlur } from 'utils/assertBlur'
import { assertFocus } from 'utils/assertFocus'
import { printUtil } from 'utils/printUtil'

type AssertKeyboardNavConfig = {
  element: HTMLElement
  // @see https://www.w3.org/TR/uievents-key/#keys-modifier
  key: '{arrowleft}' | '{arrowright}' | '{arrowup}' | '{arrowdown}'
  passMessage?: string
  nextElement?: HTMLElement
}

export const assertKeyboardNav = ({
  element,
  key,
  passMessage = 'element supports arrow keyboard navigation',
  nextElement,
}: AssertKeyboardNavConfig): jest.CustomMatcherResult & { activeElement: HTMLElement } => {
  let message = ''
  let pass = true

  userEvent.keyboard(key)
  const activeElement = document.activeElement as HTMLElement

  const blurCheck = assertBlur({
    element,
    message: 'blurs as it navigates to the next element',
  })
  message += blurCheck.message()
  pass = pass ? blurCheck.pass : false

  if (nextElement) {
    const focusCheck = assertFocus({ element: nextElement })
    message += focusCheck.message()
    pass = pass ? focusCheck.pass : false
  }

  return {
    activeElement,
    message: () => (pass ? printUtil.pass(passMessage) : message),
    pass,
  }
}
