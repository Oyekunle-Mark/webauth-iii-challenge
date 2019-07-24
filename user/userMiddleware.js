const { verifyToken } = require('../helpers/jwtHelper');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  try {
    const isAuthorized = verifyToken(authorization);

    if (isAuthorized) next();
  } catch (err) {
    res.status(401).json({
      status: 401,
      message: 'Thou shall not pass!',
    });
  }
};
