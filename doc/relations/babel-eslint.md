# *Babel* & *ESLint*

+ [Install](#install)
    + [Packages](#packages)
        + [babel-eslint](#babel-eslint)
    + [Config](#config)
        + [.eslintrc](#eslintrc)

## Install

### Packages

  + babel-eslint

#### babel-eslint

The babel parser for eslint. [read more](https://github.com/babel/babel-eslint)

### Config

#### .eslintrc

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