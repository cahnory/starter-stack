# Flow

## Usage

### Scripts

| name        | command                           |
|-------------|-----------------------------------|
| lint:flow   | `./node_modules/.bin/flow`        |


## Install

### Packages

  + flow-bin

### Config

#### .flowconfig

Tel flow not to check *dist* folder which contains transpiled code.

```ini
[ignore]
<PROJECT_ROOT>/dist/.*
```
