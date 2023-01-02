import { printUtil } from './printUtil'

function ansiRegex({ onlyFirst = false } = {}) {
  const pattern = [
    '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
    '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))',
  ].join('|')

  return new RegExp(pattern, onlyFirst ? undefined : 'g')
}

export function stripAnsi(string: string) {
  if (typeof string !== 'string') {
    throw new TypeError(`Expected a \`string\`, got \`${typeof string}\``)
  }

  return string.replace(ansiRegex(), '')
}

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
    message = printUtil.fail('incorrect message', {
      expected: `✕ ${expected}`,
      received: stripAnsi(received.message()),
    })
  }
  return { pass, message: () => message }
}

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
