const Post = require('../models/postModel');


//get posts by username
exports.getPostByUsername = (req, res) => {
    const { query } = req;
    Post.find(query, (err, posts) => {
        if (err) {
            return res.send(err);
        }
        return res.json(posts);
    });
};

//insert post
exports.insertPost = async (req, res) => {
    const newpost = new Post();

    newpost.username = req.body.username;
    newpost.content = req.body.content;
    newpost.date = req.body.date;
    newpost.tags = req.body.tags;
    newpost.likes = req.body.likes;
    newpost.comments = req.body.comments;
    newpost.shares = req.body.shares;
    newpost.userimage = req.body.userimage;

    newpost.save((err, newpost) => {
        if (err) {
            return res.send(err);
        }
        return res.json((201).newpost);
    })
};

//get post by id
exports.getPostById = async (req, res) => {
    Post.findById(req.params.id, (err, post) => {
        if (err) {
            return res.send(err);
        }
        return res.json(post);

    });
};

//update post by id
exports.updatePost = async (req, res) => {

    Post.findById(req.params.id, (err, post) => {
        if (err) {
            return res.send(err);
        }
        post.content = req.body.content;
        post.date = req.body.date;
        post.tags = req.body.tags;
        post.likes = req.body.likes;
        post.comments = req.body.comments;
        post.shares = req.body.shares;

        post.save();
        return res.send(post);

    });
};

//patch post by id
exports.patchPost = async (req, res) => {
    Post.findById(req.params.id, (err, post) => {
        if (err) {
            return res.send(err);
        }
        if (req.body._id) delete req.body._id;

        Object.entries(req.body).forEach((item) => {
            const key = item[0];
            const value = item[1];
            post[key] = value;
        });

    });
};

//delte post by id
exports.deletePostById = async (req, res) => {

    Post.remove({ _id: req.params.id }, (err, results) => {
        if (err) {
            return res.send(false);

        }
        return res.send(true);

    });
};
