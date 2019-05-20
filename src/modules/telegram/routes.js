const router = require('express').Router();

const telegramController = require('./controllers/telegramController');

router.get('/status', telegramController.status);

module.exports = router;