/// <reference types="jest" />

import { JestA11yMatchers } from './jest'

declare global {
  namespace jest {
    interface Matchers<R = void, T = {}> extends JestA11yMatchers<R> {}
  }
}

export {}
