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

function getSingleChallenge(req, res) {
  res.json({yo:"What's up"})
}

function updateChallenge(req, res) {
  res.json({hola:"hola"})
}

function deleteChallenge(req, res) {
  res.json({Peace:"Be with you"})
}

module.exports = {getChallenges, createChallenge, getSingleChallenge, updateChallenge, deleteChallenge}