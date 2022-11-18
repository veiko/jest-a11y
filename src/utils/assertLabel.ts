import React from 'react'
import { getAttribute, hasChildren } from 'utils'
import { printUtil } from './printUtil'

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
  utils: JestMatcherUtils
}

const hasAriaLabel = (el: HTMLElement) =>
  getAttribute(el, 'aria-label') || getAttribute(el, 'aria-labelledby')

export const assertLabel = ({
  element,
  elementName = 'element',
  options: { testTextContent = true } = {},
  utils,
}: AssertLabelConfig): jest.CustomMatcherResult => {
  if (testTextContent && !hasChildren(element) && !hasAriaLabel(element)) {
    return {
      pass: false,
      message: () =>
        printUtil.fail(`${elementName} has accessible label`, {
          hints: `By default, the accessible name is computed from any text content inside the element. However, it can also be provided with aria-labelledby or aria-label.
      Text content: ${utils.printReceived(element.innerHTML)}
      aria-label: ${utils.printReceived(getAttribute(element, 'aria-label'))}
      aria-labelledby: ${utils.printReceived(getAttribute(element, 'aria-labelledby'))}\n\n`,
          utils,
        }),
    }
  } else if (!testTextContent && !hasAriaLabel(element)) {
    return {
      pass: false,
      message: () => printUtil.fail(`${elementName} has accessible label`, { utils }),
    }
  }
  return {
    message: () => printUtil.pass(`${elementName} has accessible label`, { utils }),
    pass: true,
  }
}
