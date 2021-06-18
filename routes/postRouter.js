const express = require('express');

const postController = require('../controllers/post');

const router = express.Router();

router.get('/posts', postController.getPostByUsername);
router.post('/posts', postController.insertPost);
router.get('/posts/:id', postController.getPostById);
router.put('/posts/:id', postController.updatePost);
router.patch('/posts/:id', postController.patchPost);
router.delete('/posts/:id', postController.deletePostById);




module.exports = router;






























// function routes(Post) {

//     const postsRouter = express.Router();

//     postsRouter.route('/posts')
//         ///get posts by username
//         .get((req, res) => {
//             const { query } = req;

//             Post.find(query, (err, posts) => {
//                 if (err) {
//                     return res.send(err);
//                 }
//                 return res.json(posts);
//             });
//         })
//         ///insert post
//         .post((req, res) => {
//             const newpost = new Post();

//             newpost.username = req.body.username;
//             newpost.content = req.body.content;
//             newpost.date = req.body.date;
//             newpost.tags = req.body.tags;
//             newpost.likes = req.body.likes;
//             newpost.comments = req.body.comments;
//             newpost.shares = req.body.shares;

//             newpost.save((err, newpost) => {
//                 if (err) {
//                     return res.send(err);
//                 }
//                 return res.json((201).newpost);
//             })
//         });


//     //get post by id
//     //middleware
//     postsRouter.use('/posts/:id', (req, res, next) => {
//         Post.findById(req.params.id, (err, post) => {
//             if (err) {
//                 return res.send(err);
//             }
//             if (post) {
//                 req.post = post;
//                 return next();
//             }
//             return res.sendStatus(404);
//         });
//     });
//     // post : Get/put/patch
//     postsRouter.route('/posts/:id')
//         .get((req, res) => res.json(req.post))
//         .put((req, res) => {
//             const { post } = req;
//             post.content = req.body.content;
//             post.date = req.body.date;
//             post.tags = req.body.tags;
//             post.likes = req.body.likes;
//             post.comments = req.body.comments;
//             post.shares = req.body.shares;

//             post.save();
//             return res.send(post);
//         })
//         .patch((req, res) => {
//             const { post } = req;
//             if (req.body._id) delete req.body._id;

//             Object.entries(req.body).forEach((item) => {
//                 const key = item[0];
//                 const value = item[1];
//                 post[key] = value;
//             });
//         });




//     return postsRouter;
// }

// module.exports = routes;