import { printUtil } from './printUtil'

type AssertTagNameConfig = {
  element: HTMLElement
  message?: string
  tagName: string
  utils: jest.MatcherUtils
}

export const assertTagName = ({
  element,
  message: msg,
  tagName,
  utils,
}: AssertTagNameConfig): jest.CustomMatcherResult => {
  let message = ''
  let pass = true

  if (element.tagName.toLowerCase() === tagName.toLowerCase()) {
    message += printUtil.pass(msg || `element has tagName ${tagName.toLowerCase()}`, utils)
  } else {
    message += printUtil.fail(msg || `element has tagName ${tagName.toLowerCase()}`, utils)
    pass = false
  }
  return { message: () => message, pass }
}
