$(window).load(function(){
	var socket = io.connect('127.0.0.1:8080');
	var canvas = document.getElementById("game");
	var c = canvas.getContext("2d");

	socket.emit('handshake', {username : 'flynn', password : 'root'});
	socket.on('success', function(data){
		console.log(data);
	});
});