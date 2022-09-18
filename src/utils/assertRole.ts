import { getAttribute, getRole } from 'utils'
import { failExpectedVsReceived } from 'utils/expected-vs-received'

const hasButtonRole = (el: HTMLElement) => el.tagName === 'BUTTON' || getRole(el) === 'button'

const hasCheckboxRole = (el: HTMLElement) =>
  (el.tagName === 'INPUT' && getAttribute(el, 'type') === 'checkbox') || getRole(el) === 'checkbox'

const assertions: { [key in Role]: any } = {
  button: hasButtonRole,
  checkbox: hasCheckboxRole,
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
    return failExpectedVsReceived(
      `Element did not have correct role ${utils.printExpected(role)}`,
      { expected: role, received: getRole(element), utils: utils },
    )
  }
  return { message: () => '', pass: true }
}
