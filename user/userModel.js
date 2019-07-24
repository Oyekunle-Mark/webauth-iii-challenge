const db = require('../database/dbConfig');

const get = () => db('users');

module.exports = {
  get,
};
