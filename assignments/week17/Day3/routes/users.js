var express = require('express');
var router = express.Router();
var { loginController } = require('../controller/loginController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/',loginController.create)


module.exports = router;
