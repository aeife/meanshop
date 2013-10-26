var path = require('path');

module.exports = {
  mongo: {
    dbUrl: 'mongodb://localhost',
  },
  server: {
    listenPort: 3000,
    distPath: path.resolve(__dirname, '../client/build'),  // The folder that contains the application files (note that the files are in a different repository) - relative to this file
  }
};
