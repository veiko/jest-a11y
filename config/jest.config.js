const path = require('path')
const rootDir = path.resolve(__dirname, '../')

module.exports = {
  clearMocks: true,
  moduleDirectories: ['node_modules', 'src'],
  rootDir,
  setupFilesAfterEnv: ['<rootDir>/config/jest-setup.js'],
  transform: {
    '\\.[t]sx?$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/examples/'],
  verbose: true,
}
