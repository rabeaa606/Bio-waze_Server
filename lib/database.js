// Module dependencies
const mongoose = require('mongoose'),
    // connectionString = 'mongodb://localhost/biowaze';
    connectionString = 'mongodb+srv://rabeaa:Rbe3safadi12%23@cluster0.tndvs.mongodb.net/biowaze?retryWrites=true&w=majority';
let connection = null;

class Database {

    open(callback) {
        var options = {
            promiseLibrary: global.Promise,
            useNewUrlParser: true,
            useUnifiedTopology: true
        };
        mongoose.connect(connectionString, options, (err) => {
            if (err) {
                console.log('mongoose.connect() failed: ' + err);
            }
        });
        connection = mongoose.connection;

        mongoose.connection.on('error', (err) => {
            console.log('Error connecting to MongoDB: ' + err);
            callback(err, false);
        });

        mongoose.connection.once('open', () => {
            console.log('We have connected to mongodb');
            callback(null, true);

        });

    }

    // disconnect from database
    close() {
        connection.close(() => {
            console.log('Mongoose default connection disconnected through app termination');
            process.exit(0);
        });
    }

}

module.exports = new Database();
