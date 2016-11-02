## Static analysis (Flow)

### Usage

```
npm run lint:flow
```

### Packages

| name                                    | used with |
|-----------------------------------------|-----------|
| eslint                                  | *         |
| babel-eslint                            | babel     |
| eslint-plugin-flowtype                  | flow      |

### Configs

#### .eslintrc

```json
{
  "extends": ["eslint:recommended"],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    }
  },
  "env": {
    "node": true,
    "es6": true
  },
  "rules": {
    "semi": [1, "never"],
    "comma-dangle": [1, "always-multiline"],
    "eqeqeq": ["error", "always"],
    "complexity": ["error", 2]
  },
  "plugins": [
    "flowtype"
  ]
}

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