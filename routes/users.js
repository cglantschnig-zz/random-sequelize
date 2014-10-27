var express = require('express');
var router = express.Router();
var userModel = require('../models/user');
var Hashids = require("hashids"),
		hashids = new Hashids("AllAboutApps", 8);


/* GET users listing. */
router.get('/', function(req, res) {
	userModel(40, function(error) {
		var err = new Error('Couldnt create usermodel');
		err.status = 500;
	},function(user, isNew) {
		res.render('index', { title: 'random-sequelize' });
	})
});

module.exports = router;
