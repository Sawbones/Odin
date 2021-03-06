var express = require('express');
var app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);

var ejs = require('ejs');
var routes = require('./routes');
var events = require('./events');
app.engine('.html', ejs.__express);

app.set('views', __dirname + '/static/views');
app.set('view engine', 'html');
app.use(express.static(__dirname + '/static'));
app.use(express.bodyParser());

server.listen(8080);

io.sockets.on('connection', function(socket){
	
});

/*
* ---------------------------------------
* PATH DELCARATIONS
* Here is where you need to declare what paths are mapped to what templates
* ---------------------------------------
*/
app.post('/login', routes.login);
app.get('/register', routes.register);
app.post('/register', routes.register);
app.get('/game', routes.index);