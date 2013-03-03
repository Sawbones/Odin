var db = require('./db');
var sha1 = require('sha1');
function index(request, response)
{
	response.render('base', {
		body : 'index'
	});
}

function login(request, response)
{
	var email = request.body.email;
	var password = request.body.password;

	//Some simple validation first
	if(typeof email !== 'undefined' && typeof password !== 'undefined')
	{
		db.query("SELECT * FROM user WHERE email = '" + email + "' AND password = '" + sha1(password) + "'", 
		function(err, rows, fields){
			var output = {};
			if(rows.length > 0) //The email and password match..
			{
				output = {success : "The login was successful", error : "", email : email};
			}
			else //The email and password were not found in the database
			{
				output = {success : "", error : "Incorrect Login information"};
			}
			response.send(JSON.stringify(output));
		});
	}
}
function register(request, response)
{
	var email = request.body.email;
	var password = request.body.password;
	var repassword = request.body.repassword;

	var errors = [];

	if( typeof email  !== 'undefined' && typeof password !== 'undefined' && typeof repassword !== 'undefined')
	{
		var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		if(!re.test(email)) //The email is not valid
		{
			errors.push("Email is not valid");
		}

		if(password !== repassword) //The two password are not equal to each other
		{
			errors.push("The passwords did not match");
		}
	}
	else
	{
		errors.push("Missing required fields");
	}

	//Checks to see if there are other users with that email
	db.query("SELECT email FROM user WHERE email='" + email + "'", function(err, rows, fields){
		if(rows.length > 0)
		{
			errors.push("This email is already taken");
		}

		//If there are errors then display them
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
					db.query("INSERT INTO user(id, datetime, email, password) VALUES(" + id + ", NOW(), '" + email + "', '" + sha1(password) + "')");
				});
			response.redirect('/');
		}
	});
}
module.exports.index = index;
module.exports.register = register;
module.exports.login = login;