function getUsers(req, res) {
  res.json({hi:"hi"});
}

function createUser(req, res) {
  res.json({hello:"helllooooo"})
}

function getSingleUser(req, res) {
  res.json({yo:"What's up"})
}

function updateUser(req, res) {
  res.json({hola:"hola"})
}
function deleteUser(req, res) {
  res.json({Peace:"Be with you"})
}

module.exports = {getUsers, createUser, getSingleUser, updateUser, deleteUser}