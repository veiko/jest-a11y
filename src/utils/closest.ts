export const closest = (element: HTMLElement, condition: (el: HTMLElement) => boolean) => {
  let el: HTMLElement | null = element
  while (el) {
    if (condition(el)) {
      return el
    }
    el = el.parentElement
  }
  return null
}
