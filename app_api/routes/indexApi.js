const express = require('express');
const router = express.Router();

const ctrlApiStudies = require('../controllers/ctrlApiStudies');
const ctrlApiSkills = require('../controllers/ctrlApiSkills');

router
     .route('/studies')
     .get( ctrlApiStudies.studiesList)
     .post(ctrlApiStudies.addStudy);

router
     .route('/skills')
     .get( ctrlApiSkills.skillsList)
     .post(ctrlApiSkills.addSkill);


module.exports = router;
