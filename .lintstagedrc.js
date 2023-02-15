const path = require('path');

const nextLintFixCommand = (filenames) =>
	`next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`;

const prettierWriteCommand = (filenames) =>
	`npx prettier --write ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`;

const stylelintFixCommand = (filenames) =>
	`npx stylelint ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`;

const gitAddCommand = (filenames) => `git add ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`;

module.exports = {
	'*.{js,jsx,ts,tsx,json}': [prettierWriteCommand, nextLintFixCommand, gitAddCommand],
	'*.css': [prettierWriteCommand, stylelintFixCommand, gitAddCommand],
};
