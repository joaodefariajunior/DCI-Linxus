const router = require("express").Router();
const User = require("../model/User");
const verify = require("./verifyToken");
// const authenticateUser = require('../middleware/authenticator');
const { getUsers, getUser, addUser, loginUser, searchUsers } = require("../controllers/usersController");

router.route('/').get( getUsers);
router.route('/:id').get(verify, getUser);
router.route('/add').post(addUser);
router.route('/login').post(loginUser);
router.route('/search').post(verify, searchUsers);
// router.route('/me').get(veryfiy, authenticateUser)

module.exports = router;