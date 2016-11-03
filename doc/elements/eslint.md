# ESLint

+ [Usage](#usage)
    + [lint](#lint)
+ [Install](#install)
    + [Packages](#packages)
        + [eslint](#eslint)
    + [Config](#config)
        + [.eslintrc](#eslintrc)
    + [Scripts](#scripts)

## Usage

### lint

Lint your sources.

```
npm run lint
```

## Install

### Packages

+ [eslint](#eslint)

#### eslint

The ESLint linter, the core library. [read more](http://eslint.org/docs/about/)

### Config

#### .eslintrc

```json
{
  "extends": [
    "eslint:recommended"
  ],
  "env": {
    "node": true
  },
  "rules": {
    "semi"          : ["error", "never"],
    "comma-dangle"  : ["error", "always-multiline"],
    "eqeqeq"        : ["error", "always"],
    "complexity"    : ["warn",  2]
  },
  "plugins": [
    "flowtype"
  ]
}
```

### Scripts

| name        | command                           |
|-------------|-----------------------------------|
| lint        | `./node_modules/.bin/eslint src`  |
