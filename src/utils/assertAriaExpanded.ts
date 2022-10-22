import { pfail, ppass } from './printPass'
import { act, fireEvent } from '@testing-library/react'

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

  if (document.activeElement !== element) {
    message += pfail(`element is not focused`, utils)
    pass = false
  }
  if (element.getAttribute('aria-expanded') === (!initialState).toString()) {
    console.log('after', element.getAttribute('aria-expanded'))
    message += ppass(messageContent || 'aria-expanded toggled', utils)
  } else {
    message += `\n` + pfail(messageContent || 'aria-expanded toggled', utils)
    message += `  Expected element:\n   ${utils.printExpected(
      element,
    )} to have aria-expanded="${!initialState}"\n`
    message += `  Received aria-expanded:\n    ${utils.printReceived(
      element.getAttribute('aria-expanded'),
    )}\n\n`
    pass = false
  }
  return { message: () => message, pass }
}
