const apiOptions = {
    server : 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://still-castle-60772.herokuapp.com/';
}

const request = require('request');


const _renderAboutpage = function(req, res, responseBody){
    let message = null;
    if (!(responseBody instanceof Array)) {
        message = "API lookup error";
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = "No places found nearby";
        }
    }
    res.render('index', {
        title: 'MovieGuide - a place to find great movies',
        pageHeader:{
            title: 'MovieGuide',
            strapline: 'Discover great movies'
        },
        sidebar: "Looking for a great movie. Let movieguide help you!",
        abouts: req,
        message: message
});
};

/* GET about page */

const about = function(req, res){
    const path = '/api/abouts' ;
    const requestOptions = {
        url : apiOptions.server + path,
        method : 'GET',
        json : {},
        qs : {
            paragraph : 'Testing'
        }
    };
    request(requestOptions, (err, response, body) => {
            _renderAboutpage(req, res);
        }
    );
};




module.exports = {
    about,
};
