var categories = require('./categoryHelper')({});
var randomNumber = require('./randomNumber');
var randomArray = require('./randomArray');


module.exports = function() {

	var multi = [
		{
			count: 25,
			object: categories.sports
		},
		{
			count: 19,
			object: categories.social
		},
		{
			count: 10,
			object: categories.romance
		},
		{
			count: 8,
			object: categories.leisure
		},
		{
			count: 5,
			object: categories.bub
		}
	];

	var returnedObject = {};


	for(var j = 0; j < multi.length; j++) {
		currentObject = multi[j].object;
		currentRandomArray = randomArray(multi[j].count);
		var i = 0;
		for (key in currentObject) {
			if (currentObject.hasOwnProperty(key)) {
				if(i === currentRandomArray[0]) {
					currentObject[key] = true;
					currentRandomArray.shift();
				}
				else {
					currentObject[key] = false;
				}
				returnedObject[key] = currentObject[key];
				i++;
			}
		}
	}

	returnedObject.Fault = (randomNumber(0,1) === 0);
	returnedObject.BreakupReason = randomNumber(0,23);
	returnedObject.LastBreakup = randomNumber(0,4);


	return returnedObject;


}


