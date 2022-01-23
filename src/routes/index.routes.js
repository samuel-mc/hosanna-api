const express = require('express');
const app = express();

app.use('/email', require('./email.routes'));

module.exports = app;