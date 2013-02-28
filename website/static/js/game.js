$(window).load(function(){
	var socket = io.connect('127.0.0.1:8080');
	var canvas = document.getElementById("game");
	var c = canvas.getContext("2d");

	socket.emit('login', {username : 'flynn', password : 'root'});
	socket.on('login_success', function(data){
		console.log(data);
	});
	socket.on('login_fail', function(data){
		console.log(data);
	});

	c.fillStyle = "#222";
	c.fillRect(0, 0, canvas.width, canvas.height);
});