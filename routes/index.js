var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Awesome Web App in node js', text1:'TechEd New Zeland' });
});

module.exports = router;
