const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const savedMoviesSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String
    },
    videoURL: {
        type: String
    }
});

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        lowercase: true,
        //required: true,
    },
    email: {
        type: String,
        lowercase: true,
        //required: true,
        //match: /^[a-zA-Z0-9]+$/,
    },
    username: {
        type: String,
        lowercase: true,
      //  required: true,
        //match: /^[a-zA-Z0-9]+$/,
    },
    password: {
        type: String,
        //required: true,
    },
    hash: String,
    salt: String

  //  savedMovies: [savedMoviesSchema]
});

userSchema.methods.setPassword = function (password) {
this.salt = crypto.randomBytes(16).toString('hex');
this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64,
'sha512').toString('hex');
};


userSchema.methods.validPassword = function (password) {
const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64,
'sha512').toString('hex');
return this.hash === hash;
};

userSchema.methods.generateJwt = () => {
const expiry = new Date();
expiry.setDate(expiry.getDate() + 7);
return jwt.sign({
_id: this._id,
email: this.email,
name: this.name,
exp: parseInt(expiry.getTime() / 1000),
}, process.env.JWT_SECRET);
};




mongoose.model('User', userSchema);
