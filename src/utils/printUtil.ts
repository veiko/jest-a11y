export const printUtil = {
  fail: (msg: string, utils: JestMatcherUtils) => `${utils.RECEIVED_COLOR('✕')} ${utils.DIM_COLOR(msg)}\n`,
  pass: (msg: string, utils: JestMatcherUtils) => `${utils.EXPECTED_COLOR('✓')} ${utils.DIM_COLOR(msg)}\n`,
}
