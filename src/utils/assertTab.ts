import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup'
import { assertFocus } from 'utils/assertFocus'
import { getFirstFocusableElement } from 'utils/getFirstFocusableElement'

type AssertTabOptions = {
  includeChildren?: boolean
  resetFocus?: boolean
}

type AssertTabConfig = {
  element: HTMLElement
  elementName?: string
  options?: AssertTabOptions
  userEvent: UserEvent
}

export const assertTab = async ({
  element,
  elementName = 'element',
  options: { includeChildren, resetFocus } = {},
  userEvent,
}: AssertTabConfig): Promise<jest.CustomMatcherResult> => {
  let message = ''
  let pass = true

  await userEvent.tab()

  const focusCheck = assertFocus({
    element,
    elementName,
    message: 'is part of tab sequence',
  })

  if (includeChildren && !focusCheck.pass) {
    const childCheck = assertFocus({
      element: getFirstFocusableElement(element) as HTMLElement,
      elementName: "element (or element's child)",
      message: 'is part of tab sequence',
    })
    message += childCheck.message()
    pass = pass ? childCheck.pass : false
  } else {
    message += focusCheck.message()
    pass = pass ? focusCheck.pass : false
  }

  if (resetFocus) {
    await userEvent.tab({ shift: true })
  }

  return { message: () => message, pass }
}
