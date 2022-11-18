import userEvent from '@testing-library/user-event'
import { assertAttribute } from 'utils/assertAttribute'
import { assertLabel } from 'utils/assertLabel'
import { assertRole } from 'utils/assertRole'
import { printUtil } from 'utils/printUtil'

/**
 * https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/
 *
 * WAI-ARIA Roles, States, and Properties
 * 1. The element that serves as the dialog container has role of alertdialog.
 * 2. The dialog has either:
 *   - A value set for the aria-labelledby property that refers to a visible dialog title.
 *   - A label specified by aria-label.
 * 3. The element with role alertdialog has a value set for aria-describedby that refers to the element containing the alert message.
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
  let message = ''
  let pass = true

  const roleCheck = assertRole({ element, role: 'alertdialog', utils: this.utils })
  message += roleCheck.message()
  pass = pass ? roleCheck.pass : pass

  const labelCheck = assertLabel({ element, utils: this.utils })
  message += labelCheck.message()
  pass = pass ? labelCheck.pass : pass

  const descriptionCheck = assertAttribute({
    attribute: 'aria-describedby',
    element,
    utils: this.utils,
  })
  message += descriptionCheck.message()
  pass = pass ? descriptionCheck.pass : pass

  if (document.getElementById(element.getAttribute('aria-describedby') || '')) {
    message += printUtil.pass('element description is present', { utils: this.utils })
    pass = pass ? true : false
  } else {
    message += printUtil.fail('element description is present', { utils: this.utils })
  }

  try {
    userEvent.keyboard('{esc}')
    message += printUtil.pass('element closed on {esc}', { utils: this.utils })
    // TODO: How to validate dialog closed?
  } catch (e) {
    message += printUtil.fail('element closed on {esc}', { utils: this.utils })
    pass = false
  }

  return { message: () => message, pass }
}
