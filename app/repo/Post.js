var mongoose = require('mongoose');
var Post = require('../models/Post');

var PostRepo = function() {
    var _priv = {
        get : function() {
            Post.find(function (err, posts) {
                if (err) return 'Error';
                console.log(posts);
                return posts;
            });
        }
    }
    return {
        get : function() {
            return _priv.get();
        }
    }
}();

module.exports = PostRepo;
