## Static analysis (Flow)

### Usage

```
npm run lint:flow
```

### Packages

| name                                    | used with |
|-----------------------------------------|-----------|
| flow-bin                                | *         |
| babel-plugin-transform-flow-strip-types | babel     |
| eslint-plugin-flowtype                  | eslint    |

### Configs

#### .flowconfig

```ini
[ignore]
.*/node_modules/.*
.*/dist/.*
```

#### .babelrc

```json
{
  "plugins": [
    "transform-flow-strip-types"
  ]
}
```

### Scripts

| name        | command                         |
|-------------|---------------------------------|
| lint:flow   | "./node_modules/.bin/flow src"  |

### Files

  + .flowconfig