var express = require('express');
var router = express.Router();
var Post = require('../repo/Post');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({'message': 'Welcome to Blog Api\'s'});
});

router.get('/posts', function(req, res, next) {
    console.log(Post.get());
    res.json({'posts': Post.get()});
});

module.exports = router;
