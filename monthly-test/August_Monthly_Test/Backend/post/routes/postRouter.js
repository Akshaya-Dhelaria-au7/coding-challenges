var express = require('express');
var router = express.Router();
var controller = require('../controller/postController')
var userAuth = require('../middleware/auth')
/* GET home page. */
router.post('/addpost', userAuth  ,controller.addPost)
router.get('/allposts', userAuth , controller.viewUserPost)
router.delete('/delete/:post_id', userAuth , controller.deletePost)
router.get('/viewallpost' , controller.viewAllPost)
router.post('/like/:post_id' , userAuth , controller.like)

module.exports = router;
