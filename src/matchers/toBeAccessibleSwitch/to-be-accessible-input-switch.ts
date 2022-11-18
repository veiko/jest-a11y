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
export function toBeAccessibleInputSwitch(
  this: any,
  element: HTMLElement,
): jest.CustomMatcherResult {
  let message = ''
  let pass = true

  if (element.tagName !== 'INPUT' || (element as HTMLInputElement).type !== 'checkbox') {
    return {
      message: () =>
        printUtil.fail('element is an input[type="checkbox"]', {
          expected: '<input type="checkbox" />',
          received: element,
          utils: this.utils,
        }),
      pass: false,
    }
  }

  const roleCheck = assertRole({ element, role: 'switch', utils: this.utils })
  message += roleCheck.message()
  pass = pass ? roleCheck.pass : false

  const labelCheck = assertLabel({ element, utils: this.utils })
  message += labelCheck.message()
  pass = pass ? labelCheck.pass : false

  const initialChecked = (element as HTMLInputElement).checked
  const initialLabel = getElementLabel(element)

  const attributeCheck = assertProperty({ property: 'checked', element, utils: this.utils })
  message += attributeCheck.message()
  pass = pass ? attributeCheck.pass : false

  element.focus()
  userEvent.keyboard(' ')

  const toggleCheck = assertProperty({
    property: 'checked',
    element,
    message: 'toggles checked on {space}',
    utils: this.utils,
    value: !initialChecked,
  })
  message += toggleCheck.message()
  pass = pass ? toggleCheck.pass : false

  const constantLabelCheck = getElementLabel(element) === initialLabel
  const constantLabelMessage = 'element label does not change when state changes'
  message += constantLabelCheck
    ? printUtil.pass(constantLabelMessage, { utils: this.utils })
    : printUtil.fail(constantLabelMessage, { utils: this.utils })
  pass = pass ? constantLabelCheck : false

  return { message: () => message, pass }
}
