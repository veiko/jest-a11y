import { printUtil } from './printUtil'

type ValueCheck = (value: string) => boolean

type AssertAttributeConfig = {
  /** the attribute that will be tested */
  attribute: string
  /** the element that will be tested */
  element: HTMLElement
  /** the name of the element in the output message */
  elementName?: string
  /** string to replace the default message with */
  message?: string
  /** JestMatcherUtils */
  utils: JestMatcherUtils
  /** The expected value of the attribute  */
  value?: string | ValueCheck
}

export const assertAttribute = ({
  attribute,
  element,
  elementName = 'element',
  message: messageContent,
  utils,
  value,
}: AssertAttributeConfig): jest.CustomMatcherResult => {
  let message = ''
  let pass = true

  const valueCheck: ValueCheck = typeof value === 'function' ? value : (v: string) => v === value

  if (element.hasAttribute(attribute)) {
    if (value && valueCheck(element.getAttribute(attribute) || '')) {
      message += printUtil.pass(
        `${elementName} ${messageContent || `has ${attribute}="${value}"`}`,
        {
          utils,
        },
      )
    } else if (value) {
      message += printUtil.fail(
        `${elementName} ${messageContent || `has ${attribute}="${value}"`}`,

        {
          expected: typeof value === 'function' ? undefined : value,
          received: element.getAttribute(attribute),
          utils,
        },
      )
      pass = false
    } else {
      message += printUtil.pass(
        `${elementName} ${messageContent || `has attribute ${attribute}`}`,
        {
          utils,
        },
      )
    }
  } else {
    message += printUtil.fail(`${elementName} ${messageContent || `has attribute ${attribute}`}`, {
      received: element,
      utils,
    })
    pass = false
  }
  return { message: () => message, pass }
}
