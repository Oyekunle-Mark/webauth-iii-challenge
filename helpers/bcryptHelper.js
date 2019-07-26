const bcrypt = require('bcrypt');

const hashPassword = async pwd => {
  const hash = await bcrypt.hash(pwd, 12);
  return hash;
};

const comparePassword = async (pwd, hash) => {
  const match = await bcrypt.compare(pwd, hash);
  return match;
};

module.exports = {
  hashPassword,
  comparePassword,
};
