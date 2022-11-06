import { getAllFocusableElements } from './getAllFocusableElements'

export const getFirstFocusableElement = (container: HTMLElement): HTMLElement | undefined =>
  getAllFocusableElements(container)[0]
