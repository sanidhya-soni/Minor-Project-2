const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();

router.post('/auth', UserController.loginUser);

module.exports = router;
