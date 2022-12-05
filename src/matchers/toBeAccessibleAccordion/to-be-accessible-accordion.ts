import { within } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import { matcherUtils, printUtil } from '../../utils/printUtil'
import { assertAriaExpanded } from '../../utils/assertAriaExpanded'
import { assertAttribute } from '../../utils/assertAttribute'
import { assertClosest } from '../../utils/assertClosest'
import { pfail, ppass } from '../../utils/printPass'

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
export function toBeAccessibleAccordion(this: any, element: HTMLElement): jest.CustomMatcherResult {
  let message = ''
  let pass: boolean = true

  // 1. The title of each accordion header is contained in an element with role button.
  const buttons = within(element).queryAllByRole('button')
  if (buttons.length) {
    // If you want to execute await calls in series, use a for-loop (or any loop without a callback).
    // @see https://zellwk.com/blog/async-await-in-loops/
    for (const button of buttons) {
      let buttonMessage = ''
      // 2. Each accordion header button is wrapped in an element with role heading that has a value set for aria-level that is appropriate for the information architecture of the page.
      const headingCheck = assertClosest({
        description: 'with role heading',
        element: button,
        test: (el: HTMLElement) =>
          'h1h2h3h4h5h6'.includes(el.tagName.toLowerCase()) ||
          el.getAttribute('role') === 'heading',
      })
      buttonMessage += '  ' + headingCheck.message()
      pass = pass ? headingCheck.pass : false

      if (
        headingCheck.closest &&
        !'h1h2h3h4h5h6'.includes(headingCheck.closest.tagName.toLowerCase())
      ) {
        const ariaLevelCheck = assertAttribute({
          attribute: 'aria-level',
          element: headingCheck.closest,
          message: 'is wrapped in an element with aria-level',
          utils: matcherUtils,
        })
        buttonMessage += '  ' + ariaLevelCheck.message()
        pass = pass === false ? false : ariaLevelCheck.pass
      } else {
        buttonMessage += '  ' + ppass(`element is wrapped in an element with aria-level`)
      }

      // The null is needed for the userEvent.keyboard functions to complete, otherwise hangs
      // const user = userEvent.setup({ delay: null })

      // 3. The accordion header button element has aria-controls set to the ID of the element containing the accordion panel content.
      const attrCheck = assertAttribute({
        attribute: 'aria-controls',
        element: button,
        message: 'has attribute aria-controls',
        value: (value: string) => !!element.querySelector(`#${value}`),
      })
      buttonMessage += '  ' + attrCheck.message()
      pass = pass === false ? false : attrCheck.pass

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
      pass = pass === false ? false : enterCheck.pass

      // FIXME: issue with js-dom?
      // const spaceCheck = await assertAriaExpanded({
      //   element: button,
      //   message: 'aria-expanded toggled on {space}',
      //   userEvent: async () => {
      //     button.focus()
      //     await user.keyboard('{space}')
      //   },
      // })
      // buttonMessage += '  ' + spaceCheck.message() + '\n'
      // pass = pass === false ? false : spaceCheck.pass

      message += `${matcherUtils.RECEIVED_COLOR(
        `${matcherUtils.DIM_COLOR('● Testing')}`,
      )} ${matcherUtils.printReceived(button)}\n${buttonMessage}`
    }
  } else {
    return {
      pass: false,
      message: () => printUtil.fail('No elements with role button found', { received: element }),
    }
  }

  return { pass, message: () => message }
}
