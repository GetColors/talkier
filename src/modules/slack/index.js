const express = require('express');
const slack = express();

const SlackBot = require('slackbots');
const config = require('./config');

const bot = new SlackBot(config);

const params = {
    icon_emoji: ':cat:'
};

bot.on('start', () => {

    bot.postMessageToChannel('enhancer', 'Hola a todos, soy el nuevo bot vergas, mi nombre es Talkier!', params);
});

bot.on('error', (error) => {
   console.log(error);
});

bot.on('message', (data) => {
    if (data.type !== 'message') {
        return;
    }

    if (data.text.includes(' estas ahi?')) {

        bot.postMessageToChannel('enhancer', 'Si señor, ¿necesitas algo?', params);
    }
});

module.exports = slack;