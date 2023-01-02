import userEvent from '@testing-library/user-event'
import { assertFocus } from 'utils/assertFocus'
import { printUtil } from 'utils/printUtil'

type Config = {
  element: HTMLElement
  // @see https://www.w3.org/TR/uievents-key/#keys-modifier
  key: string // 'ArrowDown' | 'ArrowUp' | 'ArrowLeft' | 'ArrowRight'
  passMessage?: string
}

/**
 * Assert that keyboard navigation does not occur on element
 * @param Config
 * @returns jest.CustomMatcherResult
 */
export const assertKeyboardInactive = ({
  element,
  key,
  passMessage = 'element supports arrow keyboard navigation',
}: Config): jest.CustomMatcherResult & { activeElement: HTMLElement } => {
  let message = ''
  let pass = true

  userEvent.keyboard(key)
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
