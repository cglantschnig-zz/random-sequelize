var userModel = require('../models/index')['Users'];
var randomUserObject = require('./randomUserObject');
var userMatch = require('../models/userMatch');
var linkUsers = require('./linkUsers');
var winston = require('winston');


module.exports = function() {

	userModel.create(randomUserObject()).then(function (user) {

		userMatch(user.dataValues.Id, function () {
			return null;
		}, function () {
			// table created

			linkUsers(user.dataValues, function() {
				winston.info('Created all Matches successfully');
				return user.dataValues;
			});
		})

	});

};
