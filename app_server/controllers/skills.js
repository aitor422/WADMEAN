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
                    res.render('skills', {
                         title: res.__('Skills'),
                         currenturl: '/skills',
                         skills: body
                    });
               }
          }
     );
};

const showForm = function(req, res) {
     res.render('skills_add', {
          title: res.__('Add') + " " + res.__('Skills'),
          currenturl: '/skills/add'
     });
};

const addData = function(req, res) {
     const path = '/api/skills';

     const postdata = {
          name: req.body.name,
          description: req.body.description
     };

     const requestOptions = {
          url : apiURL.server + path,
          method : 'POST',
          json : postdata
     };

     request (
          requestOptions,
          function (err, response) {
               if (response.statusCode === 201) {
                    res.redirect('/skills');
               } else {
                    res.render('error', {
                         title: 'error',
                         currenturl: '/error',
                         message: res.__('Error adding data: ') + response.statusMessage + ' (' + response.statusCode + ')'
                    });
               }
          }
     );
}

module.exports = {
     skills,
     showForm,
     addData
};
