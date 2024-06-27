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

  website: process.env.WEBSITE,
  whitelist: [null, undefined, 'null'].includes(process.env.WHITE_LIST) ? null : process.env.WHITE_LIST.split(','),
};

module.exports = config;
