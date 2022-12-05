import React from 'react'

const determineClass = (line: string) => {
  if (line.includes('✓')) return 'code-block-test-pass'
  if (line.includes('✕')) return 'code-block-test-fail'
  return ''
}

const getTotals = (list: string[]) => {
  let passed = 0
  let total = 0

  list.forEach(line => {
    line.includes('✓') && passed++
    ;(line.includes('✓') || line.includes('✕')) && total++
  })

  return { passed, total }
}

const validTestList = (line: string) => {
  return line.includes('✓') || line.includes('✕')
}

type Props = {
  addChecks: boolean
  list: string[]
  showTotal?: boolean
}

/**
 * Component to display a summary of all the tests.
 * TODO: Classes and styles have been hard-coded for now. Ideally this would import the Prism component?
 */
export const TestSummary: React.FunctionComponent<Props> = ({ addChecks = true, list = [], showTotal }) => {
  const { passed, total } = getTotals(list)
  return (
    <div
      className="test-summary codeBlockContent_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module"
      style={{ '--prism-color': '#F8F8F2', '--prism-background-color': '#282A36' } as React.CSSProperties}
    >
      <pre className="prism-code language-html codeBlock_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module thin-scrollbar">
        <code className="codeBlockLines_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module">
          <ul style={{ margin: 0, listStyleType: 'none', padding: 0 }}>
            {list
              .filter(t => addChecks || validTestList(t))
              .map(item => {
                const className = addChecks ? 'code-block-test-pass' : determineClass(item)
                return (
                  <li className={`token-line ${className}`} key={item} style={{ color: 'rgb(248, 248, 242)' }}>
                    {addChecks ? (
                      <span className="token plain">
                        <i aria-hidden="true" className="fa-solid fa-check" style={{ color: 'var(--green)', fontSize: '80%' }} /> {item}
                      </span>
                    ) : (
                      <span className="token plain">{item}</span>
                    )}
                    <br />
                  </li>
                )
              })}
          </ul>
          {showTotal && (
            <>
              <br />
              &nbsp; Tests: <strong className="code-green">{passed} passed</strong>, {total} total
            </>
          )}
        </code>
      </pre>
    </div>
  )
}
