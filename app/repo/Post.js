var mongoose = require('mongoose');
var Post = require('../models/Post');

var PostRepo = {
        get : function(query) {
            query = query || {};
            return Post.find(query).exec();
        },
        create: function (post) {
            var newPost = new Post(post);
            return newPost.save();
        }
    };

module.exports = PostRepo;
