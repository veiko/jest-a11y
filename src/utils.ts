export const getAttribute = (el: HTMLElement, name: string) =>
  el.attributes.getNamedItem(name)?.value

export const getRole = (el: HTMLElement) => getAttribute(el, 'role')

export const hasAriaLabel = (el: HTMLElement) =>
  getAttribute(el, 'aria-label') || getAttribute(el, 'aria-labelledby')

export const hasChildren = (el: HTMLElement) => el.childElementCount > 0 || el.innerHTML.length

export const hasButtonRole = (el: HTMLElement) =>
  el.tagName === 'BUTTON' || getRole(el) === 'button'
