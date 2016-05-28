var express = require('express');
var router = express.Router();
var PostsRepo = require('../repo/Post');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({'message': 'Welcome to Blog Api\'s'});
});

router.get('/posts', function(req, res, next) {
    var foundPosts = PostsRepo.get({});
    foundPosts
        .then(function (posts) {
            console.log('Found posts');
            res.json(posts);
        })
        .catch(function (err) {
            console.log('Error in finding posts');
            res.json(err);
        });
});

router.post('/post', function(req, res, next) {
    var reqBody = req.body;
    var createdPost = PostsRepo.create(reqBody);
    createdPost
        .then(function (newPost) {
            console.log(newPost);
            res.json(newPost);
        })
        .catch(function (error) {
            console.log(error);
            res.json(error);
        });
});

module.exports = router;
