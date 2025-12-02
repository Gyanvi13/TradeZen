const express = require('express'); 
const router = express.Router(); 

const { Signup, Login } = require('../Controllers/AuthController');
const { userVerification } = require('../Middlewares/AuthMiddleware'); 


router.post('/signup', Signup);
router.post('/login', Login);

// Expose verification on both GET and POST at /verify so clients can
// check session with either method depending on implementation.
router.get('/verify', userVerification);
router.post('/verify', userVerification);


module.exports = router;