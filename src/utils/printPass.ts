export const pfail = (msg: string, utils: any) =>
  `${utils.RECEIVED_COLOR('✕')} ${utils.DIM_COLOR(msg)}\n`
export const ppass = (msg: string, utils: any) =>
  `${utils.EXPECTED_COLOR('✓')} ${utils.DIM_COLOR(msg)}\n`
