var express = require('express');
var router = express.Router();

var mainController = require('../Controllers/main');

/* GET own page. */
router.get('/', mainController.aitor);

module.exports = router;
