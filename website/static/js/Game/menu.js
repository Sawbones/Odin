function Menu()
{
	var hill_texture;
	this.load = function(menu, canvas, c)
	{
		if(menu == 'characterSelection')
		{
			hill_texture = new Image();
			hill_texture.src = "/img/hill_texture.png";
		}
	}
	this.characterSelection = function(canvas, c)
	{
		backgroundSky();
		backgroundHill("#66C473");
		foregroundHill("3C9147");
		backgroundSun();
	}
}