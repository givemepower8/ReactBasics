# React Basics

You can run the samples locally. Also the site is hosted on [http://reactbasics.gingerstudio.net](http://reactbasics.gingerstudio.net).

## Samples

After `npm start`, click the link and view the results in browser. Check the code in the html.

- [Like button](http://localhost:3000/samples/like_button.html)
- [tic tac toe game](http://localhost:3000/samples/tictactoe.html) is from [reactjs tutorial](https://reactjs.org/tutorial/tutorial.html)

Main concepts on [reactjs docs](https://reactjs.org/docs/)

- [01.Hello World](http://localhost:3000/mainconcepts/01.HelloWorld.html)
- [02.Introducing JSX](http://localhost:3000/mainconcepts/02.IntroducingJSX.html)
- [03.Rendering Elements](http://localhost:3000/mainconcepts/03.RenderingElements.html)
- [04.Components and Props](http://localhost:3000/mainconcepts/04.ComponentsAndProps.html)
- [05.State and Lifecycle - Clock](http://localhost:3000/mainconcepts/05.StateAndLifecycleClock.html)
- [06.Handling Events Toggle](http://localhost:3000/mainconcepts/06.HandlingEventsToggle.html)
- [07.Conditional Rendering](http://localhost:3000/mainconcepts/07.ConditionalRendering.html)
- [08.List and Keys - Blog](http://localhost:3000/mainconcepts/08.ListAndKeysBlog.html)
- [08.List and Keys - Numbers](http://localhost:3000/mainconcepts/08.ListAndKeysNumbers.html)
- [09.Forms Multiple Inputs](http://localhost:3000/mainconcepts/09.FormsMultipleInputs.html)
- [09.Forms - Select](http://localhost:3000/mainconcepts/09.FormsSelect.html)
- [10.Lifting State Up](http://localhost:3000/mainconcepts/10.LiftingStateUp.html)
- [11.Composition vs Inheritance](http://localhost:3000/mainconcepts/11.CompositionVsInheritance.html)
- [12.Thinking in React](http://localhost:3000/mainconcepts/12.ThinkingInReact.html)

React Router examples

## Setup environment

### Dev

`create-react-app react-basics` to create the boilerplate.

It's recommended to use Visual Studio Code as the code editor.

#### Add ESLint and Prettier to VS Code

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

### Local environment

Use [serve](https://www.npmjs.com/package/serve) as a static web server to start from the build folder.

`npm install -g serve`

`serve -s build`

### Build and deploy

Run `npm run build` which will prepare the deploy package in build folder.

Copy the files in the build folder to the web server folder to deploy the app.

### Common Issues

When you use auto format while saving in VS Code, for jsx files, the formatting sometimes will get wrong. Add the following in setting.json

```js
"beautify.ignore": [
        "**/*.js",
        "**/*.jsx"
    ]
```

Sometimes you will see the following error:

> There might be a problem with the project dependency tree.
> It is likely not a bug in Create React App, but something you need to fix locally.
>
> The react-scripts package provided by Create React App requires a dependency:
>
> ...

You can create a .env file and add 'SKIP_PREFLIGHT_CHECK=true'

### React Router

React is for developing a single page application. `<App />` is root component. If there are different bounded domains / context, react-router can be used for routing.

[React Router](https://github.com/ReactTraining/react-router)

[React Router docs](https://reacttraining.com/react-router/web/guides/philosophy)

## Test

`npm i @types/jest` and enable jest in .eslintrc

```js
"env": {
    "jest": true
}
```

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
