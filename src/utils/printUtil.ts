type Config = { hints?: string; utils: JestMatcherUtils }
type FailConfig = { expected?: string; received?: string } & Config

export const printUtil = {
  fail: (msg: string, { expected, hints, received, utils }: FailConfig) => {
    let message = `${utils.RECEIVED_COLOR('✕')} ${utils.DIM_COLOR(msg)}${
      hints?.length ? `\n\n${hints}\n` : ''
    }\n`
    if (expected) {
      message += `\n  Expected: ${utils.printExpected(expected)}\n`
    }
    if (received) {
      message += `  Received: ${utils.printReceived(received)}\n\n`
    }
    return message
  },
  pass: (msg: string, { utils }: Config) =>
    `${utils.EXPECTED_COLOR('✓')} ${utils.DIM_COLOR(msg)}\n`,
}
