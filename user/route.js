const router = require('express').Router();
const handler = require('./routeHandler');

router.get('/users', handler.getUsers);

module.exports = router;
