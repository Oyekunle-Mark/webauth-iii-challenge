const express = require('express');

const server = express();
const authRouter = require('../auth/route');
const userRouter = require('../user/route');

server.use(express.json());

server.get('/', (req, res) =>
  res.status(200).json({
    status: 200,
    message: 'Welcome, thou faithful developer!',
  }),
);

server.use('/api/auth', authRouter);
server.use('/api', userRouter);

module.exports = server;
