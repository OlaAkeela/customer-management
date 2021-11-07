const fs = require('fs');
const path = require('path');

const basename = path.basename(__filename);
const apis = {}
/*
  Automatic import sibling files
 */
fs
    .readdirSync(__dirname)
    .map((file) => {
      if ((file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')) {
        apis[file.slice(0, -3)] = require(path.join(__dirname, file))
      }
    })

module.exports = apis;
