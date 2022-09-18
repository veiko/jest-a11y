import userEvent from '@testing-library/user-event'
import { assertLabel } from 'utils/assertLabel'
import { assertTab } from 'utils/assertTab'
import { assertRole } from '../../utils/assertRole'

/**
 * https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/
 *
 * WAI-ARIA Roles, States, and Properties
 * 1. The checkbox has role of checkbox.
 * 2. The checkbox has an accessible label.
 * 3. When checked, the checkbox element has state aria-checked set to true.
 *
 * Keyboard Interaction
 * 1. Space activates the button.
 * 2. Enter activates the button.
 */
export function toBeAccessibleCheckbox(this: any, element: HTMLElement): jest.CustomMatcherResult {
  /**
   * The checkbox has role checkbox.
   */
  const roleCheck = assertRole({ element, role: 'checkbox', utils: this.utils })
  if (!roleCheck?.pass) {
    return roleCheck
  }

  const labelCheck = assertLabel({ element, utils: this.utils })
  if (!labelCheck?.pass) {
    return labelCheck
  }

  const tabCheck = assertTab({ element, utils: this.utils })
  if (!tabCheck?.pass) {
    return tabCheck
  }

  let message = ''
  let pass = true

  const newOnClick = jest.fn()
  const oldOnClick = element.onclick
  element.focus()
  element.onclick = newOnClick
  try {
    userEvent.keyboard('{space}')
    expect(newOnClick).toBeCalledTimes(1)
    message += `${this.utils.EXPECTED_COLOR('✓')} element activated on {space}\n`
    expect(element).toHaveFocus()
  } catch (e) {
    message += `\n${this.utils.RECEIVED_COLOR('✕')} element activated on {space}\n`
    message += `  Expected element with focus:\n   ${this.utils.printExpected(
      element,
    )} to have focus\n`
    message += `  Received element with focus:\n    ${this.utils.printReceived(
      document.activeElement,
    )}\n\n`
    pass = false
  }
  element.onclick = oldOnClick

  /**
   * Checkbox is valid
   */
  return { message: () => message, pass }
}
