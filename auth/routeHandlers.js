const Model = require('./authModel');
const bcryptHelper = require('../helpers/bcryptHelper');
const jwtHelper = require('../helpers/jwtHelper');

const register = async (req, res) => {
  const newUser = req.body;
  newUser.password = await bcryptHelper.hashPassword(req.body.password);

  try {
    const user = await Model.add(newUser);

    if (user)
      res.status(201).json({
        status: 201,
        data: user,
      });
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: 'Error creating account',
    });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await Model.findBy(username);

    if (!user)
      res.status(401).json({
        status: 401,
        message: 'Invalid username',
      });

    const match = await bcryptHelper.comparePassword(password, user.password);

    if (!match)
      return res.status(401).json({
        status: 401,
        message: 'Password not correct.',
      });

    const token = jwtHelper.generateToken(user.id);

    res.status(200).json({
      status: 200,
      token,
      message: `Welcome, ${user.username}`,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: 'Error logging in.',
    });
  }
};

module.exports = {
  register,
  login,
};
