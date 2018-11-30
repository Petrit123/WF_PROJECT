const express = require('express');

const router = express.Router();
const ctrlUsers = require('../controllers/users');
const ctrlMovies = require('../controllers/movies');
const ctrSavedMovies = require('../controllers/savedMovies');
const ctrlAbout = require('../controllers/about');
const ctrlOthers = require('../../app_server/controllers/others');



// users
router
    .route('/users')
    .get(ctrlUsers.UsersCreate)
    .post(ctrlUsers.UsersCreate);

router
    .route('/users/:userid')
    .get(ctrlUsers.UsersReadOne)
    .put(ctrlUsers.UsersUpdateOne)
    .delete(ctrlUsers.UsersDeleteOne);

//savedMovies
router
    .route('/users/:userid/savedMovies')
    .post(ctrSavedMovies.savedMoviesCreate);

router
    .route('/users/:userid/savedMovies/:savedMovieid')
    .get(ctrSavedMovies.savedMoviesReadOne)
    .put(ctrSavedMovies.savedMoviesUpdateOne)
    .delete(ctrSavedMovies.savedMoviesDeleteOne);

// movies
router
    .route('/movies')
    .get(ctrlMovies.MoviesCreate)
    .post(ctrlMovies.MoviesCreate);

router
    .route('/movies/:movieid')
    .get(ctrlMovies.MoviesReadOne)
    .put(ctrlMovies.MoviesUpdateOne)
    .delete(ctrlMovies.MoviesDeleteOne);

// about
router
    .route('/abouts')
    .get(ctrlAbout.AboutCreate)
    .post(ctrlAbout.AboutCreate);

router
    .route('/abouts/:aboutid')
    .get(ctrlAbout.AboutReadOne)
    .put(ctrlAbout.AboutUpdateOne)
    .delete(ctrlAbout.AboutDeleteOne);



// router
//     .route('/aboutTest')
//     .get(ctrlOthers.aboutCreate);




module.exports = router;
