const mongoose = require('mongoose'),
    { Schema } = mongoose;


const FollowingModel = new Schema({
    username: { type: String, required: true },
});


module.exports = mongoose.model('Follow', FollowingModel);
