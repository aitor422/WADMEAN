const mongoose = require('mongoose');

const studiesModel = mongoose.model('studies');

const studiesList = function(req, res) {
     studiesModel.find({}, function(err, studies) {
          if (err){
               res.status(404), json(err);
          }
          else {
               res.status(200).json(studies);
          }
     });
};

const addStudy = function(req, res) {
     studiesModel.create(req.body, function(err, newStudy) {
          if (err) {
               res.status(404), json(err);
          }
          else {
               res.status(201).json(newStudy);
          }
     })
}

module.exports = {
     studiesList,
     addStudy
};
