import userEvent from '@testing-library/user-event'
import { assertLabel } from 'utils/assertLabel'
import { assertRole } from 'utils/assertRole'
import { assertTab } from 'utils/assertTab'
import { printUtil } from 'utils/printUtil'

/**
 * https://www.w3.org/WAI/ARIA/apg/patterns/button/
 *
 * WAI-ARIA Roles, States, and Properties
 * 1. The button has role of button.
 * 2. The button has an accessible label.
 *
 * Keyboard Interaction
 * 1. Space activates the button.
 * 2. Enter activates the button.
 */
export function toBeAccessibleButton(this: any, element: HTMLElement): jest.CustomMatcherResult {
  let message = ''
  let pass = true

  // 1. The button has role of button.
  const roleCheck = assertRole({ element, role: 'button' })
  message += roleCheck.message()
  pass = roleCheck.pass

  // 2. The button has an accessible label.
  const labelCheck = assertLabel({ element })
  message += labelCheck.message()
  pass = pass === false ? false : labelCheck.pass

  const tabCheck = assertTab({ element })
  message += tabCheck.message()
  pass = pass === false ? false : tabCheck.pass

  const newOnClick = jest.fn()
  const oldOnClick = element.onclick
  let expectedCalls = 1
  element.onclick = newOnClick

  element.focus()
  userEvent.keyboard('{space}')
  try {
    expect(newOnClick).toBeCalledTimes(expectedCalls)
    expectedCalls += 1
    message += printUtil.pass('element activated on {space}')
  } catch (e) {
    message += printUtil.fail('element activated on {space}')
    pass = false
  }

  element.focus()
  userEvent.keyboard('{enter}')
  try {
    expect(newOnClick).toBeCalledTimes(expectedCalls)
    message += printUtil.pass('element activated on {enter}')
  } catch (e) {
    message += printUtil.fail('element activated on {enter}')
    pass = false
  }
  element.onclick = oldOnClick

  return { pass, message: () => message }
}
