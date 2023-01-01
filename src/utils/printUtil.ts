import * as MatcherUtils from 'jest-matcher-utils'

export const matcherUtils = MatcherUtils
export type ExpectedOrReceived = string | Element | HTMLElement | null

type Config = {
  hints?: string
  /**
   * @deprecated
   */
  utils?: JestMatcherUtils
}

type FailConfig = {
  expected?: ExpectedOrReceived
  received?: ExpectedOrReceived
} & Config

type TestingConfig = {
  element: HTMLElement
  pass: boolean
  /**
   * @deprecated
   */
  utils?: JestMatcherUtils
}

/**
 * Truncates element and displays only tag name and content
 */
function truncateElement(
  element: HTMLElement,
  { show = [], length = 60 }: { show?: string[]; length?: number } = {},
) {
  return element.outerHTML.length > length
    ? `<${element.tagName.toLowerCase()} ${show
        .map(attr => `${attr}="${element.getAttribute(attr)}"`)
        .join(' ')}...>${element.innerHTML}</${element.tagName.toLowerCase()}>`
    : element.outerHTML
}

export const printUtil = {
  /** Formats a message for a failed test */
  fail: (msg: string, { expected, hints, received, utils = MatcherUtils }: FailConfig = {}) => {
    let message = `${utils.RECEIVED_COLOR('✕')} ${utils.DIM_COLOR(msg)}${
      hints?.length ? `\n\n  ${hints}` : ''
    }\n`
    if (expected || received) message += '\n'
    if (expected) {
      message += `  Expected: ${utils.printExpected(expected)}\n`
    }
    if (received) {
      message += `  Received: ${utils.printReceived(received)}\n\n`
    }
    return message
  },
  /** Formats a message for a passing test */
  pass: (msg: string, { utils = MatcherUtils }: Config = {}) =>
    `${utils.EXPECTED_COLOR('✓')} ${utils.DIM_COLOR(msg)}\n`,
  /** Formats a message for testing a single element, useful when looping through multiple elements and displaying the current tested element */
  testingElement: (msg: string, { element, pass, utils = MatcherUtils }: TestingConfig) => {
    const printFunc = pass ? utils.EXPECTED_COLOR : utils.RECEIVED_COLOR
    return `\n${printFunc('●')} Testing: ${truncateElement(element)}\n\n${msg}`
  },
  truncateElement,
}
