import { printUtil } from 'utils/printUtil'

type AssertFocusConfig = {
  element: HTMLElement
  elementName?: string
  message?: string
}

export const assertFocus = ({
  element,
  elementName = 'element',
  message: messageContent = 'has focus',
}: AssertFocusConfig): jest.CustomMatcherResult => {
  let message = ''
  let pass = true

  if (document.activeElement == element) {
    message += printUtil.pass(`${elementName} ${messageContent}`)
  } else {
    message += printUtil.fail(`${elementName} ${messageContent}`, {
      expected: element,
      received: document.activeElement,
    })
    pass = false
  }
  return { message: () => message, pass }
}
