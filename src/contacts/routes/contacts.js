var express = require('express');
var router = express.Router();
var contacts = [];
var count = 0;
var num = -1;
var fs = require('fs');

/* GET contacts */
router.get('/:id', function(req, res, next) {
	console.log('in get');
	res.send(contacts[req.params.id]);
});

router.post('/messages/:id', function(req, res, next){
	contacts[parseInt(req.params.id)].message = req.body.message;
	res.json(contacts[parseInt(req.params.id)]);
});

router.post('/', function(req, res, next) {
	//var ID;	
	//ID = parseInt(req.params.id);
	//console.log('id' + ID);
	contacts.push(req.body);
	num = num + 1;
	fs.writeFile("C:\\Users\\Hp\\Downloads\\mrnd-nodejs-master latest\\mrnd-nodejs-master\\spec\\tests\\data\\" + num + "-Contact.json", JSON.stringify(req.body));
	count++;
	res.send('' + (count-1));
});

router.put('/:id', function(req, res, next) {
	var id = parseInt(req.params.id);
	
	if(req.body.firstName != undefined)
		contacts[id].firstName = req.body.firstName;
	if(req.body.lastname != undefined)
		contacts[id].lastName = req.body.lastName;
	if(req.body.phone != undefined)
		contacts[id].phone = req.body.phone;
	res.send(contacts[id]);
});

module.exports = router;
