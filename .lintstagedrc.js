module.exports = {
  '**/*.{js,jsx,ts,tsx}': 'eslint --fix',
  '**/*.{css,md,json}': 'prettier --write',
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
};
