import { default as rtlUserEvent } from '@testing-library/user-event'
import { assertAttribute } from 'utils/assertAttribute'
import { assertFocusLock } from 'utils/assertFocusLock'
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
export async function toBeAccessibleDialog(
  this: any,
  element: HTMLElement,
): Promise<jest.CustomMatcherResult> {
  const userEvent = rtlUserEvent.setup()
  let message = ''
  let pass = true

  // 1. The element that serves as the dialog container has role of dialog.
  const roleCheck = assertRole({ element, role: 'dialog' })
  message += roleCheck.message()
  pass = roleCheck.pass

  // 3. The dialog container element has aria-modal set to true.
  const modalCheck = assertAttribute({
    element,
    attribute: 'aria-modal',
    value: 'true',
  })
  message += modalCheck.message()
  pass = pass ? modalCheck.pass : false

  const labelCheck = assertLabel({ element })
  message += labelCheck.message()
  pass = pass ? labelCheck.pass : false

  const focusTrapCheck = await assertFocusLock({ element, userEvent })
  message += focusTrapCheck.message()
  pass = pass ? focusTrapCheck.pass : false

  return { pass, message: () => message }
}
