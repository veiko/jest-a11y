import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup'
import { getAllFocusableElements } from 'utils/getAllFocusableElements'
import { matcherUtils, printUtil } from 'utils/printUtil'

type AssertFocusConfig = {
  element: HTMLElement
  message?: string
  userEvent: UserEvent
}

export const assertFocusLock = async ({
  element,
  userEvent,
}: AssertFocusConfig): Promise<jest.CustomMatcherResult> => {
  let message = ''
  let pass = true

  let elements = []
  elements = getAllFocusableElements(element)

  if (!elements.length) {
    return {
      message: () => printUtil.pass(`element has no focusable elements`),
      pass: true,
    }
  }

  const firstActiveElement = elements[0]

  // tab to the first element
  firstActiveElement.focus()

  let currentActiveElement: Element | null = null

  let ct = 0
  while (currentActiveElement !== firstActiveElement && currentActiveElement?.tagName !== 'BODY') {
    await userEvent.tab()
    currentActiveElement = document.activeElement

    if (!elements.includes(currentActiveElement as HTMLElement)) {
      message = printUtil.fail(
        `focus outside of element
    Received: ${matcherUtils.printReceived(currentActiveElement)}`,
      )
      pass = false
      break
    }

    ct++

    if (ct > 1000) {
      pass = false
      message = printUtil.fail(`loop detected`)
      break
    }
  }
  return { message: () => message, pass }
}
