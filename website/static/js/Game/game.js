function Game()
{
	var menu;
	var socket = io.connect('127.0.0.1:8080');
	var canvas = document.getElementById("game");
	var c = canvas.getContext("2d");
	this.init = function()
	{
		c.fillStyle = "#222";
		c.fillRect(0, 0, canvas.width, canvas.height);

		menu = new Menu(canvas, c);

		//Tell server who we are
		//Get tiles
		//Get objects in view
		//Get other players
		//Get player quests
		//Get Items
	}

	this.update = function(delta)
	{
		menu.characterSelection(canvas, c);
	}

	this.draw = function(delta)
	{

	}
}