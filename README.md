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

Sometimes you will see the following error:

> There might be a problem with the project dependency tree.
> It is likely not a bug in Create React App, but something you need to fix locally.
>
> The react-scripts package provided by Create React App requires a dependency:
>
> ...

You can create a .env file and add 'SKIP_PREFLIGHT_CHECK=true'

## Development

React is for developing a single page application. `<App />` is root component. If there are different bounded domains / context, react-router can be used for routing.

## Debugging

Visual studio code supports to debug react app. Debugger for Chrome extension should be installed first.

Set the break points in the code, add the launch.json or it can be automatically generated in .vscode folder. Make sure the port is 3000 and `npm start` is run. The break points will be hit then.

```js
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "Launch Chrome against localhost",
            "url": "http://localhost:3000",
            "webRoot": "${workspaceFolder}"
        }
    ]
}
```

## Build

`npm run build`

`npm install -g serve`

`serve -s build`
