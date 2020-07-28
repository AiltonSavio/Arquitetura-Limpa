const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

const routes = require('./routes');

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(routes);

module.exports = app;
