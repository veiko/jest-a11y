import { assertAttribute } from 'utils/assertAttribute'
import { printUtil } from 'utils/printUtil'

type ValueCheck = (value: string) => boolean

type AssertCheckedConfig = {
  /** the element that will be tested */
  element: HTMLElement
  /** the name of the element in the output message */
  elementName?: string
  /** string to replace the default message with */
  message?: string
  /** The expected value of the attribute  */
  checked?: boolean
}

/**
 * Function to assert whether an element has an attribute
 * @param {HTMLElement} config.element element to perform the check on
 * @param {string} [config.elementName=element] string value that will be used in the output message
 * @returns boolean
 */
export const assertChecked = ({
  element,
  elementName = 'element',
  message: messageContent,
  checked = false,
}: AssertCheckedConfig): jest.CustomMatcherResult => {
  let message = ''
  let pass = true

  if (element.tagName === 'INPUT' && !element.hasAttribute('aria-checked')) {
    if (checked === (element as HTMLInputElement).checked) {
      message += printUtil.pass(`${elementName} ${messageContent || `is checked`}`)
    } else {
      message += printUtil.fail(
        `${elementName} ${messageContent || `is${!checked ? '' : ' not'} checked`}`,
        {
          expected: `${elementName} to be ${checked ? 'checked' : 'not checked'}`,
          received: element,
        },
      )
      pass = false
    }
  } else {
    const checkedCheck = assertAttribute({
      attribute: 'aria-checked',
      element,
      elementName,
      message: checked ? 'is checked' : 'is not checked',
      value: checked ? 'true' : 'false',
    })
    message += checkedCheck.message()
    pass = pass ? checkedCheck.pass : pass
  }

  return { message: () => message, pass }
}
