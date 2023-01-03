import { printUtil } from './printUtil'

type AssertAriaExpandedConfig = {
  element: HTMLElement
  message?: string
  userEvent(): Promise<void>
}

export const assertAriaExpanded = async ({
  element,
  message: messageContent,
  userEvent,
}: AssertAriaExpandedConfig): Promise<jest.CustomMatcherResult> => {
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
  await userEvent()

  if (element.getAttribute('aria-expanded') === (!initialState).toString()) {
    message += printUtil.pass(messageContent || 'aria-expanded toggled')
    // await userEvent()
  } else {
    message += printUtil.fail(messageContent || 'aria-expanded toggled', {
      expected: `aria-expanded='${!initialState}'`,
      received: element,
    })
    pass = false
  }
  return { message: () => message, pass }
}
