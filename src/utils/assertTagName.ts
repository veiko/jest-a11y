import { printUtil } from 'utils/printUtil'

type AssertTagNameConfig = {
  element: HTMLElement
  message?: string
  tagName: string
}

export const assertTagName = ({
  element,
  message: msg,
  tagName,
}: AssertTagNameConfig): jest.CustomMatcherResult => {
  let message = ''
  let pass = true

  if (element.tagName.toLowerCase() === tagName.toLowerCase()) {
    message += printUtil.pass(msg || `element has tagName ${tagName.toLowerCase()}`)
  } else {
    message += printUtil.fail(msg || `element has tagName ${tagName.toLowerCase()}`)
    pass = false
  }
  return { message: () => message, pass }
}
