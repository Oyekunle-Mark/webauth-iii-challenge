const Model = require('./userModel');

const getUsers = async (req, res) => {
  try {
    const users = await Model.get();

    res.status(200).json({
      status: 200,
      data: users,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: 'Error fetching users',
    });
  }
};

module.exports = {
  getUsers,
};
