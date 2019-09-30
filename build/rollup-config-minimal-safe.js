import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
    input: './src/minimal-safe.js',
    output: {
      file: './dist/minimal-safe.js',
      format: 'cjs'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        uglify({
            mangle: { toplevel: true }
        }),
    ]
};
