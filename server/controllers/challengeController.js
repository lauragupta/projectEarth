function getChallenges(req, res) {
  res.json({hi:"hi"});
}

function createChallenge(req, res) {
  res.json({hello:"helllooooo"})
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