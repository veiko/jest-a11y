type AssertFocusConfig = {
  element: HTMLElement
  message?: string
  utils: jest.MatcherUtils
}

export const assertFocus = ({
  element,
  message: messageContent = 'has focus',
  utils,
}: AssertFocusConfig): jest.CustomMatcherResult => {
  let message = ''
  let pass = true
  if (document.activeElement == element) {
    message += `${utils.EXPECTED_COLOR('✓')} element ${utils.EXPECTED_COLOR(
      element,
    )} ${messageContent}\n`
  } else {
    message += `${utils.RECEIVED_COLOR('✕')} element ${messageContent}\n`
    message += `    Expected element: ${utils.printExpected(element)}}\n`
    message += `    Received element: ${utils.RECEIVED_COLOR(document.activeElement)}}]\n`
    pass = false
  }
  return { message: () => message, pass }
}
