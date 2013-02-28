function index(request, response)
{
	response.render('base', {
		body : 'index'
	});
}

function register(request, response)
{
	var email = request.body.email;
	var password = request.body.password;
	var repassword = request.body.repassword;
	var db = require('./db');

	var errors = [];

	if( typeof email  !== 'undefined' && typeof password !== 'undefined' && typeof repassword !== 'undefined')
	{
		var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		if(!re.test(email))
		{
			errors.push("Email is not valid");
		}

		if(password !== repassword)
		{
			errors.push("The passwords did not match");
		}
	}
	else
	{
		errors.push("Missing required fields");
	}

	if(errors.length > 0)
	{
		response.render('base', {
			body : 'register',
			errors : errors
		});
	}
	else
	{
		db.query("SELECT COUNT(*) as total FROM user", function(err, rows, fields)
			{
				var id = rows[0].total + 1;
				var sha1 = require('sha1');
				db.query("INSERT INTO user(id, datetime, email, password) VALUES(" + id + ", NOW(), '" + email + "', '" + sha1(password) + "')");
			});
		response.redirect('/');
	}
}
module.exports.index = index;
module.exports.register = register;