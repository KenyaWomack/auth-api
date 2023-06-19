'use strict';

require('dotenv').config();
const { db } = require('./src/models/index');
const PORT = process.env.PORT || 3001;
const server = require('./src/server');

db.sync().then(() => {
  server.start(PORT);
});