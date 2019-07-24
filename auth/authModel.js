const db = require('../database/dbConfig');

const get = id => {
  const query = db('users');

  return id ? query.where({ id }).first() : query;
};

const add = async user => {
  const [id] = await db('users').insert(user);

  return get(id);
};

module.exports = {
  add,
  get,
};
