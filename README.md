# Boilerplate for React/Node Apps

## About
This project is boilerplate code, created to serve as starting point for new JavaScript applications.

## Tech stack
+ React (with Hooks and Context) for frontend
+ webpack (+babel) for bundling
+ Scss for style
+ Node (Express) for backend
+ Jest for testing

## Content

#### Public directory (/public)
Contains entry point for application (./index.html), and site favicon. Also here webpack builds frontend js bundle (./dist).

#### Sourcecode directory(/src)
This directory is divided in two parts: client-side (/client) and server-side (/server) code.

Code base for client-side consists of:
+ components (/components) - directory for React Components, with two examples:
  + HomePage - App's home page, connected to App's store
  + NotFoundPage - page that renders for error 404
+ context (/context/AppContext.js) - context and context provider, with React useContext hook
+ store (/store/AppStore.js) - in which is stored App's state (single state of truth), and passed on to rest of application via AppContext
+ router (/router/AppRouter.js) - client-side router, with React Router DOM
+ styles (/styles) - directory for stylesheets:
  + main stylesheet file (/styles.scss) - import all stylesheets here, serves as table of content for App's styles
  + basic config files (/base) - configuration stylesheets 
  + components stylesheets (/components) - stylesheets for individual components

Server-side code:
+ Node/Express server - for testing purpose splitted in two files: app.js and server.js
+ routers (/routers):
  + api (/api.js) - example of backend router, consists of one route that returns info about project from package.json
  + client (/client.js) - setup for client-side routing

#### Tests directory (/tests)
Place for Jest unit test files.

## Usage

#### Install node modules
```
$ npm install
```

#### Scripts
+ ##### build:dev
Builds React App in development mode.
```
$ npm run build:dev
```

+ ##### build:prod
Builds React App in production mode.
```
$ npm run build:prod
```

+ ##### start
Starts up Express server.
```
$ npm start
```

+ ##### dev-server
When file changes in the project directory are detected, automatically builds App in development mode and starts up server. See [nodemon](https://www.npmjs.com/package/nodemon).
```
$ npm run dev-server
```

+ ##### test
Run tests in [jest](https://jestjs.io/).
```
$ npm test
```

#### Open app in browser
+ ##### default app address
```
http://localhost:3000/
```

+ ##### default api address
```
http://localhost:3000/api/info
```

## Terms of Use
By downloading and using this software, you agree to the [license](https://github.com/mmarkovic85/react-node-boilerplate/blob/master/LICENSE).

## Version history
+ 1.0.6 -- 01.08.2020.
  + bumped up npm outdated packages:
    + @babel/core
    + @babel/preset-env
    + css-loader
    + jest
    + regenerator-runtime
    + webpack
  + major security vulnerability fix

+ 1.0.5 -- 20.07.2020.
  + bumped up npm outdated packages:
    + @babel/core
    + @babel/preset-env
    + @babel/preset-react
    + sass-loader
  + minor security vulnerability fix

+ 1.0.4 -- 26.06.2020.
  + bumped up npm outdated packages:
    + @babel/core
    + @babel/preset-env
    + css-loader
    + jest
    + webpack-cli
  + minor server-side refactor

+ 1.0.3 -- 08.06.2020.
  + added scss file extension to nodemon watch list
  + bumped up npm outdated packages:
    + @babel/core
    + @babel/preset-env
    + @babel/preset-react

+ 1.0.2 -- 23.05.2020.
  + added git links to package.json
  + added Tech stack and Content sections to README.md
  + bumped up npm outdated packages
    + nodemon
    + react-router-dom  

+ 1.0.1 -- 11.05.2020.
  + extracted jest config from package.json in separate file
  + extracted nodemon config from package.json in separate file
  + bumped up npm outdated packages
    + jest
    + node-sass

+ 1.0 -- 02.05.2020.
    + Initial release
