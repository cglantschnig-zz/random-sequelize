var categoryHelper = require('./categoryHelper');

module.exports = function(senderObject, receiverObject) {
	var match = 0;
	var parsedSender = categoryHelper(senderObject);
	var parsedReceiver = categoryHelper(receiverObject);
	var multi = [
		{
			count: 25,
			object: 'sports',
			percent: 10
		},
		{
			count: 19,
			object: 'social',
			percent: 10
		},
		{
			count: 10,
			object: 'romance',
			percent: 10
		},
		{
			count: 8,
			object: 'leisure',
			percent: 10
		},
		{
			count: 5,
			object: 'bub',
			percent: 10
		}
	];

	for(var i = 0; i < multi.length; i++) {
		var category = multi[i].object;
		var currentObject = parsedSender[category];
		var senderKeys = [];
		var receiverKeys = [];
		for (key in currentObject) {
			if (currentObject.hasOwnProperty(key)) {
				if(parsedSender[category][key]) {
					senderKeys.push(key)
				}
				if(parsedReceiver[category][key]) {
					receiverKeys.push(key)
				}
			}
		}

		var min = Math.min(senderKeys.length, receiverKeys.length);
		if(min !== 0) {
			var count = 0;

			for(var j = 0; j < senderKeys.length; j++) {
				if(receiverKeys.indexOf(senderKeys[j]) > -1) {
					count++;
				}
			}

			var partMatch = parseInt((count / min * multi[i].percent / 100) * 100)
			match += partMatch;
		}

	}

	match += parsedSender.BreakupReason === parsedReceiver.BreakupReason ? 20 : 0;
	match += parsedSender.LastBreakup === parsedReceiver.LastBreakup ? 15 : 0;
	match += parsedSender.Fault === parsedReceiver.Fault ? 15 : 0;

	return match;

}
