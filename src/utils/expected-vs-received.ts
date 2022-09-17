type Config = {
  expected: string
  received?: string
  utils: jest.MatcherUtils
}

export const failExpectedVsReceived = (msg: string, { expected, received, utils }: Config) => {
  return {
    pass: false,
    message: () => `${msg}:
      
Expected: ${utils.printExpected(expected)}
Received: ${utils.printReceived(received)}`,
  }
}
