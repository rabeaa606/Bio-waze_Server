const express = require('express');


const userController = require('../controllers/user');


const router = express.Router();

router.get('/users', userController.getAllUsers);
router.get('/user/:id', userController.getUserById);
router.get('/userdeatails', userController.getUserByUsername);
router.post('/user/login', userController.userLogIn);
router.post('/user/signup', userController.userSignIn);
router.post('/user/validuser', userController.checkValidUser);
router.post('/user/img', userController.userNewImage);
router.get('/user/getimg/:id', userController.getUserImage);


module.exports = router;





















// function routes(User) {

//     const usersRouter = express.Router();


//     //get all users 
//     usersRouter.route('/users')
//         .get((req, res) => {
//             User.find((err, users) => {
//                 if (err) {
//                     return res.send(err);
//                 }
//                 return res.json(users);
//             });
//         });
//     //get users by id
//     usersRouter.route('/user/:id')
//         .get((req, res) => {
//             User.findById(req.params.id, (err, user) => {
//                 if (err) {
//                     return res.send(err);
//                 }
//                 return res.json(user);
//             });
//         });

//     //get users by username
//     usersRouter.route('/userdeatails')
//         .get((req, res) => {

//             const { query } = req;

//             User.findOne(query, (err, user) => {
//                 if (err) {
//                     return res.send(err);
//                 }

//                 return res.json(user);
//             });
//         });

//     // logingin 
//     usersRouter.route('/user/login')
//         .post((req, res) => {
//             User.findOne({ username: req.body.username, password: req.body.password }
//                 , function (err, user) {
//                     if (err) return res.send(err);
//                     if (user) return res.send(user);
//                     return res.send(null);
//                 });
//         });

//     // signingup 
//     usersRouter.route('/user/validuser')
//         //check  username
//         .post((req, res) => {
//             User.findOne({ username: req.body.username }, function (err, user) {
//                 if (err) return res.send(err);
//                 if (user) return res.send(false);
//                 return res.send(true);
//             });
//         });
//     usersRouter.route('/user/signup')
//         //insert user
//         .post((req, res) => {
//             const newuser = new User();

//             newuser.username = req.body.username;
//             newuser.password = req.body.password;
//             newuser.fname = req.body.fname;
//             newuser.lname = req.body.lname;
//             newuser.location = req.body.location;
//             newuser.job = req.body.job;
//             newuser.sex = req.body.sex;
//             newuser.isDoctor = req.body.isDoctor;
//             newuser.dateofBirth = req.body.dateofBirth;
//             newuser.email = req.body.email;
//             newuser.followers = req.body.followers;
//             newuser.followeing = req.body.followeing;

//             newuser.save((err, user) => {
//                 if (err) {
//                     return res.send(err);
//                 }
//                 return res.send(user);
//             });
//         });

//     // new img
//     usersRouter.route('/user/img')
//         .post((req, res) => {
//             const { query } = req;
//             User.findOne(query, (err, targetuser) => {
//                 if (err) return res.send(err);
//                 if (targetuser) {
//                     const image = 'http://localhost:4000/images/' + req.body.name;
//                     targetuser.image = image;
//                     targetuser.save();
//                     return res.send(true);
//                 }
//                 return res.send(err);
//             });
//         });



//     return usersRouter;
// }

// module.exports = routes;