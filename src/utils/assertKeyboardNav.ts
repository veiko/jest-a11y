import userEvent from '@testing-library/user-event'
import { ReactPropTypes } from 'react'
import { assertBlur } from './assertBlur'
import { assertFocus } from './assertFocus'
import { printUtil } from './printUtil'

type AssertKeyboardNavConfig = {
  element: HTMLElement
  // @see https://www.w3.org/TR/uievents-key/#keys-modifier
  key: string // 'ArrowDown' | 'ArrowUp' | 'ArrowLeft' | 'ArrowRight'
  passMessage?: string
  nextElement?: HTMLElement
  utils: JestMatcherUtils
}

export const assertKeyboardNav = ({
  element,
  key,
  passMessage = 'element supports arrow keyboard navigation',
  nextElement,
  utils,
}: AssertKeyboardNavConfig): jest.CustomMatcherResult & { activeElement: HTMLElement } => {
  let message = ''
  let pass = true

  userEvent.keyboard(key)
  const activeElement = document.activeElement as HTMLElement

  const blurCheck = assertBlur({ element, utils })
  message += blurCheck.message()
  pass = pass ? blurCheck.pass : false

  if (nextElement) {
    const focusCheck = assertFocus({ element, utils })
    message += focusCheck.message()
    pass = pass ? focusCheck.pass : false
  }

  return {
    activeElement,
    message: () => (pass ? printUtil.pass(passMessage, { utils }) : message),
    pass,
  }
}
