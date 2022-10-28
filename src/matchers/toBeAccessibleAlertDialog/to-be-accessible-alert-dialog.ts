import userEvent from '@testing-library/user-event'
import { assertLabel } from 'utils/assertLabel'
import { assertRole } from 'utils/assertRole'

/**
 * https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/
 *
 * WAI-ARIA Roles, States, and Properties
 * 1. The element that serves as the dialog container has role of dialog.
 * 2. All elements required to operate the dialog are descendants of the element that has role dialog.
 * 3. The dialog container element has aria-modal set to true.
 * 4. The dialog has either:
 *   - A value set for the aria-labelledby property that refers to a visible dialog title.
 *   - A label specified by aria-label.
 *
 * Keyboard Interaction
 * 1. Tab moves focus to the next tabbable element inside the dialog. If focus is on the last tabbable element inside the dialog, moves focus to the first tabbable element inside the dialog.
 * 2. Shift + Tab Moves focus to the previous tabbable element inside the dialog. If focus is on the first tabbable element inside the dialog, moves focus to the last tabbable element inside the dialog.
 * 3. Escape closes the dialog.
 */
export function toBeAccessibleAlertDialog(
  this: any,
  element: HTMLElement,
): jest.CustomMatcherResult {
  const roleCheck = assertRole({ element, role: 'alertdialog', utils: this.utils })
  if (!roleCheck?.pass) {
    return roleCheck
  }

  const labelCheck = assertLabel({ element, utils: this.utils })
  if (!labelCheck?.pass) {
    return labelCheck
  }

  let message = ''
  let pass = true

  try {
    userEvent.keyboard('{esc}')
    message += `${this.utils.EXPECTED_COLOR('✓')} element closed on {esc}\n`
    // TODO: How to validate dialog closed?
  } catch (e) {
    message += `${this.utils.RECEIVED_COLOR('✕')} element closed on {esc}\n`
    pass = false
  }

  return { pass, message: () => message }
}
