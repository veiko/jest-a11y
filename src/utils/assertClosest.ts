import { closest } from './closest'
import { printUtil } from './printUtil'

type AssertClosestConfig = {
  /**
   * A description of the element that will pass test
   */
  description: string
  /**
   * The element to test
   */
  element: HTMLElement
  /**
   * If set, will display this message instead of the default
   */
  message?: string
  /**
   * An additional test to perform on the element
   * @param element HTMLElement
   */
  test(element: HTMLElement): boolean
}

type AssertClosestResult = jest.CustomMatcherResult & {
  closest: HTMLElement | null
}

export const assertClosest = ({
  description,
  element,
  message: messageProp,
  test,
}: AssertClosestConfig): AssertClosestResult => {
  let message = ''
  let pass = true
  const closestEl = closest(element, test)

  if (closestEl) {
    message += printUtil.pass(messageProp || `element is wrapped in an element ${description}`)
  } else {
    message += printUtil.fail(messageProp || `element is wrapped in an element ${description}`)
    pass = false
  }
  return { closest: closestEl, message: () => message, pass }
}
