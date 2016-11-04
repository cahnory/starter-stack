# [Documentation](../README.md) > [Elements](README.md) > Flow

+ [Usage](#usage)
    + [Test static](#test-static)
+ [Install](#install)
    + [Packages](#packages)
        + [flow-bin](#flow-bin)
    + [Config](#config)
        + [.flowconfig](#flowconfig)
    + [Scripts](#scripts)


## Usage

### Test static

Check static types of your sources.

```
npm run test:static
```

## Install

### Packages

  + [flow-bin](#flow-bin)

#### flow-bin

The flow static type checker, the core library. [read more](https://flowtype.org/)

### Config

#### .flowconfig

Tel flow not to check *dist* folder which contains transpiled code.

```ini
[ignore]
<PROJECT_ROOT>/dist/.*
```

### Scripts

| name        | command                           |
|-------------|-----------------------------------|
| test:static | `./node_modules/.bin/flow`        |
