import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import postcss from 'rollup-plugin-postcss';

import yarnJson from './package.json'

export default {
    input: './src/index.ts',
    output: [
        {
            file: yarnJson.main,
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: yarnJson.module,
            format: 'esm',
            sourcemap: true,
        }
    ],
    plugins: [peerDepsExternal(), resolve(), commonjs(), typescript(), postcss()]
};
