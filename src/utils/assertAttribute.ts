// FIXME: Have to use relative paths to be able to import this into AccordionTestRunner
import { printUtil } from '../utils/printUtil'

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
  /** The expected value of the attribute  */
  value?: string | ValueCheck
}

/**
 * Function to assert whether an element has an attribute
 * @param {string} config.attribute name of the attribute to check
 * @param {HTMLElement} config.element element to perform the check on
 * @param {string} [config.elementName=element] string value that will be used in the output message
 * @returns boolean
 */
export const assertAttribute = ({
  attribute,
  element,
  elementName = 'element',
  message: messageContent,
  value,
}: AssertAttributeConfig): jest.CustomMatcherResult => {
  let message = ''
  let pass = true

  const valueCheck: ValueCheck = typeof value === 'function' ? value : (v: string) => v === value

  if (element.hasAttribute(attribute)) {
    if (value && valueCheck(element.getAttribute(attribute) || '')) {
      message += printUtil.pass(`${elementName} ${messageContent || `has ${attribute}="${value}"`}`)
    } else if (value) {
      message += printUtil.fail(
        `${elementName} ${messageContent || `has ${attribute}="${value}"`}`,

        {
          expected: typeof value === 'function' ? undefined : value,
          received: element.getAttribute(attribute),
        },
      )
      pass = false
    } else {
      message += printUtil.pass(`${elementName} ${messageContent || `has attribute ${attribute}`}`)
    }
  } else {
    message += printUtil.fail(`${elementName} ${messageContent || `has attribute ${attribute}`}`, {
      received: element,
    })
    pass = false
  }
  return { message: () => message, pass }
}
