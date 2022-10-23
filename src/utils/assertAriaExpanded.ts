import { pfail, ppass } from 'utils/printPass'
import { stringify } from 'utils/stringify'

type AssertAriaExpandedConfig = {
  element: HTMLElement
  message?: string
  userEvent(): Promise<void>
  utils: jest.MatcherUtils
}

export const assertAriaExpanded = async ({
  element,
  message: messageContent,
  userEvent,
  utils,
}: AssertAriaExpandedConfig): Promise<jest.CustomMatcherResult> => {
  let message = ''
  let pass = true

  const initialState = element.getAttribute('aria-expanded') === 'true'
  await userEvent()

  if (element.getAttribute('aria-expanded') === (!initialState).toString()) {
    message += ppass(messageContent || 'aria-expanded toggled', utils)
    await userEvent()
  } else {
    message += pfail(messageContent || 'aria-expanded toggled', utils)
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
