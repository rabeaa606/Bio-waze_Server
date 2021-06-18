const express = require('express');

const friendshipController = require('../controllers/friendship');

const router = express.Router();

router.put('/unfollow/:id', friendshipController.unfollow);
router.put('/rmvFromtargetfollowes', friendshipController.removeFromTargetFollowers);
router.put('/remfollower/:id', friendshipController.remfollower);
router.put('/rmvFromtargetfollowing', friendshipController.removeFromTargetFollowing);
router.put('/updateFollowing/:id', friendshipController.updateFollowingList);
router.put('/addToTargetFollowers', friendshipController.addToTargetFollowers);



module.exports = router;
























// function routes(User, Follow) {

//     const friendshipRouter = express.Router();




    // // unfollow
    // friendshipRouter.route('/unfollow/:id')
    //     .put((req, res) => {
    //         User.findById(req.params.id, (err, user) => {
    //             if (err) {
    //                 return res.send(err);
    //             }

    //             user.followeing = req.body.newList;
    //             user.save();
    //             const respond = {
    //                 user: req.body.user,
    //                 newList: user.followeing,
    //                 target: req.body.target
    //             };
    //             return res.send(respond);

    //         });
    //     });
//     friendshipRouter.route('/rmvFromtargetfollowes')
//         .put((req, res) => {
//             const { query } = req;
//             User.findOne(query, (err, targetuser) => {
//                 if (err) return res.send(err);
//                 if (targetuser) {

//                     const targetFollowerslist = targetuser.followers;
//                     for (let i = 0; i < targetFollowerslist.length; i++)
//                         if (new String(targetFollowerslist[i].username).valueOf() == new String(req.body.username).valueOf()) {

//                             targetFollowerslist.splice(i, 1);

//                             targetuser.followers = targetFollowerslist;

//                             targetuser.save();
//                             return res.send(targetuser);
//                             break;
//                         }
//                 }
//                 return res.send(err);
//             });
//         });
//     // remfollower
//     friendshipRouter.route('/remfollower/:id')
//         .put((req, res) => {
//             User.findById(req.params.id, (err, user) => {
//                 if (err) return res.send(err);

//                 user.followers = req.body.newList;
//                 user.save();

//                 const respond = {
//                     user: req.body.user,
//                     newList: user.followeing,
//                     target: req.body.target
//                 };
//                 return res.send(respond);

//             });
//         });
//     friendshipRouter.route('/rmvFromtargetfollowing')
//         .put((req, res) => {
//             const { query } = req;
//             User.findOne(query, (err, targetuser) => {
//                 if (err) return res.send(err);
//                 if (targetuser) {

//                     const targetFolloweinglist = targetuser.followeing;
//                     for (let i = 0; i < targetFolloweinglist.length; i++)
//                         if (new String(targetFolloweinglist[i].username).valueOf() == new String(req.body.username).valueOf()) {

//                             targetFolloweinglist.splice(i, 1);

//                             targetuser.followeing = targetFolloweinglist;

//                             targetuser.save();
//                             return res.send(targetuser);
//                         }
//                 }
//                 return res.send(err);
//             });
//         });

//     // new follow
//     friendshipRouter.route('/updateFollowing/:id')
//         .put((req, res) => {
//             User.findById(req.params.id, (err, user) => {
//                 if (err) return res.send(err);

//                 user.followeing = req.body.newList;
//                 user.save();

//                 const respond = {
//                     user: req.body.user,
//                     newList: user.followeing,
//                     target: req.body.target
//                 };
//                 return res.send(respond);

//             });
//         });
//     friendshipRouter.route('/addToTargetFollowers')
//         .put((req, res) => {
//             const { query } = req;
//             User.findOne(query, (err, targetuser) => {
//                 if (err) return res.send(err);
//                 if (targetuser) {
//                     const newFollow = new Follow();
//                     newFollow.username = req.body.username;


//                     targetuser.followers.push(newFollow);

//                     targetuser.save();
//                     return res.send(targetuser);
//                 }
//                 return res.send(err);
//             });
//         });



//     return friendshipRouter;
// }

// module.exports = routes;