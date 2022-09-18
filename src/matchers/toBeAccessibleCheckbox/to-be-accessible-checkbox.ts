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

  /**
   * Checkbox is valid
   */
  return { message: () => '', pass: true }
}
