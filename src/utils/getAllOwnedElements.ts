export const getAllOwnedElements = (el: HTMLElement): HTMLElement[] => {
  const ariaOwns = el.getAttribute('aria-owns')?.split(' ') || []

  let ownedElements: HTMLElement[] = []
  if (ariaOwns.length) {
    ownedElements = Array.from(document.querySelectorAll<HTMLElement>(ariaOwns.join(',')))
  }

  return ownedElements
}
