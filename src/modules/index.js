const express = require('express');
const modules = express();

const slack = require('./slack/index');
const telegram = require('./telegram/index');

modules.use(slack);
modules.use(telegram);

module.exports = modules;