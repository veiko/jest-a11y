const unitFunc: any = (s: any) => s

export const mockUtils: JestMatcherUtils = {
  DIM_COLOR: unitFunc,
  EXPECTED_COLOR: unitFunc,
  printExpected: unitFunc,
  printReceived: unitFunc,
  RECEIVED_COLOR: unitFunc,
} as JestMatcherUtils
