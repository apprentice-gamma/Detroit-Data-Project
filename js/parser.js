var LOTS = require('./MCMData2.json'); //our data, cut

console.log("required");

var stringLots = JSON.stringify(LOTS);

var parsedLots = JSON.parse(stringLots);

console.log("parsed");

var fs = require('fs'); //needed to write files
for(var i = 0; i < parsedLots.features.length;i++){
	var occupancyStatus = parsedLots.features[i].properties.Occupancy; 

	//console.log(occupancyStatus);
	if(occupancyStatus === null){
		console.log(parsedLots.features[i].properties.AddCombo);
	}
}



//var _ = require('underscore'); //used to filter

//console.log("Requirements made.");

//var filtered = _.where(stringLots, "{Occupancy: 'unoccupied'}");

//only returns unoccupied entries

//console.log("JSON filtered");

//fs.writeFile('unoccupiedLots.json', filtered);

//console.log("File written.");

/*parsedLots.filter(function(lots){
	return lots.Occupancy === "unoccupied";
});*/


