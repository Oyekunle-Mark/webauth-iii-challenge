const router = require('express').Router();
const handler = require('./routeHandler');
const middleware = require('./userMiddleware');

router.get('/users', middleware, handler.getUsers);

module.exports = router;
