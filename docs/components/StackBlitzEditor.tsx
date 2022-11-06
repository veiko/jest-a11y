import React from 'react'

const UIButton = ({ color }) => <div style={{ backgroundColor: color, borderRadius: '40px', height: '14px', width: '14px' }} />

/**
 * Config options:
 * https://developer.stackblitz.com/platform/webcontainers/project-config#with-project-files
 * https://developer.stackblitz.com/platform/webcontainers/project-config#with-url-parameters
 * https://developer.stackblitz.com/guides/integration/embedding#embed-url-options
 */
export const StackBlitzEditor = ({ children, ...props }) => {
  return (
    <div className="stack-blitz-editor">
      <div className="stack-blitz-editor-bar">
        <UIButton color="#fc5753" />
      </div>
      <iframe
        src="https://stackblitz.com/edit/node-7zbwpa?embed=1&ctl=1&file=index.js,index.test.js&terminal=test&view=editor&terminalHeight=50&hideExplorer=1"
        style={{ width: '100%', height: '600px', border: 0, borderRadius: '4px', overflow: 'hidden' }}
      ></iframe>
    </div>
  )
}
