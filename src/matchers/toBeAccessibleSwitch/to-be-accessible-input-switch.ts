import userEvent from '@testing-library/user-event'
import { assertLabel } from 'utils/assertLabel'
import { assertProperty } from 'utils/assertProperty'
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
export async function toBeAccessibleInputSwitch(
  this: any,
  element: HTMLElement,
): Promise<jest.CustomMatcherResult> {
  let message = ''
  let pass = true

  if (element.tagName !== 'INPUT' || (element as HTMLInputElement).type !== 'checkbox') {
    return {
      message: () =>
        printUtil.fail('element is an input[type="checkbox"]', {
          expected: '<input type="checkbox" />',
          received: element,
        }),
      pass: false,
    }
  }

  const roleCheck = assertRole({ element, role: 'switch' })
  message += roleCheck.message()
  pass = pass ? roleCheck.pass : false

  const labelCheck = assertLabel({ element })
  message += labelCheck.message()
  pass = pass ? labelCheck.pass : false

  const initialChecked = (element as HTMLInputElement).checked
  const initialLabel = getElementLabel(element)

  const attributeCheck = assertProperty({ property: 'checked', element })
  message += attributeCheck.message()
  pass = pass ? attributeCheck.pass : false

  element.focus()
  await userEvent.keyboard(' ')

  const toggleCheck = assertProperty({
    property: 'checked',
    element,
    message: 'toggles checked on Space',
    value: !initialChecked,
  })
  message += toggleCheck.message()
  pass = pass ? toggleCheck.pass : false

  const constantLabelCheck = getElementLabel(element) === initialLabel
  const constantLabelMessage = 'element label does not change when state changes'
  message += constantLabelCheck
    ? printUtil.pass(constantLabelMessage)
    : printUtil.fail(constantLabelMessage)
  pass = pass ? constantLabelCheck : false

  return { message: () => message, pass }
}
