import userEvent from '@testing-library/user-event'

type AssertTabConfig = {
  element: HTMLElement
  utils: jest.MatcherUtils
}

export const assertTab = ({ element, utils }: AssertTabConfig): jest.CustomMatcherResult => {
  let message = ''
  let pass = true
  userEvent.tab()
  try {
    expect(element).toHaveFocus()
    message += `${utils.EXPECTED_COLOR('✓')} element can be reached with Tab\n`
  } catch (e) {
    pass = false
    message += `${utils.RECEIVED_COLOR('✕')} element can be reached with Tab\n\n`
    message += `  Expected element with focus:\n    ${utils.printExpected(element)} to have focus\n`
    message += `  Received element with focus:\n    ${utils.printReceived(
      document.activeElement,
    )}\n\n`
  }
  return { message: () => message, pass }
}
