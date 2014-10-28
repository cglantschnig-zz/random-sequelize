var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var config = require('../config/db.json')['development'];

var sequelize = new Sequelize(config.database, config.username, config.password, {
	dialect: "postgres",
	host: config.host,
	port: config.port,
	logging: false,
	define: {
		freezeTableName: true
	}
});

sequelize['Users'] = sequelize.import(__dirname + "/user"); // map User Table in the sequilize Object

module.exports = sequelize;

