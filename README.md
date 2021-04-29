## What is this?

A Next.js starter configuration involving the following tools

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
  - [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
  - [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
  - [eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript)
  - [custom config](https://github.com/Etzeo/nextjs-ts-eslint-commitlint-husky/blob/main/.eslintrc.js)
- [husky (v6)](https://github.com/typicode/husky)
  - commit-msg
    - [commitlint](https://commitlint.js.org/#/)
  - pre-commit
    - [lint-staged](https://github.com/okonet/lint-staged)
      - '\*\*/\*.{js,jsx,ts,tsx}': 'eslint --fix'
      - '\*\*/\*.{css,md,json}': 'prettier --write'
      - '\*\*/\*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit'
