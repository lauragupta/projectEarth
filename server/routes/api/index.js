const router = require('express').Router();
const userRoutes = require('./userRoutes');
const challengeRoutes = require('./challengeRoutes');
const authRoutes = require('./authRoutes');

router.use('/users', userRoutes);
router.use('/challenges', challengeRoutes);
router.use('/auth', authRoutes);

module.exports = router;