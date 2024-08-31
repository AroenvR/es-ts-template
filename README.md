# TypeScript Project Template
This project is a pre-configured template for Node.js applications using TypeScript.

## Getting Started
Before you begin, ensure you have Node.js and npm installed on your machine.

## Prerequisites
- Node.js 14.x or later
- npm 6.x or later

## Installing
Clone the repository to your local machine:
```
git clone https://github.com/AroenvR/es-ts-template
```
Navigate into the directory:
```
cd es-ts-template
```
Install the dependencies:
```
npm i
```
### Rename example.env to .env
## Running the application
To run the application:
```
npm start
```

To run the application's tests:
```
npm run test
```

## Features
- Preconfigured TypeScript for static typing in JavaScript
- ESLint for linting, with a custom configuration
- Nodemon for automatically restarting your application when file changes are detected
- Basic structure for a Node.js project

## Project Structure
- `src/`: The source files of the application
- `src/__tests__/`: The testing directory
- `dist/`: The transpiled code that is used for production
- `coverage/`: A detailed testing coverage report
- `node_modules/`: The installed npm dependencies (do not modify)
- `tsconfig.json`: The TypeScript compiler options
 `.gitignore`: An index of files & directories which git should ignore
- `.npmignore`: An index of files & directories which npm should ignore when publishing a package
- `.prettierrc`: A `prettier` configuration file for formatting code with the `npm run format` script
- `jest.config.js`: A configuration file for the `jest` testing library
- `.eslintrc.json`: ESLint rules
- `.eslintignore`: Files to be ignored by ESLint
- `package.json`: npm package manager file, lists project information and dependencies
- `nodemon.json`: Nodemon configuration file

## Built With
- [Node.js](https://nodejs.org/) - JavaScript runtime
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [ESLint](https://eslint.org/) - Linter for JavaScript and TypeScript
- [Nodemon](https://nodemon.io/) - Utility to automatically restart node applications

## Publishing an NPM package
1. Execute `npm link`
2. Execute `npm link PACKAGE_NAME`
3. Execute `npm login`
4. Execute `npm publish` with an optional `--access public` flag.

## License
This project is licensed under the MIT License - see the LICENSE file for details
