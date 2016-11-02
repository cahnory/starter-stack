# *Babel* & *ESLint*

## Install

### Packages

  + babel-eslint

## Config

#### .babelrc

Tel eslint to use babel parser and enable es6 features.

```json
{
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    }
  },
  "env": {
    "es6": true
  },
}
```