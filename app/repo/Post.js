var mongoose = require('mongoose');
var Post = require('../models/Post');

var PostRepo = function(req, res, next) {
    var _priv = {
        get : function() {
            var promise = Post.find().exec();
            promise.then(function(posts) {
                res.json({'posts': posts});
                return posts;
            }).catch(function(err) {
                res.status(500).json({'error':  err});
            });
        }
    }
    return {
        get : function() {
            return _priv.get();
        }
    }
};

module.exports = PostRepo;
