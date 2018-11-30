var express = require('express');
var router = express.Router();

const ctrlHome = require('../controllers/home');
const ctrlOthers = require('../controllers/others');
const ctrlSignUp = require('../controllers/signup');
const ctrlLogin = require('../controllers/login');

/* Home page */
router.get('/', ctrlHome.home);

/* Sign Up page */
router.get('/Signup', ctrlSignUp.signup);

/* Log In page */
router.get('/login', ctrlLogin.login);

/* About page */
router.get('/about/5c014385e158e021ac506ccc', ctrlOthers.about);

module.exports = router;




