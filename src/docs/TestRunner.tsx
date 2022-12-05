import theme from 'prism-react-renderer/themes/dracula'
import React, { useState } from 'react'
import { LiveEditor, LiveError, LiveProvider } from 'react-live'
import { TestSummary } from './TestSummary'

type Props = {
  children?: React.ReactNode
  className?: string
  code: string
  matcher(el: HTMLElement): jest.CustomMatcherResult
  title: string
}

const newEl = document.createElement('div')

/**
 * Component to display a summary of all the tests.
 * TODO: Add a preview?
 * TODO: Classes and styles have been hard-coded for now. Ideally this would import the @theme/CodeBlock component, but
 */
export const TestRunner: React.FunctionComponent<Props> = ({ code: codeProp, matcher, title }) => {
  const [code, setCode] = useState(codeProp)

  newEl.innerHTML = code
  const list = matcher(newEl).message().split('\n')

  return (
    <LiveProvider code={code} language="jsx" theme={theme}>
      <div className="test-runner with-title">
        {title && <div className="test-runner-title">{title}</div>}
        <LiveEditor autoFocus={false} className="live-editor" onChange={setCode} />
        <TestSummary addChecks={false} list={list} showTotal />
        <LiveError className="test-runner-error" />
      </div>
    </LiveProvider>
  )
}
