import { printUtil } from './printUtil'

type AssertFocusConfig = {
  element: HTMLElement
  elementName?: string
  message?: string
  utils: JestMatcherUtils
}

export const assertFocus = ({
  element,
  elementName = 'element',
  message: messageContent = 'has focus',
  utils,
}: AssertFocusConfig): jest.CustomMatcherResult => {
  let message = ''
  let pass = true

  if (document.activeElement == element) {
    message += printUtil.pass(`${elementName} ${messageContent}`, {
      utils,
    })
  } else {
    message += printUtil.fail(`${elementName} ${messageContent}`, {
      expected: element,
      received: document.activeElement,
      utils,
    })
    pass = false
  }
  return { message: () => message, pass }
}
