
var nodemailer = require("nodemailer");
var fs = require("fs");
var ejs = require("ejs");

	function send() {
		return  data =  ejs.renderFile(process.cwd() + "/views/user.ejs", {'title': 'Express user','email': 'test@mail.com' });
		var transporter = nodemailer.createTransport({
		    host: 'mail.asia-expeditions.com',
		    port: 587,
		    secure: false,
		    auth: {
		      	user: 'lyheng@golftravelmyanmar.com',
		      	pass: 'Lyheng@2019!@#$%'
		    },
		    tls: {
		      	rejectUnauthorized: false
		    }
		});
	  	var mailOptions = {
	    	from: 'lyheng@golftravelmyanmar.com',
	    	to: 'lyheng@golftravelmyanmar.com',
	    	subject: "Subscriber",
	   		html : '123asd'
	  	};
	  	transporter.sendMail(mailOptions, function(error, info){
		    if (error) {
		      console.log(error);
		    } else {
		      // var data =  ejs.renderFile(process.cwd() + "/views/user.ejs", {'title': 'Express user','email': mailOptions.to });
		    }
	  	});
	}

module.exports = {
 send
}
