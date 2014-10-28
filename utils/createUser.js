var userModel = require('../models/index')['Users'];
var randomUserObject = require('./randomUserObject');
var userMatch = require('../models/userMatch');


module.exports = function() {

	userModel.create(randomUserObject()).then(function (user) {

		userMatch(user.dataValues.Id, function () {
			return null;
		}, function () {
			// table created
			return user.dataValues;
		})

	});

};
