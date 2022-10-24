import userEvent from '@testing-library/user-event'
import { assertRole } from 'utils/assertRole'

/**
 * https://www.w3.org/WAI/ARIA/apg/patterns/link/
 *
 * WAI-ARIA Roles, States, and Properties
 * 1. The element containing the link text or graphic has role of link.
 *
 * Keyboard Interaction
 * 1. Enter: Executes the link and moves focus to the link target.
 */
export function toBeAccessibleLink(this: any, element: HTMLElement): jest.CustomMatcherResult {
  let message = ''
  let pass = true

  const roleCheck = assertRole({ element, role: 'link', utils: this.utils })
  message += roleCheck.message()
  pass = pass ? roleCheck.pass : false

  const newOnClick = jest.fn()
  const oldOnClick = element.onclick
  let expectedCalls = 1
  element.onclick = newOnClick

  element.focus()
  userEvent.keyboard('{enter}')
  try {
    expect(newOnClick).toBeCalledTimes(expectedCalls)
    message += `${this.utils.EXPECTED_COLOR('✓')} element activated on {enter}\n`
  } catch (e) {
    message += `${this.utils.RECEIVED_COLOR('✕')} element activated on {enter}\n${e}\n`
    pass = false
  }
  element.onclick = oldOnClick

  return { message: () => message, pass }
}
