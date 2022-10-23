export const printUtil = {
  fail: (msg: string, utils: any) => `${utils.RECEIVED_COLOR('✕')} ${utils.DIM_COLOR(msg)}\n`,
  pass: (msg: string, utils: any) => `${utils.EXPECTED_COLOR('✓')} ${utils.DIM_COLOR(msg)}\n`,
}
