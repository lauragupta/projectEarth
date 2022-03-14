const { User, Challenge } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { signToken } = require('../utils/auth');

const userChallengeList = async () =>
  User.aggregate([
    {
      $unwind: '$challenges',
    }
  ]);

//Get all users
function getUsers(req, res) {
  User.find()
  .then((users) => res.json(users))
  .catch((err) => res.status(500).json(err));
}

//Create a user
async function createUser(req, res) {
  const user = await User.create(req.body)
  const token = signToken(user);
  return res.json({ token, user });
}

//Get a single User
function getSingleUser(req, res) {
  User.findOne({ _id: req.params.userId })
  .select('-__v')
  .then(async (user) =>
    !user
      ? res.status(404).json({ message: 'No user with that ID' })
      : res.json({
          user,
          challenge: await userChallengeList(req.params.userId),
        })
  )
  .catch((err) => {
    console.log(err);
    return res.status(500).json(err);
  });
}
// Update User
function updateUser(req, res) {
  User.findOneAndUpdate(
    { _id: req.params.userId },
    { $set: req.body },
    { runValidators: true, new: true }
  )
    .then((user) =>
      !user
        ? res.status(404).json({ message: 'No user with this ID!' })
        : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
}

//Delete User
function deleteUser(req, res) {
  User.findOneAndRemove({ _id: req.params.userId })
  .then((user) => {
    const result = !user
      ? res.status(404).json({ message: 'No such user exists with that ID' })
      : Challenge.deleteMany({ 
        _id: { 
          $in: user.challenges 
        }})
    return result
  })
  .then((user) =>
    !user.challenges
      ? res.status(404).json({ 
        message: 'User deleted, but no challenges found',
        })
      : res.json({ message: 'User and Challenges successfully deleted' })
  )
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
}

module.exports = {getUsers, createUser, getSingleUser, updateUser, deleteUser}