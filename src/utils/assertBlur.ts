import { matcherUtils, printUtil } from 'utils/printUtil'

type AssertBlurConfig = {
  element: HTMLElement
  message?: string
}

export const assertBlur = ({
  element,
  message: messageContent = 'has lost focus (blurred)',
}: AssertBlurConfig): jest.CustomMatcherResult => {
  let message = ''
  let pass = true
  if (document.activeElement != element) {
    message += printUtil.pass(`element ${matcherUtils.printExpected(element)} ${messageContent}`)
  } else {
    message += printUtil.fail(`element ${messageContent}`, {
      received: document.activeElement,
    })
    pass = false
  }
  return { message: () => message, pass }
}
