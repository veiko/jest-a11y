const unitFunc: any = (s: any) => s

export const mockUtils: JestMatcherUtils = {
  BOLD_WEIGHT: unitFunc,
  DIM_COLOR: unitFunc,
  EXPECTED_COLOR: unitFunc,
  printExpected: unitFunc,
  printReceived: unitFunc,
  RECEIVED_COLOR: unitFunc,
} as JestMatcherUtils
