import { default as rtlUserEvent } from '@testing-library/user-event'
import { assertAriaRangeValues } from 'utils/assertAriaRangeValue'
import { assertAttribute } from 'utils/assertAttribute'
import { assertLabel } from 'utils/assertLabel'
import { assertRole } from 'utils/assertRole'
import { assertTab } from 'utils/assertTab'

/**
 * https://www.w3.org/WAI/ARIA/apg/patterns/slider/
 *
 * WAI-ARIA Roles, States, and Properties
 * 1. The widget has a role of slider.
 * 2. The widget has an accessible label.
 * 3. The widget has aria-valuemin set to a decimal value less than aria-valuemax.
 * 4. The widget has aria-valuenow set to a decimal value between aria-valuemin and aria-valuemax
 *
 * Keyboard Interaction
 * N/A
 */
export async function toBeAccessibleSlider(
  this: any,
  element: HTMLElement,
): Promise<jest.CustomMatcherResult> {
  const userEvent = rtlUserEvent.setup()
  let message = ''
  let pass = true

  const roleCheck = assertRole({ element, role: 'slider' })
  message += roleCheck.message()
  pass = pass ? roleCheck.pass : pass

  const labelCheck = assertLabel({
    element,
    options: { testTextContent: false },
  })
  message += labelCheck.message()
  pass = pass ? labelCheck.pass : pass

  const tabCheck = await assertTab({ element, userEvent })
  message += tabCheck.message()
  pass = pass ? tabCheck.pass : pass

  const attributeCheck = assertAriaRangeValues({ element })
  message += attributeCheck.message()
  pass = pass ? attributeCheck.pass : pass

  const originalValue = parseFloat(element.getAttribute('aria-valuenow') || '0')

  await userEvent.keyboard('{arrowright}')
  const rightCheck = assertAttribute({
    attribute: 'aria-valuenow',
    element,
    message: 'increases aria-valuenow when {arrowright} is pressed',
    value: v => parseFloat(v) > originalValue,
  })
  message += rightCheck.message()
  pass = pass ? rightCheck.pass : pass

  await userEvent.keyboard('{arrowleft}')
  const leftCheck = assertAttribute({
    attribute: 'aria-valuenow',
    element,
    message: 'decreases aria-valuenow when {arrowleft} is pressed',
    value: `${originalValue}`,
  })
  message += leftCheck.message()
  pass = pass ? leftCheck.pass : pass

  await userEvent.keyboard('{arrowdown}')
  const downCheck = assertAttribute({
    attribute: 'aria-valuenow',
    element,
    message: 'increases aria-valuenow when {arrowdown} is pressed',
    value: v => parseFloat(v) > originalValue,
  })
  message += downCheck.message()
  pass = pass ? downCheck.pass : pass

  await userEvent.keyboard('{arrowup}')
  const upCheck = assertAttribute({
    attribute: 'aria-valuenow',
    element,
    message: 'decreases aria-valuenow when {arrowup} is pressed',
    value: `${originalValue}`,
  })
  message += upCheck.message()
  pass = pass ? upCheck.pass : pass

  await userEvent.keyboard('{home}')
  const homeCheck = assertAttribute({
    attribute: 'aria-valuenow',
    element,
    message: 'sets aria-valuenow to aria-valuemin when {home} is pressed',
    value: element.getAttribute('aria-valuemin')!,
  })
  message += homeCheck.message()
  pass = pass ? homeCheck.pass : pass

  await userEvent.keyboard('{end}')
  const endCheck = assertAttribute({
    attribute: 'aria-valuenow',
    element,
    message: 'sets aria-valuenow to aria-valuemax when {end} is pressed',
    value: element.getAttribute('aria-valuemax')!,
  })
  message += endCheck.message()
  pass = pass ? endCheck.pass : pass

  return { message: () => message, pass }
}
