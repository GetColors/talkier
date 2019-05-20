
const express = require('express');
const slack = express();

slack.use('/slack', require('./routes'));

module.exports = slack;