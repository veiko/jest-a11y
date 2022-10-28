// @see https://github.com/facebook/jest/blob/a20bd2c31e126fc998c2407cfc6c1ecf39ead709/packages/jest-matcher-utils/src/index.ts
import { format as prettyFormat, plugins as prettyFormatPlugins } from 'pretty-format'

const {
  AsymmetricMatcher,
  DOMCollection,
  DOMElement,
  Immutable,
  ReactElement,
  ReactTestComponent,
} = prettyFormatPlugins

const PLUGINS = [
  ReactTestComponent,
  ReactElement,
  DOMElement,
  DOMCollection,
  Immutable,
  AsymmetricMatcher,
]

export const stringify = (
  object: unknown,
  maxDepth: number = 10,
  maxWidth: number = 10,
): string => {
  const MAX_LENGTH = 10000
  let result

  try {
    result = prettyFormat(object, {
      maxDepth,
      maxWidth,
      min: true,
      plugins: PLUGINS,
    })
  } catch {
    result = prettyFormat(object, {
      callToJSON: false,
      maxDepth,
      maxWidth,
      min: true,
      plugins: PLUGINS,
    })
  }

  if (result.length >= MAX_LENGTH && maxDepth > 1) {
    return stringify(object, Math.floor(maxDepth / 2), maxWidth)
  } else if (result.length >= MAX_LENGTH && maxWidth > 1) {
    return stringify(object, maxDepth, Math.floor(maxWidth / 2))
  } else {
    return result
  }
}
