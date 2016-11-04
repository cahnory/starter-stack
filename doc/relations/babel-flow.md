# [Documentation](../README.md) > [Relations](README.md) > *Babel* & *Flow*

+ [Install](#install)
    + [Packages](#packages)
        + [babel-plugin-transform-flow-strip-types](#babel-plugin-transform-flow-strip-types)
    + [Config](#config)
        + [.babelrc](#babelrc)

## Install

### Packages

  + babel-plugin-transform-flow-strip-types

#### babel-plugin-transform-flow-strip-types

A babel plugin removing flow types. [read more](https://babeljs.io/docs/plugins/transform-flow-strip-types/)

### Config

#### .babelrc

Tel babel to use the plugin which will remove flow types.

```json
{
  "plugins": [
    "transform-flow-strip-types"
  ]
}
```