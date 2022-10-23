import { getAttribute, getRole } from 'utils'
import { failExpectedVsReceived } from 'utils/expected-vs-received'
import { printUtil } from './printUtil'

const hasAlertRole = (el: HTMLElement) => getRole(el) === 'alert'

const hasButtonRole = (el: HTMLElement) => el.tagName === 'BUTTON' || getRole(el) === 'button'

const hasCheckboxRole = (el: HTMLElement) =>
  (el.tagName === 'INPUT' && getAttribute(el, 'type') === 'checkbox') || getRole(el) === 'checkbox'

const hasDialogRole = (el: HTMLElement) => getRole(el) === 'dialog'

const assertions: { [key in Role]: any } = {
  alert: hasAlertRole,
  button: hasButtonRole,
  checkbox: hasCheckboxRole,
  dialog: hasDialogRole,
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
  return { message: () => '', pass: true }
}
