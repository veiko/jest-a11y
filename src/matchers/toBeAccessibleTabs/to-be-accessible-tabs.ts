import userEvent from '@testing-library/user-event'
import { assertAttribute } from 'utils/assertAttribute'
import { assertKeyboardNav } from 'utils/assertKeyboardNav'
import { assertLabel } from 'utils/assertLabel'
import { assertRole } from 'utils/assertRole'
import { assertTab } from 'utils/assertTab'
import { getChildrenWithRole } from 'utils/getChildrenWithRole'
import { printUtil } from 'utils/printUtil'

/**
 * https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/
 *
 * WAI-ARIA Roles, States, and Properties
 * ^ Copy from link above
 *
 * Keyboard Interaction
 * ^ Copy from link above
 */
export function toBeAccessibleTabs(this: any, element: HTMLElement): jest.CustomMatcherResult {
  let message = ''
  let pass = true

  const roleCheck = assertRole({ element, role: 'tablist', utils: this.utils })
  message += roleCheck.message()
  pass = pass ? roleCheck.pass : false

  const labelCheck = assertLabel({
    element,
    options: { testTextContent: false },
    utils: this.utils,
  })
  message += labelCheck.message()
  pass = pass ? labelCheck.pass : false

  const tabs = getChildrenWithRole(element, { role: 'tab' })
  if (!tabs.length) {
    message += printUtil.fail('element contains one or more elements with role="tab"', {
      utils: this.utils,
    })
    return {
      message: () => message,
      pass: false,
    }
  }

  // FIXME: what if first tab is disabled?
  const tabCheck = assertTab({
    element: tabs[0],
    utils: this.utils,
  })
  message += tabCheck.message()
  pass = pass ? tabCheck.pass : false

  tabs[0].focus()
  const rightCheck = assertKeyboardNav({
    element: tabs[0],
    key: '{arrowright}',
    nextElement: tabs[1],
    passMessage: 'element navigates to next tab on {arrowright}',
    utils: this.utils,
  })
  message += rightCheck.message()
  pass = pass ? rightCheck.pass : false

  if (tabs.length > 1) {
    tabs[1].focus()
    const leftCheck = assertKeyboardNav({
      element: tabs[1],
      key: '{arrowleft}',
      nextElement: tabs[0],
      passMessage: 'element navigates to previous tab on {arrowleft}',
      utils: this.utils,
    })
    message += leftCheck.message()
    pass = pass ? leftCheck.pass : false
  }

  tabs.forEach(tabElement => {
    let tabMessage = ''
    let tabPass = true

    const tabRoleCheck = assertRole({ element: tabElement, role: 'tab', utils: this.utils })
    tabMessage += tabRoleCheck.message()
    tabPass = tabPass ? tabRoleCheck.pass : false

    const ariaControlsCheck = assertAttribute({
      attribute: 'aria-controls',
      element: tabElement,
      message: 'has valid aria-controls referring to a tabpanel',
      utils: this.utils,
      value: (value: string) => !!document.getElementById(value),
    })
    tabMessage += ariaControlsCheck.message()
    tabPass = tabPass ? ariaControlsCheck.pass : false

    // test the associated panel

    const panelElement = document.getElementById(tabElement.getAttribute('aria-controls')!)

    if (panelElement) {
      const panelRoleCheck = assertRole({
        element: panelElement,
        elementName: 'tab panel element',
        role: 'tabpanel',
        utils: this.utils,
      })
      tabMessage += panelRoleCheck.message()
      tabPass = tabPass ? panelRoleCheck.pass : false

      const ariaLabelledByCheck = assertAttribute({
        attribute: 'aria-labelledby',
        element: panelElement,
        elementName: 'tab panel element',
        message: 'has valid aria-labelledby referring to a tab',
        utils: this.utils,
        value: (value: string) => !!document.getElementById(value),
      })
      tabMessage += ariaLabelledByCheck.message()
      tabPass = tabPass ? ariaLabelledByCheck.pass : false

      // focus on the corresponding tab before checking panel focus
      if (ariaLabelledByCheck.pass) {
        let ct = 0
        while (ct < 100 && tabElement !== document.activeElement) {
          userEvent.keyboard('{arrowright}')
          ct++
        }
      }
      const tabCheck = assertTab({
        element: panelElement,
        options: { includeChildren: true, resetFocus: true },
        utils: this.utils,
      })
      tabMessage += tabCheck.message()
      tabPass = tabPass ? tabCheck.pass : false
    }

    message += printUtil.testingElement(tabMessage, {
      element: tabElement,
      pass: tabPass,
      utils: this.utils,
    })
    pass = pass ? tabPass : false
  })

  return { message: () => message, pass }
}
