const express = require('express'); 
const router = express.Router(); 

const { Signup, Login } = require('../Controllers/AuthController');
const { userVerification } = require('../Middlewares/AuthMiddleware'); 


router.post('/Signup', Signup)
router.post('/Login', Login);
router.post('/', userVerification);


module.exports = router;