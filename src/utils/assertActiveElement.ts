import { printUtil } from 'utils/printUtil'
import { stringify } from 'utils/stringify'

type AssertActiveElementConfig = {
  element: HTMLElement
  elementName?: string
  message?: string
  utils: JestMatcherUtils
}

export const assertActiveElement = ({
  element,
  elementName = 'element',
  message: messageContent = 'is active',
  utils,
}: AssertActiveElementConfig): jest.CustomMatcherResult => {
  let message = ''
  let pass = true

  if (document.activeElement === element) {
    message += printUtil.pass(`${elementName} ${messageContent}`, { utils })
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
