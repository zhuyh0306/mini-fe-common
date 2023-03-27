// @ts-nocheck
import vue from 'rollup-plugin-vue';
import css from 'rollup-plugin-css-only'
import pkg from './package.json' assert {type: 'json'}
import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
export const file = type => `dist/${pkg.name}.${type}.js`
export const name =pkg.name
const overrides = {
    compilerOptions: {
        declaration: false,
  
    }
}
export default {
    input: 'src/index.ts',
    plugins: [
        nodeResolve(),
        typescript({ tsconfigOverride: overrides}),
        vue(),
        css({ output: 'bundle.css' }),

    ],

    external: [
        'vue','lodash-es'
    ]
}