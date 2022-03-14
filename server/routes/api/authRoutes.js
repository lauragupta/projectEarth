const router = require('express').Router();

const {logIn} = require('../../controllers/authController');

router.route('/login').post(logIn);

module.exports = router; 