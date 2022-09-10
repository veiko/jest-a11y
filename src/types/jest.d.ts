declare namespace jest {
  interface Matchers {
    /**
     * Assert whether a tooltip appears when hovering over an element.
     *
     * @example
     * <button id="targetBtn" />
     * <Tooltip target="targetBtn" />
     *
     * expect(screen.getByRole('button')).toToggleTooltip()
     * expect(screen.getByRole('button')).not.toToggleTooltip()
     */
    toBeAccessibleButton(): CustomMatcherResult
  }
}
