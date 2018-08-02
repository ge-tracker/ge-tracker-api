import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';

// const dependencies = Object.keys(require('./package.json').dependencies);

export default {
    input: 'src/index.js',
    output: {
        name: 'geTrackerApi',
        file: 'dist/index.min.js',
        format: 'cjs',
        interop: false,
    },
    external: ['axios', 'moment', 'deepmerge'],
    plugins: [
        resolve({
            jsnext: true,
            main: true,
            browser: true,
        }),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            plugins: ['external-helpers']
        }),
        replace({
            exclude: 'node_modules/**',
            ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        }),
    ],
};