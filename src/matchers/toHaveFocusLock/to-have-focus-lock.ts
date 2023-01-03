import { default as rtlUserEvent } from '@testing-library/user-event'
import { assertFocusLock } from 'utils/assertFocusLock'

/**
 * TODO
 */
export async function toHaveFocusLock(
  this: any,
  element: HTMLElement,
): Promise<jest.CustomMatcherResult> {
  const userEvent = rtlUserEvent as any
  let message = ''
  let pass = true

  const focusTrapCheck = await assertFocusLock({ element, userEvent })
  message += focusTrapCheck.message()
  pass = pass ? focusTrapCheck.pass : false

  return { message: () => message, pass }
}
