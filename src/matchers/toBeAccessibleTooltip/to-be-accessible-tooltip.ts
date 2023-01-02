import userEvent from '@testing-library/user-event'
import { assertAccessible } from 'utils/assertAccessible'
import { assertAttribute } from 'utils/assertAttribute'
import { assertHidden } from 'utils/assertHidden'
import { assertRole } from 'utils/assertRole'
import { assertTab } from 'utils/assertTab'

/**
 * https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/
 *
 * WAI-ARIA Roles, States, and Properties
 * 1. The element that serves as the tooltip container has role tooltip.
 * 2. The element that triggers the tooltip references the tooltip element with aria-describedby.
 *
 * Keyboard Interaction
 * 1. Escape: Dismisses the Tooltip.
 */
export function toBeAccessibleTooltip(this: any, element: HTMLElement): jest.CustomMatcherResult {
  let message = ''
  let pass = true

  const tabCheck = assertTab({ element, elementName: 'trigger element' })
  message += tabCheck.message()
  pass = pass ? tabCheck.pass : false

  if (document.activeElement !== element) {
    // some implementations only add the aria-describedby once the trigger is focused
    element.focus()
  }

  // 2. The element that triggers the tooltip references the tooltip element with aria-describedby.
  const descriptionCheck = assertAttribute({
    attribute: 'aria-describedby',
    element,
    elementName: 'trigger element',
    value: element.id,
  })
  if (!descriptionCheck.pass) {
    return {
      message: () => descriptionCheck.message(),
      pass: false,
    }
  } else {
    message += descriptionCheck.message()
  }

  const tooltipElement = document.getElementById(
    element.getAttribute('aria-describedby')!,
  ) as HTMLElement

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

  userEvent.keyboard('{esc}')

  const hiddenCheck = assertHidden({
    element: tooltipElement,
    elementName: 'tooltip element',
    message: 'is hidden on {esc}',
  })
  message += hiddenCheck.message()
  pass = pass ? hiddenCheck.pass : false

  return { message: () => message, pass }
}
