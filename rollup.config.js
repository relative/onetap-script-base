import nodePolyfills from 'rollup-plugin-node-polyfills'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import babel from '@rollup/plugin-babel'
import strip from '@rollup/plugin-strip'

const production = !process.env.ROLLUP_WATCH

export default {
  input: 'src/index.js',
  output: {
    file:
      'C:\\Program Files (x86)\\steam\\steamapps\\common\\Counter-Strike Global Offensive\\ot\\scripts\\base.js',
    format: 'iife',
    sourcemap: false,
  },
  plugins: [
    nodePolyfills(),
    resolve(),
    commonjs(),
    production &&
      strip({
        functions: ['debug.*'],
      }),
    babel({ babelHelpers: 'bundled', exclude: ['es.array.sort'] }),
    production && terser(),
  ],
}
