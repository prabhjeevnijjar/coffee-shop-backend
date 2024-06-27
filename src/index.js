const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { port } = require('./config/index');
const database = require('./database');
const cors = require('cors');
const Ddos = require('ddos');
const helmet = require('helmet');
const ExpressLogs = require('express-server-logs');

const { whitelist, ddosConfig } = require('./config');
const ddosInstance = new Ddos(ddosConfig);
const corsOptions = {
  exposedHeaders: 'authorization, x-refresh-token, x-token-expiry-time',
  origin: (origin, callback) => {
    if (!whitelist || whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};
// enable .env file
dotenv.config();

const app = express();
const xlogs = new ExpressLogs(false);

database.connect();
// npm module for preventing ddos attack. See more https://www.npmjs.com/package/ddos
app.use(ddosInstance.express);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//enable cors
app.use(cors(corsOptions));
// secure servers by setting various HTTP headers
app.use(helmet());
//logger
app.use(xlogs.logger);

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.listen(port, () => {
  console.log('connected to port: ', port);
});