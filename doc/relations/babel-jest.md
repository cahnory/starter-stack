# *Babel* & *Jest*

+ [Install](#install)
    + [Packages](#packages)
        + [babel-jest](#babel-jest)
    + [Config](#config)
        + [.babelrc](#babelrc)

# Install

### Packages

  + babel-jest

#### babel-jest

The babel parser for jest. [read more](https://babeljs.io/docs/plugins/transform-flow-strip-types/)

### Config

#### .babelrc

Tel babel not to transpile test files. We specified env in order to get tests transpiled while in *jest* env.

```json
{
  "env": {
    "development": {
      "ignore": [
        "__tests__",
        "**/*.test.js",
        "**/*.spec.js"
      ]
    },
    "production": {
      "ignore": [
        "__tests__",
        "**/*.test.js",
        "**/*.spec.js"
      ]
    }
  }
}
```