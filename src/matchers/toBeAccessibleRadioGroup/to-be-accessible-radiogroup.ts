import { default as rtlUserEvent } from '@testing-library/user-event'
import { assertArrowNav } from 'matchers/toBeAccessibleRadioGroup/utils/assertArrowNav'
import { assertAttribute } from 'utils/assertAttribute'
import { assertLabel } from 'utils/assertLabel'
import { assertRole } from 'utils/assertRole'
import { assertTab } from 'utils/assertTab'
import { getChildrenWithRole } from 'utils/getChildrenWithRole'
import { matcherUtils, printUtil } from 'utils/printUtil'

/**
 * https://www.w3.org/WAI/ARIA/apg/patterns/radiobutton/
 *
 * WAI-ARIA Roles, States, and Properties
 * 1. The container element has role of radio group.
 * 2. The container element has accessible name.
 *
 * Keyboard Interaction
 * TODO
 */
export async function toBeAccessibleRadioGroup(
  this: any,
  element: HTMLElement,
): Promise<jest.CustomMatcherResult> {
  const userEvent = rtlUserEvent.setup()
  let message = ''
  let pass = true

  // 1. The container element has role of radio group.
  const roleCheck = assertRole({
    element,
    elementName: 'container element',
    role: 'radiogroup',
  })
  message += roleCheck.message()
  pass = pass ? roleCheck.pass : pass

  // 2. The container element has accessible name.
  const labelCheck = assertLabel({
    element,
    elementName: 'container element',
    options: { testTextContent: false },
  })
  message += labelCheck.message()
  pass = pass ? labelCheck.pass : pass

  const radioButtons = getChildrenWithRole(element, { role: 'radio', tag: 'input' })
  if (!radioButtons.length) {
    return {
      message: () =>
        printUtil.fail('No radio button elements found', {
          received: element,
        }),
      pass: false,
    }
  }

  // The element that will receive focus on tab. If no radio element is checked, the first radio element is used
  let elementToFocus = radioButtons[0]
  const tabCheck = await assertTab({
    element: elementToFocus,
    elementName: 'first radio button element',
    userEvent,
  })
  message += tabCheck.message()
  pass = pass ? tabCheck.pass : pass

  // 3. Keyboard arrow navigation

  if (radioButtons.length > 1) {
    const arrowNavCheck = assertArrowNav({
      elements: radioButtons,
      elementName: 'radio button element',
      message: 'navigates to each radio button with arrow keys and checks the next element',
    })
    message += arrowNavCheck.message()
    pass = pass ? arrowNavCheck.pass : pass
  } else {
    message += printUtil.pass('only one radio button element found, skipping arrow navigation')
  }

  radioButtons.forEach(radio => {
    let radioMessage = ''
    let radioPass = true

    const radioCheck = assertRole({
      element: radio,
      elementName: 'radio button element',
      role: 'radio',
    })
    radioMessage += radioCheck.message()
    radioPass = radioPass ? radioCheck.pass : radioPass

    const radioLabelCheck = assertLabel({
      element: radio,
      elementName: 'radio button element',
    })
    radioMessage += radioLabelCheck.message()
    radioPass = radioPass ? radioLabelCheck.pass : radioPass

    // If the radio element is not <input type="radio">, it will need aria-checked
    if (radio.tagName !== 'INPUT') {
      const radioCheckedCheck = assertAttribute({
        attribute: 'aria-checked',
        element: radio,
        elementName: 'radio button element',
      })
      radioMessage += radioCheckedCheck.message()
      radioPass = radioPass ? radioCheckedCheck.pass : radioPass
    }

    message += printUtil.testingElement(radioMessage, {
      element: radio,
      pass: radioPass,
    })
    pass = radioPass ? pass : false
  })

  return { message: () => message, pass }
}
