const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();

router.post('/users', UserController.registerUser);
router.post('/auth', UserController.loginUser);

module.exports = router;
