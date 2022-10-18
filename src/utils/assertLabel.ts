import { getAttribute, hasChildren } from 'utils'

type AssertLabelConfig = {
  element: HTMLElement
  utils: jest.MatcherUtils
}

const hasAriaLabel = (el: HTMLElement) =>
  getAttribute(el, 'aria-label') || getAttribute(el, 'aria-labelledby')

export const assertLabel = ({ element, utils }: AssertLabelConfig): jest.CustomMatcherResult => {
  if (!hasChildren(element) && !hasAriaLabel(element)) {
    /**
     * The button has an accessible label.
     * By default, the accessible name is computed from any text content inside the button element.
     * However, it can also be provided with aria-labelledby or aria-label.
     */
    return {
      pass: false,
      message: () => `${utils.RECEIVED_COLOR('✕')} element has accessible label\n
    By default, the accessible name is computed from any text content inside the
    element. However, it can also be provided with aria-labelledby or aria-label.
      Text content: ${utils.printReceived(element.innerHTML)}
      aria-label: ${utils.printReceived(getAttribute(element, 'aria-label'))}
      aria-labelledby: ${utils.printReceived(getAttribute(element, 'aria-labelledby'))}\n\n`,
    }
  }
  return {
    message: () => `${utils.EXPECTED_COLOR('✓')} element has accessible label\n`,
    pass: true,
  }
}
