const apiOptions = {
    server : 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://still-castle-60772.herokuapp.com/';
}

const requestOptions = {
    url: 'http://yourapi.com/api/path',
    method: 'GET',
    json: {},
    qs: {
        offset: 20
    }
};

const request = require('request');


/* GET 'home' page */
const home = function (req, res) {
    res.render('home', {title: 'Home'});


};


module.exports = {
    home
};
