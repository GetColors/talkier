const router = require('express').Router();

const slackController = require('./controllers/slackController');

router.get('/status', slackController.status);

module.exports = router;