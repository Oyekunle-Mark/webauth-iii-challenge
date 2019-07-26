const jwt = require('jsonwebtoken');

const { SECRET_KEY } = process.env;

exports.generateToken = id => jwt.sign({ id }, SECRET_KEY, { expiresIn: '1h' });

exports.verifyToken = token => jwt.verify(token, SECRET_KEY);
