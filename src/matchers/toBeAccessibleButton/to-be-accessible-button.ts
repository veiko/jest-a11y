import userEvent from '@testing-library/user-event'
import { assertLabel } from 'utils/assertLabel'
import { assertRole } from 'utils/assertRole'
import { assertTab } from 'utils/assertTab'

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
  const roleCheck = assertRole({ element, role: 'button', utils: this.utils })
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

  try {
    userEvent.keyboard('{enter}')
    expect(newOnClick).toBeCalledTimes(2)
    message += `${this.utils.EXPECTED_COLOR('✓')} element activated on {enter}\n`
    expect(element).toHaveFocus()
  } catch (e) {
    message += `${this.utils.RECEIVED_COLOR('✕')} element activated on {enter}\n`
    pass = false
  }
  element.onclick = oldOnClick

  return { pass, message: () => message }
}
