var random = require("./randomNumber");

module.exports = function(count) {
	var checks = random(0, count-1);
	var i = 0;
	var result = [];
	while(i < checks) {
		var tip = random(0, count-1);
		if(result.indexOf(tip) === -1) {
			result.push(tip);
			i++;
		}
	}
	return result.sort(function(a, b){return a-b});
}
