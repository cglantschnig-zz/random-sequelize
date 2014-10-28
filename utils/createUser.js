var winston = require('winston');
winston.add(winston.transports.File, { filename: 'logs.log' });

var userModel = require('../models/index')['Users'];
var randomUserObject = require('./randomUserObject');
var userMatch = require('../models/userMatch');
var linkUsers = require('./linkUsers');


module.exports = function() {
	var start = +new Date();

	userModel.create(randomUserObject()).then(function (user) {

		userMatch(user.dataValues.Id, function () {
			return null;
		}, function () {
			// table created

			linkUsers(user.dataValues, function() {
				//winston.info('Created all Matches successfully');
				var end = +new Date();
				winston.info('Added User ' + user.dataValues.Id + ' in ' + (end - start) + ' ms');
				return user.dataValues;
			});
		})

	});

};
