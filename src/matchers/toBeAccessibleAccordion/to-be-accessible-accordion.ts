import { within } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import { assertAriaExpanded } from 'utils/assertAriaExpanded'
import { assertAttribute } from 'utils/assertAttribute'
import { assertClosest } from 'utils/assertClosest'
import { pfail, ppass } from 'utils/printPass'

// Setting delay null allows the userEvent to complete, otherwise hangs
// @see https://github.com/testing-library/user-event/issues/565#issuecomment-1064579531
// const user = userEvent.setup({ delay: null })

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
export async function toBeAccessibleAccordion(
  this: any,
  element: HTMLElement,
): Promise<jest.CustomMatcherResult> {
  let message = ''
  let pass = true

  // 1. The title of each accordion header is contained in an element with role button.
  const buttons = within(element).queryAllByRole('button')
  if (buttons.length) {
    buttons.forEach(async button => {
      let buttonMessage = ''
      // 2. Each accordion header button is wrapped in an element with role heading that has a value set for aria-level that is appropriate for the information architecture of the page.
      const headingCheck = assertClosest({
        description: 'with role heading',
        element: button,
        test: (el: HTMLElement) =>
          'h1h2h3h4h5h6'.includes(el.tagName.toLowerCase()) ||
          el.getAttribute('role') === 'heading',
        utils: this.utils,
      })
      buttonMessage += '  ' + headingCheck.message()
      pass = pass === false ? false : headingCheck.pass

      if (
        headingCheck.closest &&
        !'h1h2h3h4h5h6'.includes(headingCheck.closest.tagName.toLowerCase())
      ) {
        const ariaLevelCheck = assertAttribute({
          attribute: 'aria-level',
          element: headingCheck.closest,
          message: 'is wrapped in an element with aria-level',
          utils: this.utils,
        })
        buttonMessage += '  ' + ariaLevelCheck.message()
        pass = pass === false ? false : ariaLevelCheck.pass
      } else {
        buttonMessage +=
          '  ' + ppass(`element is wrapped in an element with aria-level`, this.utils)
      }

      const user = userEvent.setup({ delay: null })

      // 4. The accordion header button element has aria-controls set to the ID of the element containing the accordion panel content.
      const attrCheck = assertAttribute({
        attribute: 'aria-controls',
        element: button,
        message: 'has attribute aria-controls',
        utils: this.utils,
      })
      buttonMessage += '  ' + attrCheck.message()
      pass = pass === false ? false : attrCheck.pass

      // output final button message
      // TODO: move after aria-expanded checks
      message += `${this.utils.RECEIVED_COLOR(`${this.utils.DIM_COLOR('● Testing')}`)} ${
        button.outerHTML
      }\n${buttonMessage}`

      // 5. aria-expanded
      const enterCheck = await assertAriaExpanded({
        element: button,
        message: 'aria-expanded toggled on {enter}',
        userEvent: async () => await user.keyboard('{enter}'),
        utils: this.utils,
      })
      buttonMessage += '  ' + enterCheck.message()
      pass = pass === false ? false : enterCheck.pass

      const spaceCheck = await assertAriaExpanded({
        element: button,
        message: 'aria-expanded toggled on {space}',
        userEvent: async () => await user.keyboard('{space}'),
        utils: this.utils,
      })
      buttonMessage += '  ' + spaceCheck.message() + '\n'
      pass = pass === false ? false : spaceCheck.pass
    })
  } else {
    return {
      pass: false,
      message: () => pfail('No elements with role button found', this.utils),
    }
  }

  return { pass, message: () => message }
}
