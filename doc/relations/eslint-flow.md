# *ESLint* & *Flow*

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

Tel eslint to use babel parser which supports flow.

```json
{
  "parser": "babel-eslint",
}
```