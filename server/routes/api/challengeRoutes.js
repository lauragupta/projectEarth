const router = require('express').Router();

const {
  getChallenges,
  createChallenge,
  getSingleChallenge,
  updateChallenge,
  deleteChallenge
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

module.exports = router;