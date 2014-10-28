var userMatch = require('../models/userMatch');
var userModel = require('../models/index')['Users'];
var winston = require('winston');
var matchCalculator = require('./matchCalculator');

var error = function(error) {
	var err = new Error(error);
	err.status = 500;
}

module.exports = function (senderObject, successCb) {
	userMatch(senderObject.Id, error ,function(senderMatchModel, isSenderNew) {
		userModel.findAll(/*{ where : ["updatedAt > ?", senderObject.updatedAt]}*/).then(function(AllRows) {
			var k = 0;

			for(var i = 0; i < AllRows.length; i++) {
				var receiverObject = AllRows[i].dataValues;

				if(receiverObject.Id !== senderObject.Id) { // not necessary if we search by date in findAll above
					var matchValue = matchCalculator(senderObject, receiverObject);

					var matchObject = {
						senderId: senderObject.Id,
						receiverId: receiverObject.Id,
						match: matchValue
					}
					winston.info(matchObject)

					senderMatchModel.create(matchObject).then(function(matchObject) {
						/* Match saved */
						if(k < (AllRows.length - 1) ) {
							k++;
						} else {
							successCb();
						}
					});
				} else {
					k++;
				}

			}
			if(AllRows.length === 1) {
				successCb();
			}
		});
	});
};
