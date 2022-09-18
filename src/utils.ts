export const getAttribute = (el: HTMLElement, name: string) =>
  el.attributes.getNamedItem(name)?.value

export const getRole = (el: HTMLElement) => getAttribute(el, 'role')

export const hasChildren = (el: HTMLElement) => el.childElementCount > 0 || el.innerHTML.length
