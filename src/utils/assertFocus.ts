import { printUtil } from './printUtil'

type AssertFocusConfig = {
  element: HTMLElement
  message?: string
  utils: JestMatcherUtils
}

export const assertFocus = ({
  element,
  message: messageContent = 'has focus',
  utils,
}: AssertFocusConfig): jest.CustomMatcherResult => {
  let message = ''
  let pass = true
  if (document.activeElement == element) {
    message += printUtil.pass(`element ${utils.EXPECTED_COLOR(element)} ${messageContent}`, {
      utils,
    })
  } else {
    message += printUtil.fail(`element ${messageContent}`, {
      expected: element,
      received: document.activeElement,
      utils,
    })
    pass = false
  }
  return { message: () => message, pass }
}
