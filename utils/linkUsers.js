var userModel = require('../models/userMatch');
var winston = require('winston');

var error = function(error) {
	var err = new Error(error);
	err.status = 500;
}

module.exports = function (senderId, receiverId) {
	userModel(senderId, error ,function(sender, isSenderNew) {
		userModel(receiverId, error ,function(receiver, isReceiverNew) {

			//link operation

		})
	})
}
