var userModel = require('../models/user');
var winston = require('winston');

var error = function(error) {
	var err = new Error('Couldnt create usermodel');
	err.status = 500;
}

module.exports = function (senderId, receiverId) {
	userModel(senderId, error ,function(sender, isSenderNew) {
		userModel(receiverId, error ,function(receiver, isReceiverNew) {

			//link operation

		})
	})
}
