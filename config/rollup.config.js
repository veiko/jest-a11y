import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import pkg from '../package.json'

export default [
  {
    input: './src/index.ts',
    output: [{ file: pkg.main, format: 'esm', sourcemap: true }],
    plugins: [nodeResolve(), commonjs(), typescript()],
  },
  {
    input: './src/types/index.d.ts',
    output: [{ file: pkg.types, format: 'esm' }],
    plugins: [dts()],
  },
]
