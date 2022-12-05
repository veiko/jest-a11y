import { matcherUtils, printUtil } from './printUtil'
import { stringify } from './stringify'

type AssertAriaExpandedConfig = {
  element: HTMLElement
  message?: string
  userEvent(): void
  /**
   * @deprecated
   */
  utils?: JestMatcherUtils
}

export const assertAriaExpanded = ({
  element,
  message: messageContent,
  userEvent,
  utils = matcherUtils,
}: AssertAriaExpandedConfig): jest.CustomMatcherResult => {
  let message = ''
  let pass = true

  const initialState = element.getAttribute('aria-expanded') === 'true'
  userEvent()

  if (element.getAttribute('aria-expanded') === (!initialState).toString()) {
    message += printUtil.pass(messageContent || 'aria-expanded toggled')
    userEvent()
  } else {
    message += printUtil.fail(messageContent || 'aria-expanded toggled')
    message += `    Expected element:\n     ${utils.BOLD_WEIGHT(
      stringify(element),
    )} to have ${utils.printExpected(`aria-expanded='${!initialState}'`)}\n`
    message += `    Received element with:\n      ${utils.printReceived(
      `aria-expanded='${element.getAttribute('aria-expanded')}'`,
    )}\n`
    pass = false
  }
  return { message: () => message, pass }
}
