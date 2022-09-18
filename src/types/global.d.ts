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
  type Role = 'button' | 'checkbox'
}

export {}
