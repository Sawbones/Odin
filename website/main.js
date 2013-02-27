var express = require('express');
var app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);

var ejs = require('ejs');
var routes = require('./routes');
app.engine('.html', ejs.__express);

app.set('views', __dirname + '/static/views');
app.set('view engine', 'html');
app.use(express.static(__dirname + '/static'));

server.listen(8080);

io.sockets.on('connection', function(socket){
	socket.on('handshake', function(data){
		console.log(data);
		socket.emit('success', {output : "You did good kid"});
	});
});

/*
* ---------------------------------------
* PATH DELCARATIONS
* Here is where you need to declare what paths are mapped to what templates
* ---------------------------------------
*/
app.get('/', routes.index);