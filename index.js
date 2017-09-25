var getOptions = require('loader-utils').getOptions;
var loadFiles = require('multi-json-loader').loadFiles;
var merge = require('lodash').merge;

function loader(content) {
  var options = getOptions(this);

  var following = JSON.parse(content);
  var fallbacks = loadFiles(options.cwd, options.glob, this.addContextDependency.bind(this));

  var results = merge({}, fallbacks, following);

  return JSON.stringify(results, null, '\t');
}

module.exports = loader;
