var link = require('./linkUsers');
var winston = require('winston');
var random = require('./randomNumber');

module.exports = function() {
	var sender = random(0,20);
	var receiver = sender;
	while(sender === receiver) {
		receiver = random(0,20);
	}

	link(sender,receiver);

}
