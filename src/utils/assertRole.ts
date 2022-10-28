import { getAttribute, getRole } from 'utils'
import { printUtil } from './printUtil'

const hasAlertRole = (el: HTMLElement) => getRole(el) === 'alert'

const hasAlertDialogRole = (el: HTMLElement) => getRole(el) === 'alertdialog'

const hasButtonRole = (el: HTMLElement) => el.tagName === 'BUTTON' || getRole(el) === 'button'

const hasCheckboxRole = (el: HTMLElement) =>
  (el.tagName === 'INPUT' && getAttribute(el, 'type') === 'checkbox') || getRole(el) === 'checkbox'

const hasDialogRole = (el: HTMLElement) => getRole(el) === 'dialog'

const hasLinkRole = (el: HTMLElement) => el.tagName === 'A' || getRole(el) === 'link'

const assertions: { [key in Role]: any } = {
  alert: hasAlertRole,
  alertdialog: hasAlertDialogRole,
  button: hasButtonRole,
  checkbox: hasCheckboxRole,
  dialog: hasDialogRole,
  link: hasLinkRole,
}

type AssertRoleConfig = {
  role: Role
  element: HTMLElement
  utils: jest.MatcherUtils
}

export const assertRole = ({
  element,
  role,
  utils,
}: AssertRoleConfig): jest.CustomMatcherResult => {
  if (!assertions[role](element)) {
    return { message: () => printUtil.fail(`element has role ${role}`, utils), pass: false }
  }
  return { message: () => printUtil.pass(`element has role ${role}`, utils), pass: true }
}
