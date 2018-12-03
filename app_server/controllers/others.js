const request = require('request');
//const mongoose = require('mongoose');
//const Aboutschema = mongoose.model('About');

const apiOptions = {
    server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://still-castle-60772.herokuapp.com/';
}

// const aboutCreate= function(req,res){
//
//
//     Aboutschema.create({
//         paragraph: 'dasdsadsdsadas67364764284642ggfjfgsdjftywieuadasdsad',
//     }, (err, about) => {
//         if (err) {
//             res
//                 .status(400)
//                 .json(err);
//         } else {
//             res
//                 .status(201)
//                 .json(about);
//         }
//     });
//     res.render('index', {
//         title: 'MovieGuide - a place to find great movies',
//         pageHeader:{
//             title: 'MovieGuide',
//             strapline: 'Discover great movies'
//
//         },
//         sidebar: "Looking for a great movie. Let movieguide help you!",
//     });
// };

const _renderAboutpage = function(req, res, responseBody){
    let message = null;
    if (!(responseBody)) {
        message = "API lookup error";
        responseBody = [];
    // } else {
    //     if (!responseBody.length) {
    //         message = "No places found nearby";
    //     }
    }
    console.log(responseBody);
    res.render('index', {
        title: 'MovieGuide - a place to find great movies',

        abouts: responseBody,
        message: message,
    });
};

/* GET about page */

const about = function(req, res,body){
    const path = `/api/abouts/5c014385e158e021ac506ccc` ;
    const postData = {
        paragraph: body.paragraph
    };
    const requestOptions = {
        url : apiOptions.server + path,
        method : 'GET',
        json : {},
        // qs : {
        //     paragraph : 'Testing'
        // }
    };
    console.log("Before request");
    request(requestOptions, (err, response, body) => {

            _renderAboutpage(req, res, body);
            console.log(body.paragraph);
            // console.log(body);
        }

    );
};


module.exports = {
    about
    //aboutCreate
};
