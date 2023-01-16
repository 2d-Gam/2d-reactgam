import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import {
  terser
} from 'rollup-plugin-terser';

export default [ {
  input: './src/2d-Reactgam.js',
  output: [
  {
    file: 'dist/2d-reactgam.js',
    format: 'cjs',
  },
  {
    file: 'dist/2d-reactgam.es.js',
    format: 'es',
    exports: 'named',
  },
  {
    file: 'umd/2d-reactgam.min.js',
    format: 'umd',
    name: '2d-reactgam',
  }
    
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react']
    }),
    external(),
    resolve(),
    terser()
  ]
}];