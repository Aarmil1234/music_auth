const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');
const validate = require('../middleware/validate');
const authValidator  = require('../validators/authValidator');

router.post('/login', validate(authValidator.login), authController.login);

module.exports = router;
