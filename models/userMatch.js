var Sequelize = require('sequelize');
var sequelize = require('./index');
var winston = require('winston');

module.exports = function(id, errorCb, successCb) {
	id = id.toString();
	var tablename = id ? 'User_' + id : 'User';
	if(!sequelize[tablename]) {
		//winston.info('Create User Table: ' + tablename);
		var User = sequelize.define(tablename, {


			senderId: {
				type: Sequelize.INTEGER,
				primaryKey: true
			},
			receiverId: {
				type: Sequelize.INTEGER,
				primaryKey: true
			},
			match: { // optimierbar
				type: Sequelize.INTEGER
			}


		});

		sequelize[tablename] = User;

		User.sync().then(function(model) {
			successCb(User, true); // return true as 2nd Parameter if the table got created
		}).error(function(error) {
			winston.error(error);
			delete sequelize[tablename];
			errorCb(error);
		})

		/*
		var sqlQuery = "SELECT EXISTS( SELECT * FROM information_schema.tables WHERE table_name = '"+ tablename +"') as state;";

		sequelize.query(sqlQuery).then(function(rows) {
			User.sync().then(function(model) {
				if (rows[0].state) { // table already exists
					winston.info(tablename + ' got successfully loaded from db');
				}
				else { // table got created
					winston.info(tablename + ' got successfully created');
				}
				successCb(User, !rows[0].state); // return true as 2nd Parameter if the table got created
			}).error(function(error) {
				winston.error(error);
				delete sequelize[tablename];
				errorCb(error);
			})
		})
		*/
	}
	else {
		//winston.info(tablename + ' already exists. Just return it.');
		successCb(sequelize[tablename], null)
	}


}