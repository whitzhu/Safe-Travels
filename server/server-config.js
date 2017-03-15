const express = require('express');

const handler = require('./../lib/utility');

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));

module.exports = app;
