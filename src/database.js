const mongoose = require('mongoose');
const { mongo } = require('./config');

exports.connectToMongo = async () => {
  try {
    mongoose.set('strictQuery', false);
    mongoose.connect(mongo.uri);
    console.log('Mongo connected');
  } catch (error) {
    console.log(error);
  }
};
