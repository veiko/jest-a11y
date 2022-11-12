import { assertAttribute } from 'utils/assertAttribute'
import { assertLabel } from 'utils/assertLabel'
import { assertRole } from 'utils/assertRole'
import { assertTab } from 'utils/assertTab'
import { getChildrenWithRole } from 'utils/getChildrenWithRole'
import { assertArrowNav } from './utils/assertArrowNav'

/**
 * https://www.w3.org/WAI/ARIA/apg/patterns/radiogroup/
 *
 * WAI-ARIA Roles, States, and Properties
 * 1. The container element has role of radio group.
 * 2. The container element has accessible name.
 *
 * Keyboard Interaction
 * ^ Copy from link above
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
    utils: this.utils,
  })
  message += roleCheck.message()
  pass = pass ? roleCheck.pass : pass

  // 2. The container element has accessible name.
  const labelCheck = assertLabel({
    element,
    elementName: 'container element',
    options: { testTextContent: false },
    utils: this.utils,
  })
  message += labelCheck.message()
  pass = pass ? labelCheck.pass : pass

  // 3. Keyboard arrow navigation

  const radioButtons = getChildrenWithRole(element, { role: 'radio', tagName: 'INPUT' })
  // The element that will receive focus on tab. If no radio element is checked, the first radio element is used
  let elementToFocus = radioButtons[0]
  const tabCheck = assertTab({ element: elementToFocus, utils: this.utils })
  message += tabCheck.message()
  pass = pass ? tabCheck.pass : pass

  const arrowNavCheck = assertArrowNav({
    elements: radioButtons,
    elementName: 'radio button element',
    message: 'navigates to each radio button with arrow keys and checks the next element',
    utils: this.utils,
  })
  message += arrowNavCheck.message()
  pass = pass ? arrowNavCheck.pass : pass

  radioButtons.forEach((radio, idx) => {
    let radioMessage = ''
    let radioPass = true

    const radioCheck = assertRole({
      element: radio,
      elementName: 'radio button element',
      role: 'radio',
      utils: this.utils,
    })
    radioMessage += radioCheck.message()
    radioPass = radioPass ? radioCheck.pass : radioPass

    const radioLabelCheck = assertLabel({
      element: radio,
      elementName: 'radio button element',
      utils: this.utils,
    })
    radioMessage += radioLabelCheck.message()
    radioPass = radioPass ? radioLabelCheck.pass : radioPass

    const radioCheckedCheck = assertAttribute({
      attribute: 'aria-checked',
      element: radio,
      elementName: 'radio button element',
      utils: this.utils,
    })
    radioMessage += radioCheckedCheck.message()
    radioPass = radioPass ? radioCheckedCheck.pass : radioPass

    const func = pass ? this.utils.EXPECTED_COLOR : this.utils.RECEIVED_COLOR
    message += `\n${func('● Testing')} ${radio.outerHTML}\n${radioMessage}\n`
    pass = radioPass ? pass : false
  })

  return { message: () => message, pass }
}
