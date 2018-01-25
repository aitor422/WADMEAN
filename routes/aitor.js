var express = require('express');
var router = express.Router();

/* GET own page. */
router.get('/', function(req, res, next) {
  res.render('aitor',{ message: 'My deployment github repository can be found', url: 'https://github.com/aitor422/WADMEAN', urlname: 'here'});
});

module.exports = router;
