const fs = require('fs');
const path = require('path');
const appRoot = require('app-root-path');

module.exports = function (sh, options = {}) {
  const opts = Object.assign({folder: './sh-extensions', exclude: []}, options);
  const folderPath = path.join(appRoot.toString(), opts.folder);

  const configFiles = fs.readdirSync(folderPath)
    .filter(f=>opts.exclude.indexOf(f) === -1);

  const extensions = configFiles
    .map(f=>require(path.join(folderPath, f)))
    .sort((a, b)=>a.priority < b.priority ? -1 : 1);

  for (const ext of extensions) {
    ext.extension(sh);
  }

  return sh;
};