module.exports = {
  'pre-commit': 'npx lint-staged --config .config/lint-staged.js',
  'commit-msg': 'npx commitlint --edit --config .config/commitlint.js',
}
