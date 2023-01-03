import userEvent from '@testing-library/user-event'
import { assertAttribute } from 'utils/assertAttribute'
import { assertLabel } from 'utils/assertLabel'
import { assertRole } from 'utils/assertRole'
import { getElementLabel } from 'utils/getElementLabel'
import { printUtil } from 'utils/printUtil'

/**
 * https://www.w3.org/WAI/ARIA/apg/patterns/switch/
 *
 * WAI-ARIA Roles, States, and Properties
 * ^ Copy from link above
 *
 * Keyboard Interaction
 * ^ Copy from link above
 */
export async function toBeAccessibleSwitch(
  this: any,
  element: HTMLElement,
): Promise<jest.CustomMatcherResult> {
  let message = ''
  let pass = true

  if (element.tagName === 'INPUT') {
    return {
      message: () =>
        'jest-a11y MatcherError:\nA better matcher is available, try toBeAccessibleInputSwitch()',
      pass: false,
    }
  }

  const roleCheck = assertRole({ element, role: 'switch' })
  message += roleCheck.message()
  pass = pass ? roleCheck.pass : false

  const labelCheck = assertLabel({ element })
  message += labelCheck.message()
  pass = pass ? labelCheck.pass : false

  const attributeCheck = assertAttribute({ attribute: 'aria-checked', element })
  message += attributeCheck.message()
  pass = pass ? attributeCheck.pass : false

  const initialChecked = element.getAttribute('aria-checked')
  const initialLabel = getElementLabel(element)

  element.focus()
  await userEvent.keyboard(' ')

  const toggleCheck = assertAttribute({
    attribute: 'aria-checked',
    element,
    message: `toggles aria-checked on Space`,
    value: initialChecked === 'true' ? 'false' : 'true',
  })
  message += toggleCheck.message()
  pass = pass ? toggleCheck.pass : false

  const constantLabelCheck = getElementLabel(element) === initialLabel
  const constantLabelMessage = 'element label does not change when state changes'
  message += constantLabelCheck
    ? printUtil.pass(constantLabelMessage)
    : printUtil.fail(constantLabelMessage, {
        expected: initialLabel,
        received: getElementLabel(element),
      })
  pass = pass ? constantLabelCheck : false

  return { message: () => message, pass }
}
