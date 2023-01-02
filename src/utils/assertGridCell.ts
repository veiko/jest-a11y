import { assertKeyboardInactive } from 'utils/assertKeyboardInactive'
import { assertKeyboardNav } from 'utils/assertKeyboardNav'
import { assertRole } from 'utils/assertRole'
import { getFirstFocusableElement } from 'utils/getFirstFocusableElement'

type Config = {
  coords: [number, number]
  element: HTMLElement
  tableMeta: { colcount: number; rowcount: number }
}

/**
 * 1. element has role gridcell
 * 2. element is focusable, or has a focusable child
 * 3. arrow keyboard navigation works
 */
export const assertGridCell = ({
  coords: [colidx, rowidx],
  element,
  tableMeta: { colcount, rowcount },
}: Config): jest.CustomMatcherResult => {
  let message = ''
  let pass = true
  const roleCheck = assertRole({
    element,
    role: 'gridcell',
  })
  message += '  ' + roleCheck.message()
  pass = pass ? roleCheck.pass : false

  // If this is not the last cell
  const focusableCellElement = getFirstFocusableElement(element) || element
  const navRightCheck =
    colidx === colcount - 1
      ? assertKeyboardInactive({
          element: focusableCellElement,
          key: '{arrowright}',
          passMessage: 'element is last in row and does not navigate right',
        })
      : assertKeyboardNav({
          element: focusableCellElement,
          key: '{arrowright}',
          passMessage: 'element navigates with {arrowRight}',
        })
  message += '  ' + navRightCheck.message()
  pass = pass ? navRightCheck.pass : false

  return {
    message: () => message,
    pass: pass,
  }
}
