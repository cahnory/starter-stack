# Babel

+ [Usage](#usage)
    + [Build](#build)
    + [Watch](#watch)
+ [Install](#install)
    + [Packages](#packages)
        + [babel-core](#babel-core)
        + [babel-cli](#babel-cli)
        + [babel-preset-es2015](#babel-preset-es2015)
        + [babel-preset-stage-0](#babel-preset-stage-0)
    + [Config](#config)
        + [.babelrc](#babelrc)
        + [.gitignore](#gitignore)
        + [.npmignore](#npmignore)
    + [Scripts](#scripts)

## Usage

### Build

Make a build of your package.

```shell
npm run build
```

### Watch

Make a build of your package each time a source file changes.

```shell
npm run build:watch
```

## Install

### Packages

+ [babel-core](#babel-core)
+ [babel-cli](#babel-cli)
+ [babel-preset-es2015](#babel-preset-es2015)
+ [babel-preset-stage-0](#babel-preset-stage-0)

#### babel-core

The babel transpiler, the core library. [read more](https://babeljs.io/)

#### babel-cli

Make babel execute from command line. [read more](https://babeljs.io/docs/usage/cli/)

#### babel-preset-es2015

Make babel compile es2015 code to es5. [read more](https://babeljs.io/docs/plugins/preset-es2015/)

#### babel-preset-stage-0

Make babel support stage 0 and greater features. [read more](https://babeljs.io/docs/plugins/preset-stage-0/)

### Config

#### .babelrc

```json
{
  "presets": [
    "es2015",
    "stage-0"
  ]
}
```

#### .gitignore

Tel git to ignore your build folder.

```
dist
```

#### .npmignore

Tel npm to ignore your source folder.

```
src
```

### Scripts

| name        | command                   |
|-------------|---------------------------|
| build       | `babel -s -d dist src`    |
| build:watch | `babel -w -s -d dist src` |
| prepublish  | `npm run build`           |

The prepublish script will be executed
