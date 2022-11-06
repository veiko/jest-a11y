import { printUtil } from './printUtil'

type AssertAttributeConfig = {
  attribute: string
  element: HTMLElement
  message?: string
  utils: JestMatcherUtils
  value?: string
}

export const assertAttribute = ({
  attribute,
  element,
  message: messageContent,
  utils,
  value,
}: AssertAttributeConfig): jest.CustomMatcherResult => {
  let message = ''
  let pass = true
  if (element.hasAttribute(attribute)) {
    if (value && element.getAttribute(attribute) === value) {
      message += printUtil.pass(`element ${messageContent || `has ${attribute}="${value}"`}`, {
        utils,
      })
    } else if (value) {
      message += printUtil.fail(`element ${messageContent || `has ${attribute}="${value}"`}`, {
        utils,
      })
      pass = false
    } else {
      message += printUtil.pass(`element ${messageContent || `has attribute ${attribute}`}`, {
        utils,
      })
    }
  } else {
    message += printUtil.fail(`element ${messageContent || `has attribute ${attribute}`}`, {
      utils,
    })
    pass = false
  }
  return { message: () => message, pass }
}
