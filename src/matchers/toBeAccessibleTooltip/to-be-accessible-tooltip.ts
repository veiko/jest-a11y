import { default as rtlUserEvent } from '@testing-library/user-event'
import { assertAccessible } from 'utils/assertAccessible'
import { assertAttribute } from 'utils/assertAttribute'
import { assertHidden } from 'utils/assertHidden'
import { assertRole } from 'utils/assertRole'
import { assertTab } from 'utils/assertTab'
import { printUtil } from 'utils/printUtil'

/**
 * https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/
 *
 * WAI-ARIA Roles, States, and Properties
 * 1. The element that serves as the tooltip container has role tooltip.
 * 2. The element that triggers the tooltip references the tooltip element with aria-describedby.
 *
 * Keyboard Interaction
 * 1. Escape: Dismisses the Tooltip.
 *
 * TODO: Clarify that the tooltip trigger is passed here
 */
export async function toBeAccessibleTooltip(
  this: any,
  element: HTMLElement,
): Promise<jest.CustomMatcherResult> {
  const userEvent = rtlUserEvent.setup()
  let message = ''
  let pass = true

  const tabCheck = await assertTab({ element, elementName: 'trigger element', userEvent })
  message += tabCheck.message()
  pass = pass ? tabCheck.pass : false

  if (document.activeElement !== element) {
    // some implementations only add the aria-describedby once the trigger is focused
    element.focus()
  }

  // 2. The element that triggers the tooltip references the tooltip element with aria-describedby.
  // Here, we are just checking that aria-describedby is present
  const descriptionCheck = assertAttribute({
    attribute: 'aria-describedby',
    element,
    elementName: 'trigger element',
  })

  const tooltipElement = document.getElementById(
    element.getAttribute('aria-describedby')!,
  ) as HTMLElement

  if (!tooltipElement) {
    return {
      message: () =>
        printUtil.fail('trigger element does not have aria-describedby set to a valid id'),
      pass: false,
    }
  } else {
    message += descriptionCheck.message()
  }

  // 1. The element that serves as the tooltip container has role tooltip.
  const roleCheck = assertRole({
    element: tooltipElement,
    elementName: 'tooltip element',
    role: 'tooltip',
  })
  message += roleCheck.message()
  pass = pass ? roleCheck.pass : false

  const accessibleCheck = assertAccessible({
    element: tooltipElement,
    elementName: 'tooltip element',
    message: 'is accessible when trigger is focused',
  })
  message += accessibleCheck.message()
  pass = pass ? accessibleCheck.pass : false

  await userEvent.keyboard('{esc}')

  const hiddenCheck = assertHidden({
    element: tooltipElement,
    elementName: 'tooltip element',
    message: 'is hidden on {esc}',
  })
  message += hiddenCheck.message()
  pass = pass ? hiddenCheck.pass : false

  return { message: () => message, pass }
}
