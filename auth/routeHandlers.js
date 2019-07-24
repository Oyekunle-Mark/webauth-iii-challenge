const Model = require('./authModel');
const jwtHelper = require('../helpers/jwtHelper');

const register = async (req, res) => {
  const newUser = req.body;
  newUser.password = await jwtHelper.hashPassword(req.body.password);

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

module.exports = {
  register,
};
