const router = require('express').Router();

const {
  getChallenges,
  createChallenge
} = require('../../controllers/challengeController');

// /api/challenges
router.route('/')
  .get(getChallenges)
  .post(createChallenge);

module.exports = router;