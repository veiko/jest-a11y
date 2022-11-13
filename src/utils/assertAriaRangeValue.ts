/**
 * The aria-valuenow attribute defines the current value for range widgets. It is similar to the value attribute of <progress>, <meter>, and <input> of type range, number and all the date-time types.
 * When creating a range type role, including meter, scrollbar, slider, and spinbutton on a non-semantic element, the aria-valuenow enables defining a current numeric value between the minimum and maximum values. The minimum and maximum values are defined with aria-valuemin and aria-valuemax.
 * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow
 */
import { assertAttribute } from './assertAttribute'
import { printUtil } from './printUtil'

type AssertAriaRangeValueConfig = {
  element: HTMLElement
  message?: string
  nowRequired?: boolean
  utils: JestMatcherUtils
}

export const assertAriaRangeValues = ({
  element,
  message: messageContent,
  // per MDN web docs, aria-valuenow is optional if indeterminate
  // per WAI, this is not mentioned, so leaving the option to disable in the future
  nowRequired = true,
  utils,
}: AssertAriaRangeValueConfig) => {
  let message = ''
  let pass = true

  if (nowRequired) {
    const nowCheck = assertAttribute({ attribute: 'aria-valuenow', element, utils })
    message += nowCheck.message()
    pass = nowCheck.pass
  }

  const now = element.getAttribute('aria-valuenow')?.length
    ? parseFloat(element.getAttribute('aria-valuenow') || '0')
    : undefined
  const max = parseFloat(element.getAttribute('aria-valuemax') || '0')
  const min = parseFloat(element.getAttribute('aria-valuemin') || '0')

  if (true) {
    message = ''
    if (min >= max) {
      message += printUtil.fail(
        `element has aria-valuemin set to a decimal number less than aria-valuemax`,
        {
          expected: `aria-valuemin < ${max}`,
          received: `${min}`,
          utils,
        },
      )
      pass = false
    } else {
      message += printUtil.pass(
        'element has aria-valuemin set to a decimal value less than aria-valuemax',
        { utils },
      )
    }
    if (nowRequired && !now) {
      message += printUtil.fail(`element has valid aria-valuenow`, {
        expected: `decimal number greater than ${min} and less than ${max}, inclusive`,
        utils,
      })
      pass = false
    } else if (now !== undefined && (now > max || now < min)) {
      message += printUtil.fail(`element ${messageContent || `has valid aria-valuenow`}`, {
        expected: `decimal number greater than ${min} and less than ${max}, inclusive`,
        received: `decimal number (${now}) is ${now > max ? 'greater' : 'less'} than ${
          now > max ? max : min
        }`,
        utils,
      })
      pass = false
    } else {
      message += printUtil.pass(`element ${messageContent || `has valid aria-valuenow`}`, {
        utils,
      })
    }
  }

  // console.log(pass, message)
  return { message: () => message, pass }
}
