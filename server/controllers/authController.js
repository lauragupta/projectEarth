const { User } = require('../models');
const { signToken } = require('../utils/auth');

async function logIn(req, res) {
  const user = await User.findOne({email: req.body.email})
  if (!user) {
    return res.status(400).json({ message: 'Invalid Input' })
  }
  const correctPassword = user.isCorrectPassword(req.body.password)
  if (correctPassword) {
    const token = signToken(user);
    return res.json({ token, user });
  }
  return res.status(400).json({ message: 'Invalid Input' })
}

module.exports = {logIn}