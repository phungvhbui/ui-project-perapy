# Development setup guide

## Prerequisite

You need to have:

- `nodejs: ^14.0.0`
- `npm: ^6.0`
- A healthy mental
- A desire to make a clean codebase
- Visual Studio Code

  - I recommend these extensions:

    - `bradlc.vscode-tailwindcss`: IntelliSense
    - `octref.vetur` and `hollowtree.vue-snippets`: Main extension for Vue development and cool snippets for speed
    - `esbenp.prettier-vscode`: Prettier if the one installed using `package.json` file is broken

## Project setup

To install dependencies

```
npm install
```

### Build, compiles and hot-reloads for development

- Open two terminals at a time in VS Code
- Run this command from one terminal to serve Vue server

```
npm run serve
```

- Run this command from the other one to enable automatically re-build TailwindCSS when there are changes in `src/styles`

```
npm run watch
```

### Compiles and minifies for production

Don't use this at the moment

```
npm run build
```

### Lints and fixes files

Don't use this at the moment

```
npm run lint
```
