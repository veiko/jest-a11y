import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup'
import { assertFocus } from 'utils/assertFocus'
import { printUtil } from 'utils/printUtil'

type Config = {
  element: HTMLElement
  // @see https://www.w3.org/TR/uievents-key/#keys-modifier
  key: string // 'ArrowDown' | 'ArrowUp' | 'ArrowLeft' | 'ArrowRight'
  passMessage?: string
  userEvent: UserEvent
}

/**
 * Assert that keyboard navigation does not occur on element
 * @param Config
 * @returns jest.CustomMatcherResult
 */
export const assertKeyboardInactive = async ({
  element,
  key,
  passMessage = 'element supports arrow keyboard navigation',
  userEvent,
}: Config): Promise<jest.CustomMatcherResult & { activeElement: HTMLElement }> => {
  let message = ''
  let pass = true

  await userEvent.keyboard(key)
  const activeElement = document.activeElement as HTMLElement

  const focusCheck = assertFocus({ element })
  message += focusCheck.message()
  pass = pass ? focusCheck.pass : false

  return {
    activeElement,
    message: () => (pass ? printUtil.pass(passMessage) : message),
    pass,
  }
}
