import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

export default {
    input: 'src/index.js',
    output: {
        name: 'geTrackerApi',
        file: 'dist/index.min.js',
        format: 'cjs',
    },
    external: ['axios', 'moment', 'deepmerge'],
    plugins: [
        nodeResolve({
            jsnext: true,
            main: true,
            browser: true,
        }),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            plugins: ['@babel/plugin-external-helpers'],
            babelHelpers: 'external',
        }),
        replace({
            exclude: 'node_modules/**',
            ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        }),
    ],
};
