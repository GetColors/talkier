
const express = require('express');
const telegram = express();

telegram.use('/telegram', require('./routes'));

module.exports = telegram;