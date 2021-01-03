var express = require('express');
var router = express.Router();
var todoController = require('../controller/todo_controller')
var todoValidation = require('../validation/todo_validation')
var validationResults = require('../utils/validation')
var userAuth = require('../middleware/auth')


router.post('/add' , todoValidation, validationResults , userAuth , todoController.addTodo)
router.get('/gettodos' , userAuth  , todoController.getAllTodos)
router.put('/updatetodo/:_id' , userAuth , todoController.updateTodo)
router.delete('/deletetodo/:_id' , userAuth , todoController.deleteTodo)
router.put('/updatestatus/:_id' , userAuth , todoController.updateTaskStatus)

module.exports = router;