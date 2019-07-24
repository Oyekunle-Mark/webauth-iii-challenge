const express = require('express');

const server = express();
const authRouter = require('../auth/route');

server.use(express.json());

server.get('/', (req, res) =>
  res.status(200).json({
    status: 200,
    message: 'Welcome, thou faithful developer!',
  }),
);

server.use('/api', authRouter);

module.exports = server;
