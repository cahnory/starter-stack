# *ESLint* & *Flow*

+ [Install](#install)
    + [Packages](#packages)
        + [eslint-plugin-react](#eslint-plugin-react)
    + [Config](#config)
        + [.eslintrc](#eslintrc)

## Install

### Packages

  + [eslint-plugin-react](#eslint-plugin-react)

#### eslint-plugin-react

The react plugin for eslint. [read more](https://github.com/yannickcr/eslint-plugin-react)

### Config

#### .eslintrc

Tel eslint to use react plugin and to extends its recommanded rules.

```json
{
  "extends": [
    "plugin:react/recommended"
  ],
  "plugins": [
    "react"
  ]
}
```