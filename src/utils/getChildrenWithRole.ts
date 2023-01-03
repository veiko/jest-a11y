export const getChildrenWithRole = (
  element: HTMLElement,
  { role, tag }: { role: Role; tag?: string },
): HTMLElement[] => Array.from(element.querySelectorAll(`${tag},[role="${role}"]`))
