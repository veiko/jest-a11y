import { matcherUtils, printUtil } from './printUtil'

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

  if (process.env.NODE_ENV !== 'test') {
    // Only run user events in tests
    return {
      message: () => 'element has attribute aria-expanded',
      pass: element.hasAttribute('aria-expanded'),
    }
  }

  const initialState = element.getAttribute('aria-expanded') === 'true'
  userEvent()

  if (element.getAttribute('aria-expanded') === (!initialState).toString()) {
    message += printUtil.pass(messageContent || 'aria-expanded toggled')
    userEvent()
  } else {
    message += printUtil.fail(messageContent || 'aria-expanded toggled', {
      expected: `aria-expanded='${!initialState}'`,
      received: element,
    })
    pass = false
  }
  return { message: () => message, pass }
}
