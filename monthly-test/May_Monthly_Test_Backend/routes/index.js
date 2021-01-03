var express = require('express');
var router = express.Router();
var {controller} = require('../controller/blog.controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/create' , controller.create)            //Create blog details
         
router.get('/findAll' , controller.findAll)           //Read all blog details

router.get('/getOne/:_id' , controller.findone)       //Read one blog details

router.put('/update/:_id' , controller.update)        //Update blog detail on the basis of ID
  
router.delete('/delete/:_id' , controller.delete)      //Delete a blog detail on the basis of ID

router.get('/searchAuthor/:Author' , controller.search)     //Search on the basis of Author

router.get('/searchTitle/:Blog_Title' , controller.search)   //Search on the basis of Blog_Title

module.exports = router;
