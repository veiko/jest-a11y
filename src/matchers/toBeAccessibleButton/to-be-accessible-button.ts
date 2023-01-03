import { default as rtlUserEvent } from '@testing-library/user-event'
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
export async function toBeAccessibleButton(
  this: any,
  element: HTMLElement,
): Promise<jest.CustomMatcherResult> {
  const userEvent = rtlUserEvent.setup()
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

  const tabCheck = await assertTab({ element, userEvent })
  message += tabCheck.message()
  pass = pass === false ? false : tabCheck.pass

  const newOnClick = jest.fn()
  const oldOnClick = element.onclick
  let expectedCalls = 1
  element.onclick = newOnClick

  element.focus()
  await userEvent.keyboard(' ')
  try {
    expect(newOnClick).toBeCalledTimes(expectedCalls)
    expectedCalls += 1
    message += printUtil.pass('element activated on Space')
  } catch (e) {
    message += printUtil.fail('element activated on Space')
    pass = false
  }

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

  return { pass, message: () => message }
}
