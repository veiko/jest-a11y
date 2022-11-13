import React from 'react'

/**
 * Component to display a summary of all the tests.
 * TODO: Classes and styles have been hard-coded for now. Ideally this would import the Prism component?
 */
export const TestSummary = ({ list }) => {
  return (
    <div
      className="codeBlockContent_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module"
      style={{ '--prism-color': '#F8F8F2', '--prism-background-color': '#282A36' } as React.CSSProperties}
    >
      <pre className="prism-code language-html codeBlock_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module thin-scrollbar">
        <code className="codeBlockLines_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module">
          {list.map(item => (
            <span className="token-line code-block-test-pass" style={{ color: 'rgb(248, 248, 242)' }}>
              <span className="token plain">✓ {item}</span>
              <br />
            </span>
          ))}
        </code>
      </pre>
    </div>
  )
}
