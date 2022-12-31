/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const path = require('path')
const rootDir = path.resolve(__dirname, '../src')

module.exports = {
  clearMocks: true,
  moduleDirectories: ['node_modules', 'src'],
  preset: 'ts-jest',
  rootDir,
  setupFilesAfterEnv: ['<rootDir>/../config/jest-setup.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/examples/'],
}
