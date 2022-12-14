import { default as rtlUserEvent } from '@testing-library/user-event'
import { assertRole } from 'utils/assertRole'
import { printUtil } from 'utils/printUtil'

/**
 * https://www.w3.org/WAI/ARIA/apg/patterns/link/
 *
 * WAI-ARIA Roles, States, and Properties
 * 1. The element containing the link text or graphic has role of link.
 *
 * Keyboard Interaction
 * 1. Enter: Executes the link and moves focus to the link target.
 */
export async function toBeAccessibleLink(
  this: any,
  element: HTMLElement,
): Promise<jest.CustomMatcherResult> {
  const userEvent = rtlUserEvent.setup()
  let message = ''
  let pass = true

  const roleCheck = assertRole({ element, role: 'link' })
  message += roleCheck.message()
  pass = pass ? roleCheck.pass : false

  const newOnClick = jest.fn()
  const oldOnClick = element.onclick
  let expectedCalls = 1
  element.onclick = newOnClick

  element.focus()
  await userEvent.keyboard('{Enter}')
  try {
    expect(newOnClick).toBeCalledTimes(expectedCalls)
    message += printUtil.pass('element activated on Enter')
  } catch (e) {
    message += printUtil.fail('element activated on Enter')
    pass = false
  }
  element.onclick = oldOnClick

  return { message: () => message, pass }
}
