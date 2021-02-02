import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';

const extensions = [
    '.js', '.jsx', '.ts', '.tsx',
];

const name = 'geTrackerApi';

export default {
    input: './src/index.ts',
    // output: {
    //     name: 'geTrackerApi',
    //     file: 'dist/index.min.js',
    //     format: 'cjs',
    // },
    output: [{
        file: pkg.main,
        format: 'cjs',
    }, {
        file: pkg.module,
        format: 'es',
    }, {
        file: pkg.browser,
        format: 'iife',
        name,

        // https://rollupjs.org/guide/en/#outputglobals
        globals: {
            moment: 'moment',
            axios: 'Axios',
            deepmerge: 'merge',
        },
    }],

    // Do not include these modules in the bundle
    external: ['axios', 'moment', 'deepmerge'],

    plugins: [
        // Allows node_modules resolution
        nodeResolve({extensions}),

        // Bundle CJS modules
        commonjs(),

        // typescript({
        //     tsconfig: './tsconfig.json'
        // }),

        // Compile TypeScript/JavaScript
        babel({
            extensions,
            babelHelpers: 'bundled',
            include: ['src/**/*'],
            exclude: './node_modules/**'
        }),

        // replace({
        //     exclude: './node_modules/**',
        //     ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        // }),
    ],
};
