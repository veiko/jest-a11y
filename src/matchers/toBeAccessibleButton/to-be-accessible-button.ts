import userEvent from '@testing-library/user-event'
import { getAttribute, getRole, hasAriaLabel, hasButtonRole, hasChildren } from '../../utils'
import { failExpectedVsReceived } from '../../utils/expected-vs-received'

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
export function toBeAccessibleButton(this: any, element: HTMLElement) {
  if (!hasButtonRole(element)) {
    /**
     * The button has role of button.
     */
    return failExpectedVsReceived(
      `Element did not have correct role ${this.utils.printExpected('button')}`,
      { expected: 'button', received: getRole(element), utils: this.utils },
    )
  } else if (!hasChildren(element) && !hasAriaLabel(element)) {
    /**
     * The button has an accessible label.
     * By default, the accessible name is computed from any text content inside the button element.
     * However, it can also be provided with aria-labelledby or aria-label.
     */
    return {
      pass: false,
      message: () => `Element did not have accessible label.
By default, the accessible name is computed from any text content inside the button element.
However, it can also be provided with aria-labelledby or aria-label.

  Text content: ${this.utils.printReceived(element.innerHTML)}
  aria-label: ${this.utils.printReceived(getAttribute(element, 'aria-label'))}
  aria-labelledby: ${this.utils.printReceived(getAttribute(element, 'aria-labelledby'))}`,
    }
  } else {
    let message = ''
    let pass = true
    userEvent.tab()
    try {
      expect(element).toHaveFocus()
      message += `${this.utils.EXPECTED_COLOR('✓')} element can be reached with Tab\n`
    } catch (e) {
      message += `${this.utils.RECEIVED_COLOR('✕')} element can be reached with Tab\n\n`
      message += `  Expected element with focus:\n    ${this.utils.printExpected(
        element,
      )} to have focus\n`
      message += `  Received element with focus:\n    ${this.utils.printReceived(
        document.activeElement,
      )}\n\n`
    }

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
}
