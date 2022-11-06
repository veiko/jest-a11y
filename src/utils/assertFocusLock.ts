import userEvent from '@testing-library/user-event'
import { getAllFocusableElements } from './getAllFocusableElements'
import { printUtil } from './printUtil'

type AssertFocusConfig = {
  element: HTMLElement
  message?: string
  utils: JestMatcherUtils
}

export const assertFocusLock = ({
  element,
  utils,
}: AssertFocusConfig): jest.CustomMatcherResult => {
  let message = ''
  let pass = true

  let elements = []
  elements = getAllFocusableElements(element)

  if (!elements.length) {
    return {
      message: () => printUtil.pass(`element has no focusable elements`, { utils }),
      pass: true,
    }
  }

  const firstActiveElement = elements[0]

  // tab to the first element
  firstActiveElement.focus()

  let currentActiveElement: Element | null = null

  let ct = 0
  while (currentActiveElement !== firstActiveElement && currentActiveElement?.tagName !== 'BODY') {
    userEvent.tab()
    currentActiveElement = document.activeElement

    if (!elements.includes(currentActiveElement as HTMLElement)) {
      message = printUtil.fail(
        `focus outside of element
    Received: ${utils.printReceived(currentActiveElement)}`,
        { utils },
      )
      pass = false
      break
    }

    ct++

    if (ct > 1000) {
      pass = false
      message = printUtil.fail(`loop detected`, { utils })
      break
    }
  }
  return { message: () => message, pass }
}
