var express = require('express');
var router = express.Router();
var controller = require("../controller/userController")

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/signup',controller.signing)
router.post('/login' , controller.login)

module.exports = router;
