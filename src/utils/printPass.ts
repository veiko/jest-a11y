import { matcherUtils } from './printUtil'

export const pfail = (msg: string, utils: any = matcherUtils) =>
  `${utils.RECEIVED_COLOR('✕')} ${utils.DIM_COLOR(msg)}\n`
export const ppass = (msg: string, utils: any = matcherUtils) =>
  `${utils.EXPECTED_COLOR('✓')} ${utils.DIM_COLOR(msg)}\n`
