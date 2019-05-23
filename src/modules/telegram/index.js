
const express = require('express');
const telegram = express();

const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

bot.start((context) => context.reply('Saludos!'));

bot.launch();



module.exports = telegram;