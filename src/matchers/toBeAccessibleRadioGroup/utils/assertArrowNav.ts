import userEvent from '@testing-library/user-event'
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

const assertSingleArrowNav = async ({
  elementName = 'element',
  key,
  message: messageContent = `${elementName} navigates with ${key} and checks next element`,
  nextElement,
}: AssertSingleArrowNavConfig): Promise<jest.CustomMatcherResult> => {
  await userEvent.keyboard(key)

  // FIXME: can not check focus on radio button, jest-dom does not auto-focus the element on keyboard nav
  // const activeCheck = assertActiveElement({
  //   element: nextElement,
  //   elementName,
  //   utils,
  // })
  // message += activeCheck.message()
  // pass = pass ? activeCheck.pass : pass

  const checkCheck = assertChecked({
    element: nextElement,
    elementName,
    checked: true,
  })

  return {
    message: () =>
      checkCheck.pass
        ? messageContent
        : printUtil.fail(`${elementName} failed to become checked`, { received: nextElement }),
    pass: checkCheck.pass,
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

  keys.forEach(async ({ key, direction }) => {
    let activeElement: number | undefined = undefined
    let ct = 0 // protect against infinite loop
    while (activeElement !== 0 && ct < 100) {
      const nextElement = getNextIdx({
        dir: direction,
        idx: activeElement || 0,
        length: elements.length,
      })

      if (elements[nextElement]) {
        const navCheck = await assertSingleArrowNav({
          elementName,
          key,
          nextElement: elements[nextElement],
        })

        if (navCheck.pass) {
          message += navCheck.message()
          pass = pass ? navCheck.pass : pass
          activeElement = nextElement
          ct++
        } else {
          message += printUtil.fail(`navigation to ${elements[nextElement]} failed`)
          message += navCheck.message()

          return { message: () => message, pass: false }
        }
      } else {
        message += printUtil.fail(`${elementName} with index ${nextElement} does not exist`, {
          received: `${elements.length} elements: \n${elements.map(el => el.outerHTML).join('\n')}`,
        })

        return { message: () => message, pass: false }
      }
    }
  })

  return {
    message: () => (pass ? printUtil.pass(messageContent) : message),
    pass,
  }
}
