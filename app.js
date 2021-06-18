const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

//database
const database = require('./lib/database');
const seeder = require('./lib/dbSeeder');

const app = express();
const port = process.env.PORT || 4000;

//chat
const server = require('http').Server(app);
const io = require('socket.io')(server);





io.on('connection', socket => {
  console.log('connecteed');

  socket.on('message', (msg) => {

    socket.broadcast.emit('message-broadcast', msg);
  })

});




server.listen(port, function () {
  console.log('listening for requests on port ' + port);
});





class MyServer {

  constructor() {
    this.start();

    this.initDbSeeder();
  }

  start() {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cors());


    //Routes
    const postRouter = require('./routes/postRouter');
    const userRouter = require('./routes/userRouter');
    const friendshipRouter = require('./routes/friendshipRouter');


    // handels routes
    app.use('/apiposts', postRouter);
    app.use('/apiusers', userRouter);
    app.use('/apifreindship', friendshipRouter);


    app.get('/', (req, res) => {
      res.send('Wllcome to server api');
    });






  }
  initDbSeeder() {
    database.open(() => {
      seeder.init();
    });
  }
}
let myserver = new MyServer();