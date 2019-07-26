const router = require('express').Router();
const handlers = require('./routeHandlers');

router.post('/register', handlers.register);
router.post('/login', handlers.login);

module.exports = router;
