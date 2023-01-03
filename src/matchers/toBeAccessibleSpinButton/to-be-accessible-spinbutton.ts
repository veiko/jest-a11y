import userEvent from '@testing-library/user-event'
import { assertAriaRangeValues } from 'utils/assertAriaRangeValue'
import { assertAttribute } from 'utils/assertAttribute'
import { assertLabel } from 'utils/assertLabel'
import { assertRole } from 'utils/assertRole'

/**
 * https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/
 *
 * WAI-ARIA Roles, States, and Properties
 * 1. The focusable element serving as the spinbutton has role spinbutton. This is typically an element that supports text input.
 * 2. The spinbutton element has the aria-valuenow property set to a decimal value representing the current value of the spinbutton.
 * 3. The spinbutton element has the aria-valuemin property set to a decimal value representing the minimum allowed value of the spinbutton if it has a known minimum value.
 * 4. The spinbutton element has the aria-valuemax property set to a decimal value representing the maximum allowed value of the spinbutton if it has a known maximum value.
 * 5. If the spinbutton has a visible label, it is referenced by aria-labelledby on the spinbutton element. Otherwise, the spinbutton element has a label provided by aria-label.
 *
 * Keyboard Interaction
 * 1. Up Arrow: Increases the value.
 * 2. Down Arrow: Decreases the value.
 * 3. Home: If the spinbutton has a minimum value, sets the value to its minimum.
 * 4. End: If the spinbutton has a maximum value, sets the value to its maximum.
 */
export async function toBeAccessibleSpinButton(
  this: any,
  element: HTMLElement,
): Promise<jest.CustomMatcherResult> {
  let message = ''
  let pass = true
  const originalValue = parseFloat(element.getAttribute('aria-valuenow') || '0')

  const roleCheck = assertRole({ element, role: 'spinbutton' })
  message += roleCheck.message()
  pass = roleCheck.pass

  const labelCheck = assertLabel({ element })
  message += labelCheck.message()
  pass = labelCheck.pass

  const attributeCheck = assertAriaRangeValues({ element, nowRequired: false })
  message += attributeCheck.message()
  pass = pass ? attributeCheck.pass : pass

  await userEvent.tab()
  await userEvent.keyboard('{arrowup}')
  const upCheck = assertAttribute({
    attribute: 'aria-valuenow',
    element,
    message: 'increases aria-valuenow when {arrowup} is pressed',
    value: v => parseFloat(v) > originalValue,
  })
  message += upCheck.message()
  pass = pass ? upCheck.pass : pass

  await userEvent.keyboard('{arrowdown}')
  const downCheck = assertAttribute({
    attribute: 'aria-valuenow',
    element,
    message: 'decreases aria-valuenow when {arrowdown} is pressed',
    value: `${originalValue}`,
  })
  message += downCheck.message()
  pass = pass ? downCheck.pass : pass

  return { message: () => message, pass }
}
