const request = require('request');
const apiURL = require('./apiURLs')

const skills = function(req, res) {
     const path = '/api/skills';
     const requestOptions = {
          url: apiURL.server + path,
          method: 'GET',
          json: {},
          qs: {}
     };

     request(
          requestOptions,
          function(err, response, body) {
               if (err) {
                    res.render('error', {
                         title: 'error',
                         currenturl: '/',
                         message: err.message
                    });
               } else if (response.statusCode != 200) {
                    res.render('error', {
                         title: 'error',
                         currenturl: '/',
                         message: 'Error accessing API: ' + response.statusMessage + " (" + response.statusCode + ')'
                    });
               } else if (!(body instanceof Array)) {
                    res.render('error', {
                         title: 'error',
                         currenturl: '/',
                         message: 'Unexpected return data'
                    });
               } else if (!body.length) {
                    res.render('error', {
                         title: 'error',
                         currenturl: '/',
                         message: 'No documents in collection'
                    });
               } else {
                    translateBody(body, res);
                    res.render('skills', {
                         title: res.__('Skills'),
                         currenturl: '/skills',
                         skills: body
                    });
               }
          }
     );
}

function translateBody(body, res) {
     body.forEach(function(part, index, arr) {
          arr[index].name = res.__(arr[index].name);
          arr[index].description = res.__(arr[index].description);
     });
}

module.exports = {
     skills
};
