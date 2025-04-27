const express = require('express');
const router = express.Router();
const { getUsers, createUser } = require('../controllers/userController');
const auth = require('../middleware/auth');
const validate = require('../middleware/validate');
const {userSchema}  = require('../validators/userValidator');

router.get('/get', getUsers);
router.post('/create', validate(userSchema), createUser);

module.exports = router;
