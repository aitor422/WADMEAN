var express = require('express');
var router = express.Router();

var mainController = require('../Controllers/main');

/* GET about page. */
router.get('/', mainController.about);

module.exports = router;
