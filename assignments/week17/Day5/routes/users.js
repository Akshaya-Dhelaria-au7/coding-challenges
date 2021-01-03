var express = require('express');
var router = express.Router();
var { attainController } = require('../controller/attainu.controller')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signUp' , attainController.create )                       //will display all the details of the student

router.get('/findAll' , attainController.findAll)                       //it will display all the listed students

// router.get('/getState' , attainController.filter)                    //will display on the basis of the state

// router.post("/singleStudent",attainController.getEachStudent)        //will display each student's info and the primary key will be EmailID

// router.post('/updatingStates' , attainController.updating)           //will update the info of the student

// router.post('/delete',attainController.deleting)                     //will delete the student's entry from DB

module.exports = router;
