const express = require('express');
const slack = express();
const axios = require('axios');

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

    if (data.text.includes(' cual es el pokemon ')) {
        const pokemonToFind = data.text.replace('?', '').split(' ').slice(-1)[0];

        findPokemon(pokemonToFind);
    }
});

const findPokemon = async (pokemonToFind) => {
    const endpoint = 'https://pokeapi.co/api/v2/pokemon/' + pokemonToFind;

    const response =  await axios.get(endpoint);

    const pokemonData = {
        name: response.data.name,
        altura: (response.data.height * 10) + ' cm',
        peso: (response.data.weight * 10)/ 1000 + ' Kg',
        tipo: response.data.types[0].type.name,
        image: response.data.sprites.front_default
    };
    bot.postMessageToChannel('enhancer', 'Nombre: ' + pokemonData.name , params);
    bot.postMessageToChannel('enhancer', 'Altura: ' + pokemonData.altura , params);
    bot.postMessageToChannel('enhancer', 'Peso: ' + pokemonData.peso , params);
    bot.postMessageToChannel('enhancer', 'Tipo: ' + pokemonData.tipo , params);
    bot.postMessageToChannel('enhancer', pokemonData.image , params);
};

module.exports = slack;