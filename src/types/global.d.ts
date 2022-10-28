import type * as jestMatcherUtils from 'jest-matcher-utils'

declare namespace NodeJS {
  export interface Global {
    extend: any
  }
  export interface Window {
    extend: any
  }
}

export const thisIsAModule = true

declare const extend: any
declare global {
  var extend: string
  type Role = 'alert' | 'alertdialog' | 'button' | 'checkbox' | 'dialog' | 'link'
  type JestMatcherUtils = typeof jestMatcherUtils
}

export {}
