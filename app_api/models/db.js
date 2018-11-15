const mongoose = require('mongoose');
let dbURI = 'mongodb://localhost/movieguide';
if (process.env.NODE_ENV === 'production') {
    dbURI = 'mongodb://heroku_xnsjf86t:uhovl37sfo0e4n8881g5agnond@ds121321.mlab.com:21321/heroku_xnsjf86t';
}
mongoose.connect(dbURI, { useNewUrlParser: true });

const readLine = require ('readline');
if (process.platform === 'win32'){
    const rl = readLine.createInterface ({
        input: process.stdin,
        output: process.stdout
    });
    rl.on ('SIGINT', () => {
        process.emit ("SIGINT");
    });
    rl.on ('SIGUSR2', () => {
        process.emit ("SIGUSR2.");
    });
    rl.on ('SIGTERM', () => {
        process.emit ("SIGTERM");
    });
}

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close( () => {
        console.log(`Mongoose disconnected through ${msg}`);
        callback();
    });
};

// For nodemon restarts
process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});
// For app termination
process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
        process.exit(0);
    });
});

require('./users');
require('./movies');
require('./about');


