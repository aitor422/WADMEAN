const mongoose = require('mongoose');

const skillsModel = mongoose.model('skills');

const skillsList = function(req, res) {
     skillsModel.find({}, function(err, skills) {
          if (err){
               res.status(404). json(err);
          }
          else {
               res.status(200).json(skills);
          }
     });
};

const addSkill = function(req, res) {
     skillsModel.create(req.body, function(err, newSkill) {
          if (err) {
               res.status(404).json(err);
          }
          else {
               res.status(201).json(newSkill);
          }
     })
}

module.exports = {
     skillsList,
     addSkill
};
