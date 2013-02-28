var _mysql = require('mysql');

var host = 'localhost';
var port = 3306;
var user = 'root';
var password = '';
var database = 'odin';

var mysql = _mysql.createConnection({
	host : host,
	port : port,
	user : user,
	database : database,
	password : ''
});
mysql.connect();

function query(query_string, callback)
{
	mysql.query(query_string, callback);
}

module.exports.query = query;