const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = async function (req, res, next) {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decode = await jwt.verify(token, config.get('jwtSecret'));

    req.user = decode.user;
    next();
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Token is  not valid' });
  }
};
