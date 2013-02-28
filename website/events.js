var db = require('./db');
var sha1 = require('sha1');
function login(data)
{
	var email = data.email;
	var password = data.password;
	password = sha1(password);

	db.query("SELECT * FROM user WHERE email='" + email + "' and password ='" + password + "'",
	function(err, rows, fields)
	{
		console.log("Rows: " + rows);
	});
}

module.exports.login = login;