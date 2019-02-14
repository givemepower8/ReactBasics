# React Basics

## Setup environment

`create-react-app react-basics` to create the boilerplate

### Add ESLint and Prettier

`npm i -D eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react`

`npm i -D prettier eslint-config-prettier eslint-plugin-prettier`

`npm i -D husky lint-staged pretty-quick`

add the .eslintrc and .prettierrc file

in package.json

```js
  "precommit": "NODE_ENV=production lint-staged",
  "lint-staged": {
    "*.{js,jsx}": [
      "pretty-quick --staged",
      "eslint src/ --fix",
      "git add"
    ]
  },
```

create a .env file and add 'SKIP_PREFLIGHT_CHECK=true'
