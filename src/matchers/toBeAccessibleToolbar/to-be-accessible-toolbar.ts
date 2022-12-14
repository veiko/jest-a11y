import { default as rtlUserEvent } from '@testing-library/user-event'
import { assertFocus } from 'utils/assertFocus'
import { assertKeyboardNav } from 'utils/assertKeyboardNav'
import { assertLabel } from 'utils/assertLabel'
import { assertRole } from 'utils/assertRole'
import { assertTab } from 'utils/assertTab'
import { getAllFocusableElements } from 'utils/getAllFocusableElements'

/**
 * https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/
 *
 * WAI-ARIA Roles, States, and Properties
 * 1. The element has role toolbar.
 * 2. The element has an accessible label.
 * 3. If the controls are arranged vertically, the toolbar element has aria-orientation set to vertical. The default orientation is horizontal.
 *
 * Keyboard Interaction
 * 1. Tab and Shift + Tab: Move focus into and out of the toolbar.
 * 2. The arrow keys navigate between controls.
 */
export async function toBeAccessibleToolbar(
  this: any,
  element: HTMLElement,
): Promise<jest.CustomMatcherResult> {
  const userEvent = rtlUserEvent.setup()
  let message = ''
  let pass = true

  // 0. The element is in the tab sequence
  // The first control is focused if the toolbar is receiving focus for the first time after page load.
  const allElements = getAllFocusableElements(element)
  const firstEl = allElements[0]
  const tabCheck = await assertTab({ element: firstEl, userEvent })
  message += tabCheck.message()
  pass = pass ? tabCheck.pass : false

  // 1. The element has role toolbar.
  const roleCheck = assertRole({ element, role: 'toolbar' })
  message += roleCheck.message()
  pass = pass ? roleCheck.pass : false

  const labelCheck = assertLabel({
    element,
    options: { testTextContent: false },
  })
  message += labelCheck.message()
  pass = pass ? labelCheck.pass : false

  // 2. The arrow keys navigate between controls.
  // TODO: test looping?
  firstEl.focus()
  const keyCheck = await assertKeyboardNav({
    element: firstEl,
    nextElement: allElements[1],
    key: '{arrowright}',
    userEvent,
  })
  message += keyCheck.message()
  pass = pass ? keyCheck.pass : false

  await userEvent.keyboard('{home}')
  const homeCheck = assertFocus({
    element: firstEl,
    message: 'navigates to first control on {home}',
  })
  message += homeCheck.message()
  pass = pass ? homeCheck.pass : false

  await userEvent.keyboard('{end}')
  const endCheck = assertFocus({
    element: allElements[allElements.length - 1],
    message: 'navigates to last control on {end}',
  })
  message += endCheck.message()
  pass = pass ? endCheck.pass : false

  return { message: () => message, pass }
}
