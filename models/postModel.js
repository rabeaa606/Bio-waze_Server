const mongoose = require('mongoose'),
    { Schema } = mongoose;

const TagModel = new Schema({
    tag: { type: String, required: true },
});
const LikeModel = new Schema({
    username: { type: String, required: true },
});

const CommentModel = new Schema({
    username: { type: String, required: true },
    content: { type: String, required: true }
});

const ShareModel = new Schema({
    username: { type: String, required: true },
});

const PostModel = new Schema({
    username: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now, required: true },
    tags: [TagModel],
    likes: [LikeModel],
    comments: [CommentModel],
    shares: [ShareModel],
    userimage: { type: String },


});
module.exports = mongoose.model('Post', PostModel);


//module.exports = mongoose.model('Post', PostSchame, 'posts');

