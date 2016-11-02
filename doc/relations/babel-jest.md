# *Babel* & *Jest*

# Install

### Packages

  + babel-jest

## Config

#### .babelrc

Tel babel not to transpile test files.

```json
{
  "ignore": [
    "__tests__",
    "**/*.test.js",
    "**/*.spec.js"
  ]
}
```