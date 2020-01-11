
var nodemailer = require("nodemailer");
var fs = require("fs");
var ejs = require("ejs");
var part = process.cwd() // org part /pro_all

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

	function send(from, to, cc, bcc, info) {
		ejs.renderFile(part + "/views/user.ejs", {'title': info, 'email': 'test@mail.com' },
			function (err, data) {
				if (err) {
				    console.log(err);
				} else {
				  	var mailOptions = {
				    	from: from,
				    	to: to,
				    	bcc: bcc,
				    	cc: cc,
				    	subject: "Subscriber",
				   		html : data,
				  	};
				  	transporter.sendMail(mailOptions, function(error, info){
					    if (error) {
					      console.log(error);
					    } else {
					    	console.log(info);
					     	// ejs.renderFile(process.cwd() + "/views/user.ejs", {'title': 'Express user','email': mailOptions.to });
					    }
				  	});
				}
			}
		);
	}

module.exports = {
 	send
}
