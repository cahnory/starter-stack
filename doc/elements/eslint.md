# ESLint

## Usage

### Scripts

| name        | command                           |
|-------------|-----------------------------------|
| lint:eslint | `./node_modules/.bin/eslint src`  |


## Install

### Packages

  + eslint

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
