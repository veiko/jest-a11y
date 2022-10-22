import { closest } from './closest'
import { pfail, ppass } from './printPass'

type AssertClosestConfig = {
  /**
   * A description of the element that will pass test
   */
  description: string
  element: HTMLElement
  message?: string
  test(element: HTMLElement): boolean
  utils: jest.MatcherUtils
}

type AssertClosestResult = jest.CustomMatcherResult & {
  closest: HTMLElement | null
}

export const assertClosest = ({
  description,
  element,
  message: msg,
  test,
  utils,
}: AssertClosestConfig): AssertClosestResult => {
  let message = ''
  let pass = true
  const closestEl = closest(element, test)

  if (closestEl) {
    message += ppass(msg || `element is wrapped in an element ${description}`, utils)
  } else {
    message += pfail(msg || `element is wrapped in an element ${description}`, utils)
    pass = false
  }
  return { closest: closestEl, message: () => message, pass }
}
