import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';

const NODE_ENV = process.env.NODE_ENV;

const config = {
  output: {
    format: 'umd',
    name: 'ReactGithubRenderer',
    exports: 'named',
  },
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonjs({
      'invariant': ['named']
    }),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
    }),
  ],
  external: ['react'],
  globals: {
    'react': 'React'
  },
};

if (NODE_ENV === 'production') {
  config.plugins.push(uglify());
}

export default config;
