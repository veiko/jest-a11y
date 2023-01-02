import userEvent from '@testing-library/user-event'
import { assertAttribute } from 'utils/assertAttribute'
import { assertChecked } from 'utils/assertChecked'
import { printUtil } from 'utils/printUtil'

/**
 * This assertion is used to check arrow navigation between radio buttons.
 * Right Arrow and Down Arrow: move focus to the next radio button in the group, uncheck the previously focused button, and check the newly focused button. If focus is on the last button, focus moves to the first button.
 * Left Arrow and Up Arrow: move focus to the previous radio button in the group, uncheck the previously focused button, and check the newly focused button. If focus is on the first button, focus moves to the last button.
 * @param param0
 */
type AssertArrowNavConfig = {
  elements: HTMLElement[]
  elementName?: string
  message?: string
}

type AssertSingleArrowNavConfig = {
  elementName?: string
  nextElement: HTMLElement
  key: string
  message?: string
}

const keys = [
  { key: '{arrowright}', direction: 1 },
  { key: '{arrowdown}', direction: 1 },
  { key: '{arrowleft}', direction: -1 },
  { key: '{arrowup}', direction: -1 },
]

const assertSingleArrowNav = ({
  elementName = 'element',
  key,
  message: messageContent = `${elementName} navigates with ${key} and checks next element`,
  nextElement,
}: AssertSingleArrowNavConfig): jest.CustomMatcherResult => {
  let message = ''
  let pass = true

  userEvent.keyboard(key)

  // FIXME: can not check focus on radio button, jest-dom does not auto-focus the element on keyboard nav
  // const activeCheck = assertActiveElement({
  //   element: nextElement,
  //   elementName,
  //   utils,
  // })
  // message += activeCheck.message()
  // pass = pass ? activeCheck.pass : pass

  const attributeCheck = assertChecked({
    element: nextElement,
    elementName,
    checked: true,
  })
  message += attributeCheck.message()
  pass = pass ? attributeCheck.pass : pass

  return {
    message: () => (pass ? printUtil.pass(messageContent) : message),
    pass,
  }
}

const getNextIdx = ({ dir, idx = 0, length }: { dir: number; idx: number; length: number }) => {
  if (dir === 1) {
    return idx === length - 1 ? 0 : idx + 1
  } else {
    return idx === 0 ? length - 1 : idx - 1
  }
}

export const assertArrowNav = ({
  elements,
  elementName = 'element',
  message: messageContent = 'navigates with arrow keys',
}: AssertArrowNavConfig): jest.CustomMatcherResult => {
  let pass = true
  let message = ''

  keys.forEach(({ key, direction }) => {
    let activeElement: number | undefined = undefined
    let ct = 0 // protect against infinite loop
    while (activeElement !== 0 && ct < 100) {
      const nextElement = getNextIdx({
        dir: direction,
        idx: activeElement || 0,
        length: elements.length,
      })
      const navCheck = assertSingleArrowNav({
        elementName,
        key,
        nextElement: elements[nextElement],
      })

      message += navCheck.message()
      pass = pass ? navCheck.pass : pass
      activeElement = nextElement
      ct++
    }
  })

  return {
    message: () => (pass ? printUtil.pass(messageContent) : message),
    pass,
  }
}
