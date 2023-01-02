import userEvent from '@testing-library/user-event'
import { assertLabel } from 'utils/assertLabel'
import { assertRole } from 'utils/assertRole'
import { assertTab } from 'utils/assertTab'
import { printUtil } from 'utils/printUtil'

/**
 * https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/
 *
 * WAI-ARIA Roles, States, and Properties
 * 1. The checkbox has role of checkbox.
 * 2. The checkbox has an accessible label.
 * 3. When checked, the checkbox element has state aria-checked set to true.
 *
 * Keyboard Interaction
 * 1. Space activates the checkbox.
 * 2. Enter activates the checkbox.
 */
export function toBeAccessibleCheckbox(this: any, element: HTMLElement): jest.CustomMatcherResult {
  let message = ''
  let pass = true

  // 1. The element has role of checkbox.
  const roleCheck = assertRole({ element, role: 'checkbox' })
  message += roleCheck.message()
  pass = roleCheck.pass

  const labelCheck = assertLabel({ element })
  message += labelCheck.message()
  pass = pass === false ? false : labelCheck.pass

  const tabCheck = assertTab({ element })
  message += tabCheck.message()
  pass = pass === false ? false : tabCheck.pass

  const newOnClick = jest.fn()
  const oldOnClick = element.onclick
  element.focus()
  element.onclick = newOnClick
  try {
    userEvent.keyboard('{space}')
    expect(newOnClick).toBeCalledTimes(1)
    message += printUtil.pass('element activated on {space}')
    expect(element).toHaveFocus()
  } catch (e) {
    message += printUtil.fail('element activated on {space}', {
      expected: element,
      received: document.activeElement,
    })
    pass = false
  }
  element.onclick = oldOnClick

  return { message: () => message, pass }
}
