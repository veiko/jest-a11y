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
  const roleCheck = assertRole({ element, role: 'alert', utils: this.utils })
  if (!roleCheck?.pass) {
    return roleCheck
  } else {
    return { pass: true, message: () => '' }
  }
}
