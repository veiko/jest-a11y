import userEvent from '@testing-library/user-event'
import { getAttribute, getRole, hasAriaLabel, hasChildren, hasButtonRole } from '../utils'

export function toBeAccessibleButton(this: any, element: HTMLElement) {
  if (!hasButtonRole(element)) {
    // element has correct role
    return {
      pass: false,
      message: () => `Element did not have correct role ${this.utils.printExpected('button')}:
        
Expected: ${this.utils.printExpected('button')}
Received: ${this.utils.printReceived(getRole(element))}`,
    }
  } else if (!hasChildren(element) && !hasAriaLabel(element)) {
    // element has accessible label
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
      message += `${this.utils.EXPECTED_COLOR('✓')} element focused\n`
    } catch (e) {
      message += `${this.utils.RECEIVED_COLOR('✕')} element focused\n`
      pass = false
    }

    const newOnClick = jest.fn()
    const oldOnClick = element.onclick

    element.onclick = newOnClick
    try {
      userEvent.keyboard('{space}')
      expect(newOnClick).toBeCalledTimes(1)
      message += `${this.utils.EXPECTED_COLOR('✓')} element activated on {space}\n`
      expect(element).toHaveFocus()
    } catch (e) {
      message += `${this.utils.RECEIVED_COLOR('✕')} element activated on {space}\n`
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
