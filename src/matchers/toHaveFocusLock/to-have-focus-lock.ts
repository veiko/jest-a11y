import { assertFocusLock } from 'utils/assertFocusLock'

/**
 * TODO
 */
export function toHaveFocusLock(this: any, element: HTMLElement): jest.CustomMatcherResult {
  let message = ''
  let pass = true

  const focusTrapCheck = assertFocusLock({ element, utils: this.utils })
  message += focusTrapCheck.message()
  pass = pass ? focusTrapCheck.pass : false

  return { message: () => message, pass }
}
