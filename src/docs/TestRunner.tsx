// @ts-ignore
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'
import { TestSummary } from './TestSummary'
import theme from 'prism-react-renderer/themes/dracula'
import React, { useEffect, useState } from 'react'
import { LiveEditor, LiveError, LiveProvider } from 'react-live'

let newEl: HTMLDivElement
if (ExecutionEnvironment.canUseDOM) {
  newEl = document.createElement('div')
}

type Props = {
  children?: React.ReactNode
  className?: string
  code: string
  matcher(el: HTMLElement): Promise<jest.CustomMatcherResult>
  title: string
}

/**
 * Component to display a summary of all the tests.
 * TODO: Add a preview?
 * TODO: Classes and styles have been hard-coded for now. Ideally this would import the @theme/CodeBlock component, but
 */
export const TestRunner: React.FunctionComponent<Props> = ({ code: codeProp, matcher, title }) => {
  const [code, setCode] = useState(codeProp)
  let list: string[] = []

  useEffect(() => {
    const fetchData = async () => {
      if (newEl) {
        newEl.innerHTML = code
        list = (await matcher(newEl)).message().split('\n')
      }
    }

    fetchData()
  }, [])

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
