const router = require('express').Router();

const {
  getChallenges,
  createChallenge,
  getSingleChallenge,
  updateChallenge,
  deleteChallenge,
  joinChallenge,
  removeChallenger
} = require('../../controllers/challengeController');

// /api/challenges
router.route('/')
  .get(getChallenges)
  .post(createChallenge);

  //api/challenges/:challengeId
  router.route('/:challengeId')
    .get(getSingleChallenge)
    .put(updateChallenge)
    .delete(deleteChallenge);

  // /api/challenges/:challengeId/challengers
  router.route('/:challengeId/challengers').post(joinChallenge)

  // /api/challenges/:challengeId/challengers/:userId
  router.route('/:challengeId/challengers/:userId').delete(removeChallenger)

module.exports = router;