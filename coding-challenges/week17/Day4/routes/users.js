var express = require('express');
var router = express.Router();
var { libraryController } = require('../controller/libraryController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', libraryController.create)
router.post('/getAll' , libraryController.getAll)
router.post('/getBook' , libraryController.getBook)
router.post('/getBookbyAllAuthor' , libraryController.getBooksBySameAuthor)

module.exports = router;
