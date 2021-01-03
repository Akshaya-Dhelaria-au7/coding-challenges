var express = require('express');
var router = express.Router();
var { attainController } = require('../controller/attainu.controller')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signUp' , attainController.create ) 

router.get('/findAll' , attainController.findAll)

router.post('/getState' , attainController.filter)

router.get("/singleStudent",attainController.getEachStudent)

module.exports = router;
