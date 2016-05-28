var express = require('express');
var router = express.Router();
var Post = require('../repo/Post');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({'message': 'Welcome to Blog Api\'s'});
});

router.get('/posts', function(req, res, next) {
    // res.json({'posts': Post.get()});
    Post(req, res, next).get();
});

module.exports = router;
