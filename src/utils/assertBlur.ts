import { printUtil } from './printUtil'

type AssertBlurConfig = {
  element: HTMLElement
  message?: string
  utils: JestMatcherUtils
}

export const assertBlur = ({
  element,
  message: messageContent = 'has lost focus (blurred)',
  utils,
}: AssertBlurConfig): jest.CustomMatcherResult => {
  let message = ''
  let pass = true
  if (document.activeElement != element) {
    message += printUtil.pass(`element ${utils.printExpected(element)} ${messageContent}`, {
      utils,
    })
  } else {
    message += printUtil.fail(`element ${utils.printReceived(element)} ${messageContent}`, {
      hints: `    Received: ${utils.printReceived(document.activeElement)}`,
      utils,
    })
    pass = false
  }
  return { message: () => message, pass }
}
