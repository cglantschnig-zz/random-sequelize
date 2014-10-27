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

module.exports = sequelize;

