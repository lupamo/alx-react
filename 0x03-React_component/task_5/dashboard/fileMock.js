const path = require('path');

module.exports = {
  process(sourceText, sourcePath, options) {
    const fileName = path.basename(sourcePath);
    return {
      code: `module.exports = ${JSON.stringify(fileName)};`,
      map: null,
    };
  },
};
