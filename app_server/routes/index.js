const express = require('express');
const router = express.Router();

const mainController = require('../controllers/main');
const studiesController = require('../controllers/studies');
const skillsController = require('../controllers/skills');
const aboutController = require('../controllers/about');

/* GET home page. */
router.get('/', mainController.index); // Home page
router.get('/studies', studiesController.studies); // studies Page
router.get('/skills', skillsController.skills); //Skills page
router.get('/about', aboutController.about); // about page
router
     .route('/skills/add')
     .get(skillsController.showForm)
     .post(skillsController.addData);


module.exports = router;
