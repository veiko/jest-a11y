import { assertAccessible, AssertAccessibleConfig } from './assertAccessible'
import { printUtil } from './printUtil'

export const assertHidden = (config: AssertAccessibleConfig): jest.CustomMatcherResult => {
  const { pass: fail } = assertAccessible(config)
  const pass = !fail
  const func = pass ? printUtil.pass : printUtil.fail

  return {
    message: () => func(`${config.elementName || 'element'} ${config.message}`, {}),
    pass,
  }
}
