import { within } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
// FIXME: Have to use relative paths to be able to import this into AccordionTestRunner
import { assertAriaExpanded } from '../../utils/assertAriaExpanded'
import { assertAttribute } from '../../utils/assertAttribute'
import { assertClosest } from '../../utils/assertClosest'
import { printUtil } from '../../utils/printUtil'
import { cssEscape } from '../../utils/cssEscape'

/**
 * https://www.w3.org/WAI/ARIA/apg/patterns/accordion/
 *
 * WAI-ARIA Roles, States, and Properties
 * 1. The title of each accordion header is contained in an element with role button.
 * 2. Each accordion header button is wrapped in an element with role heading that has a value set for aria-level that is appropriate for the information architecture of the page.
 * 3. If the accordion panel associated with an accordion header is visible, the header button element has aria-expanded set to true. If the panel is not visible, aria-expanded is set to false.
 * 4. The accordion header button element has aria-controls set to the ID of the element containing the accordion panel content.
 * 5. If the accordion panel associated with an accordion header is visible, and if the accordion does not permit the panel to be collapsed, the header button element has aria-disabled set to true.
 *
 * Keyboard Interaction
 * 1. Space or Enter expands a collapsed panel when focus is on the associated accordion header.
 */
export function toBeAccessibleAccordion(this: any, element: HTMLElement): jest.CustomMatcherResult {
  let message = ''
  let pass: boolean = true

  // 1. The title of each accordion header is contained in an element with role button.
  const buttons = within(element).queryAllByRole('button')

  if (!buttons.length)
    return {
      pass: false,
      message: () => printUtil.fail('No elements with role button found', { received: element }),
    }

  buttons.forEach((button: HTMLElement) => {
    let buttonMessage = ''
    let buttonPass: boolean = true
    // 2. Each accordion header button is wrapped in an element with role heading that has a value set for aria-level that is appropriate for the information architecture of the page.
    const headingCheck = assertClosest({
      description: 'with role heading',
      element: button,
      test: (el: HTMLElement) =>
        'h1h2h3h4h5h6'.includes(el.tagName.toLowerCase()) || el.getAttribute('role') === 'heading',
    })
    buttonMessage += '  ' + headingCheck.message()
    buttonPass = buttonPass ? headingCheck.pass : false

    if (
      headingCheck.closest &&
      !'h1h2h3h4h5h6'.includes(headingCheck.closest.tagName.toLowerCase())
    ) {
      const ariaLevelCheck = assertAttribute({
        attribute: 'aria-level',
        element: headingCheck.closest,
        message: 'is wrapped in an element with aria-level',
      })
      buttonMessage += '  ' + ariaLevelCheck.message()
      buttonPass = buttonPass === false ? false : ariaLevelCheck.pass
    } else {
      buttonMessage += '  ' + printUtil.pass('element is wrapped in an element with aria-level')
    }

    // 3. The accordion header button element has aria-controls set to the ID of the element containing the accordion panel content.
    const attrCheck = assertAttribute({
      attribute: 'aria-controls',
      element: button,
      message: 'has attribute aria-controls',
      // cssEscape is needed in case selectors contain special characters
      // @see https://gomakethings.com/what-to-do-when-queryselector-fail-on-valid-selectors/
      value: (value: string) => !!element.querySelector(`#${cssEscape(value)}`),
    })
    buttonMessage += '  ' + attrCheck.message()
    buttonPass = buttonPass === false ? false : attrCheck.pass

    // 4. aria-expanded
    const enterCheck = assertAriaExpanded({
      element: button,
      message: 'aria-expanded toggled on {enter}',
      userEvent: async () => {
        button.focus()
        userEvent.keyboard('{enter}')
      },
    })
    buttonMessage += '  ' + enterCheck.message()
    buttonPass = buttonPass === false ? false : enterCheck.pass

    // FIXME: issue with js-dom?
    const spaceCheck = assertAriaExpanded({
      element: button,
      message: 'aria-expanded toggled on {space}',
      userEvent: async () => {
        button.focus()
        userEvent.keyboard('{space}')
      },
    })
    buttonMessage += '  ' + spaceCheck.message()
    buttonPass = buttonPass === false ? false : spaceCheck.pass

    if (!buttonPass) {
      message += printUtil.testingElement(buttonMessage, {
        element: button,
        pass: buttonPass,
      })
    }
    pass = buttonPass === false ? false : pass
  })

  return { pass, message: () => message }
}
