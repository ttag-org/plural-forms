import babel from 'rollup-plugin-babel';
import data from '../src/catalog';

export default {
    input: './src/simple-entry.js',
    output: {
      file: './dist/simple.js',
      format: 'cjs'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
    ]
};
