# Fallback keys & values for use with multi-json-loader

## Install

```
npm install fallback-multi-json-loader
```

## Usage

[Documentation: Using loaders](https://webpack.js.org/concepts/loaders/#using-loaders)

Returns a single JSON blob with keys and values made by calling `multi-json-loader` then merging in the result of the following loaders using [lodash `merge`](https://lodash.com/docs/#merge). If two leaf nodes conflict, the one from the following loaders (from `data/pt` in the below example) wins.

### ./data/en/account.json

```json
{
  "both-key1": "both-key1-en-value",
  "en-key1": "en-key1-value"
}
```

### ./data/pt/account.json

```json
{
  "both-key1": "both-key1-pt-value",
  "pt-key1": "pt-key1-value"
}
```

### example.js

```javascript
var data = require('json-loader!fallback-multi-json-loader?cwd=data/en!multi-json-loader?cwd=data/pt!./irrelevant.whatever');
// => {
//   account: {
//     'both-key1': 'both-key1-pt-value',
//     'en-key1': 'en-key1-value',
//     'pt-key1': 'pt-key1-value'
//   }
// }
```

## Options

Same as [`multi-json-loader`](https://github.com/cletusw/multi-json-loader#options).

## License

MIT
