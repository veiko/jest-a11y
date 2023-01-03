import { render as rtlRender } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { printUtil } from './printUtil'

// Strip ANSI from the given string
export function stripAnsi(string: string) {
  const pattern = [
    '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
    '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))',
  ].join('|')

  return string.replace(new RegExp(pattern, 'g'), '')
}

/**
 * Custom matcher to be used internally to validate test failures
 */
export function toFailWith(
  this: any,
  received: jest.CustomMatcherResult,
  expected: string,
): jest.CustomMatcherResult {
  let message = ''
  let pass = true
  if (received.pass) {
    pass = false
    message = 'expected to fail'
  }
  if (!stripAnsi(received.message()).includes(`✕ ${expected}`)) {
    pass = false
    message = printUtil.fail('fail message does not match', {
      expected: `✕ ${expected}`,
      received: stripAnsi(received.message()),
    })
  }
  return { pass, message: () => message }
}

/**
 * Custom matcher to be used internally to validate test passes
 */
export function toPassWith(
  this: any,
  received: jest.CustomMatcherResult,
  expected: string,
): jest.CustomMatcherResult {
  let message = ''
  let pass = true
  if (!received.pass) {
    pass = false
    message = 'expected to pass'
  }
  if (!stripAnsi(received.message()).includes(`✓ ${expected}`)) {
    pass = false
    message = printUtil.fail('incorrect message', {
      expected: `✓ ${expected}`,
      received: stripAnsi(received.message()),
    })
  }
  return { pass, message: () => message }
}
