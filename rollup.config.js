import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	output: {
		file: 'public/bundle.js',
		format: 'es',
		sourcemap: true
	},
	plugins: [
		commonjs(), // converts date-fns to ES modules,
		resolve(),
		babel({
			exclude: /node_modules\/(?!wpe-lightning).+/,
			presets: [
				[
					'@babel/env',
					{
						// modules: 'false',
						targets: {
							browsers: 'safari >= 6',
							node: 8
						},
						useBuiltIns: 'usage',
						corejs: 2,
					}
				]
			]
		}),
		// production && terser() // minify, but only in production
	]
};
