// Module dependencies
const mongoose = require('mongoose'),
    Post = require('../models/postModel'),
    User = require('../models/userModel'),
    //connectionString = 'mongodb://localhost/biowaze';
    connection = null;

class DBSeeder {

    async init() {
        await mongoose.connection.db.listCollections({ name: 'posts' })
            .next((err, collinfo) => {
                if (!collinfo) {
                    console.log('Starting dbSeeder...');
                    this.seedposts();
                }
            });
        await mongoose.connection.db.listCollections({ name: 'users' })
            .next((err, collinfo) => {
                if (!collinfo) {
                    console.log('Starting dbSeeder...');
                    this.seedusers();
                }
            });
    }

    seedposts() {
        Post.remove({});
        for (let i = 1; i < 6; i++) {
            var post = new Post({
                'username': "user_user" + i,
                'content': `SERVER ___Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                'date': new Date("Fri Dec 08 2019 07:44:57"),
                'tags': [
                    { tag: "bootstrap 4.0" },
                    { tag: "laravel" },
                    { tag: "html" },
                    { tag: "css" }
                ],
                'likes': [
                    { username: "user_user" + i + 1 },
                    { username: "user_user" + i + 2 },
                    { username: "user_user" + i + 3 },
                ],
                'comments': [
                    { username: "user_user" + i, content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.` },
                    { username: "user_user" + i, content: `Lorem Ipsum isdustry. Lorem Ipsum has s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.` },
                ],
                'shares': [
                    { username: "user_user" + i + 4 },
                    { username: "user_user" + i + 3 },
                    { username: "user_user" + i + 2 },
                    { username: "user_user" + i + 1 },
                ],
            });

            post.save((err, pos) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('inserted customer: ' + pos.username + ' ' + pos.content);
                }
            });
        }
    }
    seedusers() {
        User.remove({});
        for (let i = 1; i < 6; i++) {
            var user = new User({
                'username': "user_user" + i,
                'password': "ahed_from_server",
                'fname': "ahed_from server" + i,
                'lname': "ahed_from server" + i,
                'location': "ahed_from server" + i,
                'job': "ahed_from server" + i,
                'sex': "ahed_from server" + i,
                'isDoctor': "ahed_from server" + i,
                'dateofBirth': new Date("Fri Dec 08 2019 07:44:57"),
                'email': "ahed@gmail.con",
                'followers': [
                    { username: "user_user" + i + 1 },
                    { username: "user_user" + i + 2 },
                    { username: "user_user" + i + 3 },
                ],

                'followeing': [
                    { username: "user_user" + i + 1 },
                    { username: "user_user" + i + 2 },
                    { username: "user_user" + i + 3 },
                ],
            });

            user.save((err, user) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('inserted customer: ' + user.username + ' ' + user.password);
                }
            });
        }
    }
}

module.exports = new DBSeeder();









