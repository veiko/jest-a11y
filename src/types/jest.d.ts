declare namespace jest {
  interface Matchers {
    /**
     * Assert whether an element has the correct role for alert.
     *
     * @example
     * <div id="targetAlert" role="alert" />
     *
     * expect(screen.getByTestId('targetAlert')).toBeAccessibleAlert()
     */
    toBeAccessibleAlert(): CustomMatcherResult
    /**
     * Assert whether an element has the correct keyboard interaction, label and role for a button.
     *
     * @example
     * <button id="targetBtn" />
     *
     * expect(screen.getByRole('button')).toBeAccessibleButton()
     */
    toBeAccessibleButton(): CustomMatcherResult
    /**
     * Assert whether an element has the correct keyboard interaction, label and role for a checkbox.
     *
     * @example
     * <input aria-label="My Checkbox" type="checkbox" />
     *
     * expect(screen.getByRole('checkbox')).toBeAccessibleCheckbox()
     */
    toBeAccessibleCheckbox(): CustomMatcherResult
  }
}
