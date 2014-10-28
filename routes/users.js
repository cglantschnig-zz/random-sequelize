var express = require('express');
var router = express.Router();
var createUser = require('../utils/createUser');


/* GET users listing. */
router.get('/', function(req, res) {
	user = createUser();
	res.render('index');
});

module.exports = router;
