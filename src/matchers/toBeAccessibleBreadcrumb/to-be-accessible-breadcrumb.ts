import { assertLabel } from 'utils/assertLabel'
import { assertTagName } from 'utils/assertTagName'

/**
 * https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/
 *
 * WAI-ARIA Roles, States, and Properties
 * ^ Copy from link above
 *
 * Keyboard Interaction
 * ^ Copy from link above
 */
export function toBeAccessibleBreadcrumb(
  this: any,
  element: HTMLElement,
): jest.CustomMatcherResult {
  let message = ''
  let pass = true

  const tagNameCheck = assertTagName({ element, tagName: 'nav' })
  message += tagNameCheck.message()
  pass = pass ? tagNameCheck.pass : false

  const labelCheck = assertLabel({
    element,
    options: { testTextContent: false },
  })
  message += labelCheck.message()
  pass = pass ? labelCheck.pass : false

  return { message: () => message, pass }
}
