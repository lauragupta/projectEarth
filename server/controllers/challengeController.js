const { Challenge, User } = require("../models");

//Get all Challenges
async function getChallenges(req, res) {
  try {
    const challenges = await Challenge.find()
      // .populate('user')
    console.log(challenges)
    return res.json(challenges)
  } catch(err) {
    res.status(500).json(err);
  } 
}


//Create a challenge
async function createChallenge(req, res) {
  try {
    const userId = req.user._id
    const challengeData = {...req.body, user: userId}
    const challenge = await Challenge.create(challengeData)
    if (!challenge) {
      return res.status(500).json({ message: 'Not able to create challenge'})
    }
    const user = await User.findOneAndUpdate(
      { _id: userId },
      { $addToSet: { myChallenges: challenge.id } },
      { new: true }   
    );
    if (!user) {
      return res.status(404).json({
        message: "Challenge created, but no user was found with that ID",
      })
    }
    res.json({challenge})
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
}

//Get a Single challenge
function getSingleChallenge(req, res) {
  Challenge.findOne({ _id: req.params.challengeId })
  .select('-__v')
  .then(async (challenge) =>
    !challenge
      ? res.status(404).json({ message: 'No challenge with that ID' })
      : res.json({
          challenge,
        })
  )
  .catch((err) => {
    console.log(err);
    return res.status(500).json(err);
  });
}

//Update the challenge
function updateChallenge(req, res) {
  Challenge.findOneAndUpdate(
    { _id: req.params.challengeId },
    { $set: req.body },
    { runValidators: true, new: true }
  )
  .then((challenge) =>
    !challenge
      ? res.status(404).json({ message: 'No challenge with this id.'})
      : res.json({challenge})
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}

//Delete the challenge 
function deleteChallenge(req, res) {
  Challenge.findOneAndRemove({ _id: req.params.challengeId })
  .then((challenge) =>
    !challenge
      ? res.status(404).json({ message: 'No challenge with this id!' })
      : User.findOneAndUpdate(
          { myChallenges: req.params.challengeId },
          { $pull: { challenge: req.params.challengeId } },
          { new: true }
        )
  )
  .then((user) =>
    !user
      ? res.status(404).json({
          message: 'Challenge deleted but no user with this id!',
        })
      : res.json({ message: 'Challenge successfully deleted!' })
  )
  .catch((err) => res.status(500).json(err));
}

//Join a challenge to be a challenger
function joinChallenge(req, res) {
  Challenge.findOneAndUpdate(
    { _id: req.params.challengeId },
    { $addToSet: { challengers: req.body.userId } },
    { runValidators: true, new: true }
  )
      .then((user) =>
      !user
        ? res.status(404).json({ message: 'No user with this id!' })
        : res.json(user)
      )
}

//remove user from challengerList on challenge
function removeChallenger(req, res) {
  Challenge.findOneAndUpdate(
    { _id: req.params.challengeId },
    { $pull: { challengers: req.params.userId } },
    { runValidators: true, new: true }
  )
    .then((user) =>
      !user
        ? res.status(404).json({ message: 'No user with this id!' })
        : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
}

module.exports = {getChallenges, createChallenge, getSingleChallenge, updateChallenge, deleteChallenge, joinChallenge, removeChallenger}