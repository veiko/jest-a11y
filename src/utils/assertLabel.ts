import { getAttribute, hasChildren } from 'utils'
import { matcherUtils, printUtil } from 'utils/printUtil'
import { closest } from './closest'

// @see https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#labelable
const labelableContent = ['BUTTON', 'INPUT', 'METER', 'OUTPUT', 'PROGRESS', 'SELECT', 'TEXTAREA']

type AssertLabelOptions = {
  /**
   * If true, the assertion will check for the element's text content as well as its aria-label.
   */
  testTextContent?: boolean
}

type AssertLabelConfig = {
  element: HTMLElement
  elementName?: string
  options?: AssertLabelOptions
}

const hasAriaLabel = (el: HTMLElement) =>
  getAttribute(el, 'aria-label') || getAttribute(el, 'aria-labelledby')

export const assertLabel = ({
  element,
  elementName = 'element',
  options: { testTextContent = true } = {},
}: AssertLabelConfig): jest.CustomMatcherResult => {
  // If the element is labelable, it can be nested inside a <label>
  if (labelableContent.includes(element.tagName)) {
    if (closest(element, el => el.tagName === 'LABEL')) {
      return {
        message: () => printUtil.pass(`${elementName} has accessible label`),
        pass: true,
      }
    }
  }

  if (element.id && document.querySelector(`label[for="${element.id}"]`)) {
    return {
      message: () => printUtil.pass(`${elementName} has accessible label`),
      pass: true,
    }
  }

  if (testTextContent && !hasChildren(element) && !hasAriaLabel(element)) {
    return {
      pass: false,
      message: () =>
        printUtil.fail(`${elementName} has accessible label`, {
          hints: `The accessible name can be computed from any text content inside the element. However, it can also be provided with aria-labelledby or aria-label.
      Text content: ${matcherUtils.printReceived(element.innerHTML)}
      aria-label: ${matcherUtils.printReceived(getAttribute(element, 'aria-label'))}
      aria-labelledby: ${matcherUtils.printReceived(getAttribute(element, 'aria-labelledby'))}\n\n`,
          received: element,
        }),
    }
  } else if (!testTextContent && !hasAriaLabel(element)) {
    return {
      pass: false,
      message: () => printUtil.fail(`${elementName} has accessible label`, { received: element }),
    }
  }

  return {
    message: () => printUtil.pass(`${elementName} has accessible label`),
    pass: true,
  }
}
