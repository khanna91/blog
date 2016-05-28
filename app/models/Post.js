var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog', function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});

var PostSchema = new mongoose.Schema({
    title: String,
    content: String,
    status: String,
    author: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Post', PostSchema);
