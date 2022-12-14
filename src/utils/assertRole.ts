import { getAttribute, getRole } from 'utils'
import { printUtil } from 'utils/printUtil'

const hasAlertRole = (el: HTMLElement) => getRole(el) === 'alert'

const hasAlertDialogRole = (el: HTMLElement) => getRole(el) === 'alertdialog'

const hasButtonRole = (el: HTMLElement) => el.tagName === 'BUTTON' || getRole(el) === 'button'

const hasCheckboxRole = (el: HTMLElement) =>
  (el.tagName === 'INPUT' && getAttribute(el, 'type') === 'checkbox') || getRole(el) === 'checkbox'

const hasColumnHeaderRole = (el: HTMLElement) =>
  el.tagName === 'TH' || getRole(el) === 'columnheader'

const hasDialogRole = (el: HTMLElement) => getRole(el) === 'dialog'

const hasGridRole = (el: HTMLElement) => el.tagName === 'TABLE' || getRole(el) === 'grid'

const hasGridCellRole = (el: HTMLElement) => el.tagName === 'TD' || getRole(el) === 'gridcell'

const hasLinkRole = (el: HTMLElement) => el.tagName === 'A' || getRole(el) === 'link'

const hasMeterRole = (el: HTMLElement) => getRole(el) === 'meter'

const hasRadioRole = (el: HTMLElement) =>
  (el.tagName === 'INPUT' && getAttribute(el, 'type') === 'radio') || getRole(el) === 'radio'

const hasRadioGroupRole = (el: HTMLElement) => getRole(el) === 'radiogroup'

const hasRowRole = (el: HTMLElement) => el.tagName === 'TR' || getRole(el) === 'row'

const hasRowHeaderRole = (el: HTMLElement) => getRole(el) === 'rowheader'

const hasSliderRole = (el: HTMLElement) => getRole(el) === 'slider'

const hasSwitchRole = (el: HTMLElement) => getRole(el) === 'switch'

const hasSpinButtonRole = (el: HTMLElement) => getRole(el) === 'spinbutton'

const hasToolbarRole = (el: HTMLElement) => getRole(el) === 'toolbar'

const hasTooltipRole = (el: HTMLElement) => getRole(el) === 'tooltip'

const hasTabRole = (el: HTMLElement) => getRole(el) === 'tab'

const hasTabListRole = (el: HTMLElement) => getRole(el) === 'tablist'

const hasTabPanelRole = (el: HTMLElement) => getRole(el) === 'tabpanel'
/** plop-prepend-func */

/** TODO: use React.AriaRole */
const assertions: { [key in Role]: (el: HTMLElement) => boolean } = {
  alert: hasAlertRole,
  alertdialog: hasAlertDialogRole,
  button: hasButtonRole,
  checkbox: hasCheckboxRole,
  columnheader: hasColumnHeaderRole,
  dialog: hasDialogRole,
  grid: hasGridRole,
  gridcell: hasGridCellRole,
  link: hasLinkRole,
  meter: hasMeterRole,
  radio: hasRadioRole,
  radiogroup: hasRadioGroupRole,
  row: hasRowRole,
  rowheader: hasRowHeaderRole,
  slider: hasSliderRole,
  switch: hasSwitchRole,
  spinbutton: hasSpinButtonRole,
  toolbar: hasToolbarRole,
  tooltip: hasTooltipRole,
  tab: hasTabRole,
  tablist: hasTabListRole,
  tabpanel: hasTabPanelRole,
  /** plop-prepend-assertion */
}

type AssertRoleConfig = {
  role: Role | Role[]
  element: HTMLElement
  elementName?: string
}

export const assertRole = ({
  element,
  elementName = 'element',
  role,
}: AssertRoleConfig): jest.CustomMatcherResult => {
  const roleList: Role[] = Array.isArray(role) ? role : [role]
  let message = ''
  let pass = false

  roleList.forEach(r => {
    if (!assertions[r](element)) {
      message += printUtil.fail(`${elementName} has role ${r}`)
    } else {
      message += printUtil.pass(`${elementName} has role ${r}`)
      pass = true
    }
  })

  return {
    message: () =>
      pass && Array.isArray(role)
        ? printUtil.pass(`${elementName} has one role of ${role.join(', ')}`)
        : message,
    pass,
  }
}
