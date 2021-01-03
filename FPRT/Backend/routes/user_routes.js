var express = require('express');
var router = express.Router();
var controller = require('../controller/user_controller')
// var {getAllCategories} = require('../controller/category_controller')
var {signup,login} = require('../validation/user_validation')
var validationResults = require('../utils/validation')
var userAuth = require('../middleware/auth')


router.post('/signup' , signup , validationResults , controller.signup)
router.post('/login' , login , validationResults , controller.login)
router.post('/verifyotp' , controller.verifyOtp)
router.put('/update/:_id',userAuth, controller.update)
// router.get('/alltodos' , getAllCategories)
// router.get('/logout' , userAuth , controller.logout)

module.exports = router;