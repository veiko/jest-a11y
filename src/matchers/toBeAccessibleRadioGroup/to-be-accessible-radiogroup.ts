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
export function toBeAccessibleRadioGroup(
  this: any,
  element: HTMLElement,
): jest.CustomMatcherResult {
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

  const radioButtons = getChildrenWithRole(element, { role: 'radio', tagName: 'INPUT' })

  // The element that will receive focus on tab. If no radio element is checked, the first radio element is used
  let elementToFocus = radioButtons[0]
  const tabCheck = assertTab({ element: elementToFocus })
  message += tabCheck.message()
  pass = pass ? tabCheck.pass : pass

  // 3. Keyboard arrow navigation
  const arrowNavCheck = assertArrowNav({
    elements: radioButtons,
    elementName: 'radio button element',
    message: 'navigates to each radio button with arrow keys and checks the next element',
  })
  message += arrowNavCheck.message()
  pass = pass ? arrowNavCheck.pass : pass

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

    const func = pass ? matcherUtils.EXPECTED_COLOR : matcherUtils.RECEIVED_COLOR
    message += `\n${func('● Testing')} ${radio.outerHTML}\n${radioMessage}\n`
    pass = radioPass ? pass : false
  })

  return { message: () => message, pass }
}
