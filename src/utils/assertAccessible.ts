import { printUtil } from './printUtil'

export type AssertAccessibleConfig = {
  element: HTMLElement
  elementName?: string
  message?: string
}

export const assertAccessible = ({
  element,
  elementName = 'element',
  message: messageContent = 'is accessible',
}: AssertAccessibleConfig): jest.CustomMatcherResult => {
  let message = ''
  let pass = true
  if (element.hidden === true) {
    message += printUtil.fail(`${elementName} has hidden attribute set to true`)
    pass = false
  }

  if (element.getAttribute('aria-hidden') === 'true') {
    message += printUtil.fail(`${elementName} has aria-hidden attribute set to true`)
    pass = false
  }

  const window = element.ownerDocument.defaultView
  if (window!.getComputedStyle(element).visibility === 'hidden') {
    message += printUtil.fail(`${elementName} has visibility set to hidden`)
    pass = false
  }

  if (window!.getComputedStyle(element).display === 'none') {
    message += printUtil.fail(`${elementName} has display set to none`)
    pass = false
  }

  return {
    message: () => (pass ? printUtil.pass(`${elementName} ${messageContent}`) : message),
    pass,
  }
}
