var express = require('express');
var router = express.Router();
var createUser = require('../utils/createUser');


var createMoreUsers = function(x) {
	for(var i = 0; i < x; i++) {
		var user = createUser();
	}
	return true;
}


/* GET users listing. */
router.get('/', function(req, res) {
		res.render('addUser');
});

/* GET users listing. */
router.get('/add/:number', function(req, res) {
	if(req.params.number) {
		createMoreUsers(parseInt(req.params.number));
		res.render('addUser', {
			addedElements: req.body.number
		});
	}
	else {
		res.render('addUser');
	}
});

module.exports = router;
