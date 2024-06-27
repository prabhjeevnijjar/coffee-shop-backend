const mongoose = require('mongoose');
const { env } = require('./config');

// set mongoose Promise to Bluebird
mongoose.Promise = Promise;

// Exit application on error
mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);

  // eslint-disable-next-line no-undef
  process.exit(-1);
});

// print mongoose logs in dev env
if (env === 'development') mongoose.set('debug', false);

/**
 * Connect to mongo db
 *
 * @returns {object} Mongoose connection
 * @public
 */
exports.connect = () => {
  console.log('Mongo connected!!');
  return mongoose.connection;
};
