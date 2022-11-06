type Config = { hints?: string; utils: JestMatcherUtils }

export const printUtil = {
  fail: (msg: string, { hints, utils }: Config) =>
    `${utils.RECEIVED_COLOR('✕')} ${utils.DIM_COLOR(msg)}${
      hints?.length ? `\n\n${hints}\n` : ''
    }\n`,
  pass: (msg: string, { utils }: Config) =>
    `${utils.EXPECTED_COLOR('✓')} ${utils.DIM_COLOR(msg)}\n`,
}
