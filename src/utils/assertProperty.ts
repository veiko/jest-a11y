import { printUtil } from './printUtil'

type ValueCheck = (value: string | boolean) => boolean

type AssertPropertyConfig = {
  /** the property that will be tested */
  property: string
  /** the element that will be tested */
  element: HTMLElement
  /** the name of the element in the output message */
  elementName?: string
  /** string to replace the default message with */
  message?: string
  /** The expected value of the property  */
  value?: string | boolean | ValueCheck
}

export const assertProperty = ({
  property,
  element,
  elementName = 'element',
  message: messageContent,
  value,
}: AssertPropertyConfig): jest.CustomMatcherResult => {
  let message = ''
  let pass = true

  const valueCheck: ValueCheck =
    typeof value === 'function' ? value : (v: string | boolean) => v === value

  if ((element as any)[property] !== undefined) {
    if (value !== undefined && valueCheck((element as any)[property])) {
      message += printUtil.pass(`${elementName} ${messageContent || `has ${property}="${value}"`}`)
    } else if (value !== undefined) {
      message += printUtil.fail(
        `${elementName} ${messageContent || `has ${property}="${value}"`}`,

        {
          expected: typeof value === 'function' ? undefined : `${value}`,
          received: (element as any)[property],
        },
      )
      pass = false
    } else {
      message += printUtil.pass(`${elementName} ${messageContent || `has property ${property}`}`)
    }
  } else {
    message += printUtil.fail(`${elementName} ${messageContent || `has property ${property}`}`, {
      received: `${(element as any)[property]}`,
    })
    pass = false
  }
  return { message: () => message, pass }
}
