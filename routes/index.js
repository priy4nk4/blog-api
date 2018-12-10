var express = require('express');
var router = express.Router();
var post = require("../controller/postController");

/* GET home page. */
router.get('/', post.homepage);

router.get('/getpost',post.getData);

router.post('/savepost',post.saveData);

router.post('/likeDislikepost',post.likeDislikePost);


module.exports = router;
