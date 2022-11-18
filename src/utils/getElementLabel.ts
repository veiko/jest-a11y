export const getElementLabel = (element: HTMLElement): string => {
  const label = element.getAttribute('aria-label')
  if (label) return label

  const labelledBy = element.getAttribute('aria-labelledby')
  if (labelledBy) {
    const labelledByElement = document.getElementById(labelledBy)
    if (labelledByElement) return labelledByElement.textContent || ''
  }

  return element.textContent || ''
}
