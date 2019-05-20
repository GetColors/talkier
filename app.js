require('dotenv').config();

const express =  require('express');
const morgan = require('morgan');

const app = express();

const modules = require('./src/modules/index.js');

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.json({
        message : 'Welcome to talkier.',
        status : {
            general: true,
        },
    });
});

app.use(modules);

module.exports = app;