/* eslint-disable no-undef */
require('dotenv').config();

const config = {
  baseUrl: process.env.BASE_URL,
  ddosConfig: {
    burst: process.env.DDOS_BRUST,
    limit: process.env.DDOS_LIMIT,
  },

  env: process.env.NODE_ENV,

  mongo: { uri: process.env.DB_CONNECTION_STRING },
  port: process.env.PORT,
  menuItemCategories: ['coffee', 'drinks', 'food'],
  website: process.env.WEBSITE,
  whitelist: [null, undefined, 'null'].includes(process.env.WHITE_LIST)
    ? null
    : process.env.WHITE_LIST.split(','),
  mongoUsername: process.env.MONGODB_USERNAME,
  mongoPassword: process.env.MONGODB_PASSWORD,
  collectionName: process.env.MONGODB_COLLECTION,
  databaseName: process.env.MONGODB_DATABASE,
  searchBaseUrl: `https://cloud.mongodb.com/api/atlas/v1.0/groups/${process.env.MONGO_ATLAS_PROJECT_ID}/clusters/${process.env.MONGO_ATLAS_CLUSTER}/fts/indexes`,
  digestAuth: `${process.env.MONGO_ATLAS_PUBLIC_KEY} :${process.env.MONGO_ATLAS_PRIVATE_KEY}`,
};

module.exports = config;
