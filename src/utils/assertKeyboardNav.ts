import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup'
import { assertBlur } from 'utils/assertBlur'
import { assertFocus } from 'utils/assertFocus'
import { printUtil } from 'utils/printUtil'

type AssertKeyboardNavConfig = {
  element: HTMLElement
  // @see https://www.w3.org/TR/uievents-key/#keys-modifier
  key: '{arrowleft}' | '{arrowright}' | '{arrowup}' | '{arrowdown}'
  passMessage?: string
  nextElement?: HTMLElement
  userEvent: UserEvent
}

export const assertKeyboardNav = async ({
  element,
  key,
  passMessage = 'element supports arrow keyboard navigation',
  nextElement,
  userEvent,
}: AssertKeyboardNavConfig): Promise<jest.CustomMatcherResult & { activeElement: HTMLElement }> => {
  let message = ''
  let pass = true

  await userEvent.keyboard(key)
  const activeElement = document.activeElement as HTMLElement

  if (nextElement) {
    const blurCheck = assertBlur({
      element,
      message: 'blurs as it navigates to the next element',
    })
    message += blurCheck.message()
    pass = pass ? blurCheck.pass : false

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
