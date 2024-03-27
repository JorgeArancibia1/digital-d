module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [ 'eslint:recommended', 'plugin:@typescript-eslint/recommended' ],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [ '.eslintrc.{js,cjs,astro}' ],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [ '@typescript-eslint' ],
	ignorePatterns: [ 'temp.js', '*/vendor/.js', 'env.d.ts', '.eslintrc.cjs'],
	rules: {
		// "key-spacing": ["error", { "beforeColon": false,"afterColon": false, "mode": "false" }],
		// "space-in-parens": ["error", "always"],
		indent: [ 'error', 'tab' ],
		'no-multiple-empty-lines': [ 'error', { max: 1, maxEOF: 0 } ],
		'linebreak-style':  [ 'error', process.platform === 'win32' ? 'windows' : 'unix' ], // enforces CRLF or
		quotes: [ 'error', 'single' ],
		semi: [ 'error', 'always' ],
		'react/react-in-jsx-scope': 'off',
		// 'react/jsx-filename-extension': [
		// 	1,
		// 	{ extensions: [ '.js', '.jsx', '.tsx', '.ts' ] },
		// ],
		'no-irregular-whitespace': 0,
		'react/prop-types': 0,
		'@typescript-eslint/no-explicit-any': 'off',
		'ts-expect-error': 0,
		'typescript-eslint/ban-ts-comment': 0,
		'no-console': 'warn',
		'no-use-before-define': 'warn',
		'consistent-return': 2,
		'no-else-return': 1,
		'space-unary-ops': 2,
		'eol-last': [ 'error', 'never' ],
		'no-multi-spaces': [ 'error', { ignoreEOLComments: true } ],
		'no-trailing-spaces': 'error',
		'object-curly-spacing': [
			'error',
			'always',
			{
				objectsInObjects: false,
				arraysInObjects: false,
			},
		],
		'space-infix-ops': [ 'error', { int32Hint: false } ],
		'computed-property-spacing': [
			'error',
			'never',
			{ enforceForClassMembers: true },
		],
		'array-bracket-spacing': [
			'error',
			'always',
			{
				singleValue: true,
				objectsInArrays: true,
				arraysInArrays: true,
			},
		],
		'spaced-comment': [
			'error',
			'always',
			{
				line: {
					markers: [ '/' ],
					exceptions: [ '-', '+' ],
				},
				block: {
					markers: [ '!' ],
					exceptions: [ '*' ],
					balanced: true,
				},
			},
		],
	},
};
