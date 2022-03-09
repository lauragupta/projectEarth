const Challenge = require("../models/Challenges");

//Get all Challenges
function getChallenges(req, res) {
  Challenge.find()
  .then((challenges) => res.json(challenges))
  .catch((err) => res.status(500).json(err));
}

//Create a challenge
function createChallenge(req, res) {
  Challenge.create(req.body)
  .then((challenge) => {
    return User.findOneAndUpdate(
      { _id: req.body.userId },
      { $addToSet: { challenges: challenge.id } },
      { new: true }   
    );
  })
  .then((user) =>
  !user 
    ? res.status(404).json({
      message: "Challenge created, but no user was found with that ID",
    })
    : res.json('Challenge was created successfully!')
  )
  .catch((err) => {
    console.log(err)
    res.status(500).json(err);
  })
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
      : res.json(challenge)
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
          { thoughts: req.params.challengeId },
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

module.exports = {getChallenges, createChallenge, getSingleChallenge, updateChallenge, deleteChallenge}