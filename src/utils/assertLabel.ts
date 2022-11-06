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
  options?: AssertLabelOptions
  utils: JestMatcherUtils
}

const hasAriaLabel = (el: HTMLElement) =>
  getAttribute(el, 'aria-label') || getAttribute(el, 'aria-labelledby')

export const assertLabel = ({
  element,
  options: { testTextContent = true } = {},
  utils,
}: AssertLabelConfig): jest.CustomMatcherResult => {
  if (testTextContent && !hasChildren(element) && !hasAriaLabel(element)) {
    return {
      pass: false,
      message: () => `${utils.RECEIVED_COLOR('✕')} element has accessible label\n
    By default, the accessible name is computed from any text content inside the
    element. However, it can also be provided with aria-labelledby or aria-label.
      Text content: ${utils.printReceived(element.innerHTML)}
      aria-label: ${utils.printReceived(getAttribute(element, 'aria-label'))}
      aria-labelledby: ${utils.printReceived(getAttribute(element, 'aria-labelledby'))}\n\n`,
    }
  } else if (!testTextContent && !hasAriaLabel(element)) {
    return {
      pass: false,
      message: () => printUtil.fail('element has accessible label', { utils }),
    }
  }
  return {
    message: () => printUtil.pass('element has accessible label', { utils }),
    pass: true,
  }
}
