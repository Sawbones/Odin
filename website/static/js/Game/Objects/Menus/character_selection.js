var canvas = document.getElementById('game');
var c = canvas.getContext("2d");

var backgroundSky = function(fillStyle)
{
	var skyBackground = c.createLinearGradient(canvas.width/2, canvas.height, canvas.width/2, -150);
	skyBackground.addColorStop(0, 'rgba(43, 120, 224, 1)');
	skyBackground.addColorStop(.5, 'rgba(43, 120, 224, 1)');
	skyBackground.addColorStop(1, '#FFF5D4');
	c.fillStyle = fillStyle || skyBackground;
	c.fillRect(0, 0, canvas.width, canvas.height);
};

var backgroundSun = function(fillStyle)
{
	//Create a sky
	var startX = canvas.width/4, startY = 10, 
		startRadius = 100, 
		endX = startX, endY = startY, 
		endRadius = canvas.height+200;

	var skyGradient = c.createRadialGradient(startX, startY, startRadius, endX, endY, endRadius);
	skyGradient.addColorStop(0, '#FFF5D4');
	skyGradient.addColorStop(1, 'rgba(43, 120, 224, 0.0)');
	c.fillStyle = fillStyle || skyGradient;
	c.fillRect(0, 0, canvas.width, canvas.height);
}

var foregroundHill = function(fillStyle)
{
	//Foreground hill
	c.beginPath();
	c.fillStyle = fillStyle;
	c.moveTo(0, canvas.height - 100);
	c.quadraticCurveTo(canvas.width/2, canvas.height - 150, canvas.width, canvas.height-20);
	c.lineTo(canvas.width, canvas.height);
	c.lineTo(0, canvas.height);
	c.closePath();
	c.fill();
};

var backgroundHill = function(fillStyle)
{
	//Background hill
	c.beginPath();
	c.fillStyle = fillStyle;
	c.moveTo(canvas.width, canvas.height - 120);
	c.quadraticCurveTo(canvas.width/2, canvas.height - 100, 0, canvas.height-20);
	c.lineTo(canvas.width, canvas.height);
	c.closePath();
	c.fill();
};