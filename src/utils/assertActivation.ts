import userEvent from '@testing-library/user-event'
import { ExpectedOrReceived, printUtil } from './printUtil'

type ActivationCheck = { expected: ExpectedOrReceived; pass: boolean; received: ExpectedOrReceived }

type AssertActivationConfig = {
  activateOnEnter?: boolean
  activateOnSpace?: boolean
  element: HTMLElement
  elementName?: string
  message?: string
  onActivate(): ActivationCheck
}

/** TODO */
export const assertActivation = ({
  activateOnEnter = true,
  activateOnSpace = true,
  element,
  elementName = 'element',
  onActivate,
}: AssertActivationConfig): jest.CustomMatcherResult => {
  let message = ''
  let pass = true

  element.focus()
  userEvent.keyboard('{space}')
  const result = onActivate()
  if (result.pass) {
    message += printUtil.pass(`${elementName} activated on {space}`)
  } else {
    message += printUtil.fail(`${elementName} activated on {space}`, {
      expected: result.expected,
      received: result.received,
    })
    pass = false
  }

  return { message: () => message, pass }
}
