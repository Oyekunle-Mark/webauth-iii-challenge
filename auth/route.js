const router = require('express').Router();
const handlers = require('./routeHandlers');

router.post('/register', handlers.register);

module.exports = router;
