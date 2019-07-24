const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) =>
  res.status(200).json({
    status: 200,
    message: 'Welcome, thou faithful developer!',
  }),
);

module.exports = server;
