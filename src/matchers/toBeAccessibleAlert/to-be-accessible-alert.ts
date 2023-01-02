import { assertRole } from 'utils/assertRole'

/**
 * https://www.w3.org/WAI/ARIA/apg/patterns/alert/
 *
 * WAI-ARIA Roles, States, and Properties
 * 1. The widget has a role of alert.
 *
 * Keyboard Interaction
 * N/A
 */
export function toBeAccessibleAlert(this: any, element: HTMLElement): jest.CustomMatcherResult {
  return assertRole({ element, role: 'alert' })
}
