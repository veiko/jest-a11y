import merge from 'deepmerge'
import {createBasicConfig} from '@open-wc/building-rollup'
import typescript from '@rollup/plugin-typescript'
import pkg from './package.json'

const baseConfig = createBasicConfig()

export default merge(baseConfig, {
  input: './src/index.ts',
  output: [{file: pkg.main, format: 'esm', sourcemap: true}],
  plugins: [typescript()],
})
