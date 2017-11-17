import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

import { getMinimalData } from './build-minimal';

export default {
    input: './src/minimal-entry.js',
    output: {
      file: './dist/minimal.js',
      format: 'cjs'
    },
    plugins: [
        replace({
            CATALOG_DATA: JSON.stringify(getMinimalData())
        }),
        babel({
            exclude: 'node_modules/**'
        }),
        uglify(),
    ]
};
