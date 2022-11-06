import userEvent from '@testing-library/user-event'
import { assertFocus } from './assertFocus'
import { printUtil } from './printUtil'

type Config = {
  element: HTMLElement
  // @see https://www.w3.org/TR/uievents-key/#keys-modifier
  key: string // 'ArrowDown' | 'ArrowUp' | 'ArrowLeft' | 'ArrowRight'
  passMessage?: string
  utils: JestMatcherUtils
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
  utils,
}: Config): jest.CustomMatcherResult & { activeElement: HTMLElement } => {
  let message = ''
  let pass = true

  userEvent.keyboard(key)
  const activeElement = document.activeElement as HTMLElement

  const focusCheck = assertFocus({ element, utils })
  message += focusCheck.message()
  pass = pass ? focusCheck.pass : false

  return {
    activeElement,
    message: () => (pass ? printUtil.pass(passMessage, { utils }) : message),
    pass,
  }
}
