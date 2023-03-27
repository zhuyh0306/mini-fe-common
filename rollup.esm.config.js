// @ts-nocheck
import baseConfig, { file, name } from './rollup.base.config.js'
import dts from 'rollup-plugin-dts';
import vue from 'rollup-plugin-vue';
import css from 'rollup-plugin-css-only'
import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
const overrides = {
    compilerOptions: {
        declaration: false,
  
    }
}
export default [{
    ...baseConfig,
    input: 'src/index.ts',
    output: {
        name,
        file: file('esm'),
        format:'es'
    },
},
{
    input:'src/index.ts',
    plugins: [
        nodeResolve(),
        typescript({ tsconfigOverride: overrides}),
        vue(),
        css(),
        dts(),    ],
    output: {
        format: 'esm',
        file: 'dist/index.d.ts',
    },
}
]