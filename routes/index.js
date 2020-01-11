var express = require("express");
var mail = require('../config/mail')

// var mail = require('/email.ejs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });

});

router.get('/user', function(req, res, next) {

  mail.send();
  console.log(mail.send())
  res.render('user', { 'title': 'Express user','email': 'test' });

});

module.exports = router;
