const User = require('../models/userModel');
const Follow = require('../models/followModel');



//unfollow
exports.unfollow = async (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err) {
            return res.send(err);
        }

        user.followeing = req.body.newList;
        user.save();
        const respond = {
            user: req.body.user,
            newList: user.followeing,
            target: req.body.target
        };
        return res.send(respond);

    });
};

//remove From Target Followers
exports.removeFromTargetFollowers = async (req, res) => {
    const { query } = req;
    User.findOne(query, (err, targetuser) => {
        if (err) return res.send(err);
        if (targetuser) {

            const targetFollowerslist = targetuser.followers;
            for (let i = 0; i < targetFollowerslist.length; i++)
                if (new String(targetFollowerslist[i].username).valueOf() == new String(req.body.username).valueOf()) {

                    targetFollowerslist.splice(i, 1);

                    targetuser.followers = targetFollowerslist;

                    targetuser.save();
                    return res.send(targetuser);
                    break;
                }
        }
        return res.send(err);
    });
};


//remove follower
exports.remfollower = async (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err) return res.send(err);

        user.followers = req.body.newList;
        user.save();

        const respond = {
            user: req.body.user,
            newList: user.followeing,
            target: req.body.target
        };
        return res.send(respond);

    });
};


//remove From Target Following List
exports.removeFromTargetFollowing = async (req, res) => {
    const { query } = req;
    User.findOne(query, (err, targetuser) => {
        if (err) return res.send(err);
        if (targetuser) {

            const targetFolloweinglist = targetuser.followeing;
            for (let i = 0; i < targetFolloweinglist.length; i++)
                if (new String(targetFolloweinglist[i].username).valueOf() == new String(req.body.username).valueOf()) {

                    targetFolloweinglist.splice(i, 1);

                    targetuser.followeing = targetFolloweinglist;

                    targetuser.save();
                    return res.send(targetuser);
                }
        }
        return res.send(err);
    });
};


//update Following List
exports.updateFollowingList = async (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err) return res.send(err);

        user.followeing = req.body.newList;
        user.save();

        const respond = {
            user: req.body.user,
            newList: user.followeing,
            target: req.body.target
        };
        return res.send(respond);

    });
};


//After Following : add To Target Followers
exports.addToTargetFollowers = (req, res) => {
    const { query } = req;
    User.findOne(query, (err, targetuser) => {
        if (err) return res.send(err);
        if (targetuser) {
            const newFollow = new Follow();
            newFollow.username = req.body.username;


            targetuser.followers.push(newFollow);

            targetuser.save();
            return res.send(targetuser);
        }
        return res.send(err);
    });
};