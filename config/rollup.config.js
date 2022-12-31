import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import copy from 'rollup-plugin-copy'
import pkg from '../package.json'

const sharedPlugins = [nodeResolve(), commonjs(), typescript()]
const sharedConfig = { input: 'src/index.ts', plugins: sharedPlugins }

export default [
  {
    input: 'src/matchers/index.ts',
    output: [{ file: 'lib/matchers/index.cjs', format: 'commonjs', sourcemap: true }],
    plugins: sharedPlugins,
  },
  {
    ...sharedConfig,
    output: [{ file: pkg.module, format: 'esm', sourcemap: true }],
    plugins: sharedPlugins,
  },
  {
    ...sharedConfig,
    output: [{ file: pkg.main, format: 'commonjs', sourcemap: true }],
    plugins: [
      ...sharedPlugins,
      copy({
        targets: [{ src: ['src/types/*', '!src/types/global.d.ts'], dest: 'lib/types' }],
      }),
    ],
  },
]
