export const getChildrenWithRole = (
  element: HTMLElement,
  { role, tagName }: { role: Role; tagName?: string },
): HTMLElement[] => Array.from(element.querySelectorAll(`${tagName},[role="${role}"]`))
