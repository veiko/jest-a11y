import { assertAccessible, AssertAccessibleConfig } from './assertAccessible'
import { printUtil } from './printUtil'

export const assertHidden = (config: AssertAccessibleConfig): jest.CustomMatcherResult => {
  const { message, pass: fail } = assertAccessible(config)
  const pass = !fail
  const func = pass ? printUtil.pass : printUtil.fail

  return {
    message: () =>
      func(`${config.elementName || 'element'} ${config.message}`, {
        utils: config.utils,
      }),
    pass,
  }
}
