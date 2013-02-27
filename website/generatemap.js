function getMapTiles(name)
{
	var fs = require('fs');

	var map = JSON.parse(fs.readFileSync('data/maps/' + name + '.json'));

	return map;
}

function generate(name, width, height)
{

	var mapData = [];
	for(var y = 0; y < height; y++)
	{
		mapData[y] = [];
		for(var x = 0; x < width; x++)
		{
			var number = Math.round((Math.random()*5));
			mapData[y].push(number);
		}
	}
	var map = {tiles : mapData};
	console.log("Generating Random Map");
	console.log(mapData);
	var fs = require('fs');
	fs.writeFileSync('data/maps/' + name + '.json', JSON.stringify(map));
}

module.exports.generate = generate;
module.exports.getMapTiles = getMapTiles;