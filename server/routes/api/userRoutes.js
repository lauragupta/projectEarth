const router = require('express').Router();


const { getSingleChallenge } = require('../../controllers/challengeController');
const {
  createUser,
  getUsers,
  getSingleUser,
  updateUser, 
  deleteUser
} = require('../../controllers/userController')

// /api/users
router.route('/')
  .get(getUsers)
  .post(createUser);

  // /api/users/:userId
router.route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser)

  module.exports = router;