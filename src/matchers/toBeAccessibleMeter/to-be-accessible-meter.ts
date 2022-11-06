import { assertAriaRangeValues } from 'utils/assertAriaRangeValue'
import { assertAttribute } from 'utils/assertAttribute'
import { assertLabel } from 'utils/assertLabel'
import { assertRole } from 'utils/assertRole'

/**
 * https://www.w3.org/WAI/ARIA/apg/patterns/meter/
 *
 * WAI-ARIA Roles, States, and Properties
 * 1. The widget has a role of meter.
 * 2. The widget has an accessible label.
 * 3. The widget has aria-valuemin set to a decimal value less than aria-valuemax.
 * 4. The widget has aria-valuenow set to a decimal value between aria-valuemin and aria-valuemax
 *
 * Keyboard Interaction
 * N/A
 */
export function toBeAccessibleMeter(this: any, element: HTMLElement): jest.CustomMatcherResult {
  let message = ''
  let pass = true

  const roleCheck = assertRole({ element, role: 'meter', utils: this.utils })
  message += roleCheck.message()
  pass = pass ? roleCheck.pass : pass

  const labelCheck = assertLabel({
    element,
    options: { testTextContent: false },
    utils: this.utils,
  })
  message += labelCheck.message()
  pass = pass ? labelCheck.pass : pass

  const attributeCheck = assertAriaRangeValues({ element, utils: this.utils })
  message += attributeCheck.message()
  pass = pass ? attributeCheck.pass : pass

  return { message: () => message, pass }
}
