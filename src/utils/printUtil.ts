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

export const printUtil = {
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
  pass: (msg: string, { utils = MatcherUtils }: Config = {}) =>
    `${utils.EXPECTED_COLOR('✓')} ${utils.DIM_COLOR(msg)}\n`,
  testingElement: (msg: string, { element, pass, utils = MatcherUtils }: TestingConfig) => {
    const printFunc = pass ? utils.EXPECTED_COLOR : utils.RECEIVED_COLOR
    return `\n${printFunc('● Testing element:')} ${element.outerHTML}\n\n${msg}`
  },
}
