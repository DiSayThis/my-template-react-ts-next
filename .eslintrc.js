module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['eslint:recommended', 'next/core-web-vitals', 'plugin:prettier/recommended'],
	plugins: ['@typescript-eslint'],
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			parser: '@typescript-eslint/parser',
			extends: [
				'eslint:recommended',
				'plugin:@typescript-eslint/eslint-recommended',
				'plugin:@typescript-eslint/recommended',
				'next/core-web-vitals',
				'plugin:prettier/recommended',
			],
			parserOptions: {
				project: ['./tsconfig.json'],
			},
		},
		{
			files: ['*.json'],
			extends: ['eslint:recommended', 'plugin:json/recommended', 'plugin:prettier/recommended'],
		},
	],
	rules: {
		semi: 'off',
		'@typescript-eslint/semi': ['warn'],
		'@typescript-eslint/dot-notation': 'off',
		'@typescript-eslint/explicit-function-return-type': ['warn'],
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/no-unused-vars': ['off'],
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/lines-between-class-members': 'off',
		'@typescript-eslint/no-unused-expressions': 'error',
		'@typescript-eslint/no-empty-interface': [
			'warn',
			{
				allowSingleExtends: true,
			},
		],
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				useTabs: true,
				semi: true,
				trailingComma: 'all',
				bracketSpacing: true,
				printWidth: 120,
				endOfLine: 'auto',
			},
		],
		// 'react/jsx-props-no-spreading': 'off',
	},
};
