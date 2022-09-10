const path = require('path')
const rootDir = path.resolve(__dirname, '../')

module.exports = {
  rootDir,
  transform: {
    '\\.[jt]sx?$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/config/jest-setup.ts'],
  verbose: true,
  clearMocks: true,
}
