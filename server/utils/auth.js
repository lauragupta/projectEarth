const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;
const expiration = '24h';

module.exports = {
  authMiddleware: function (req, res, next) {
    let token = req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
       next()
       return;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    next();
  },
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};


