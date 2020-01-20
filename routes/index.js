var express = require("express");
var mail = require('../config/mail')
var pop = require('../config/pop')
var api = require('../config/api')

// var mail = require('/email.ejs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	pop.chilkatExample();
  res.render('index', { title: 'Express' });

});

router.get('/user', function(req, res, next) {
  var datam = 'lyheng@golftravelmyanmar.com'
  mail.send(datam, datam, null, null, '1234'); // mail.send(from, to, cc, bcc, data);
  res.render('user', { 'title': 'Express user','email': 'test' });
  
});

module.exports = router;
