const path = require('path')
const rootDir = path.resolve(__dirname, '../')

module.exports = {
  rootDir,
  transform: {
    '\\.[t]sx?$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/config/jest-setup.js'],
  verbose: true,
  clearMocks: true,
}
