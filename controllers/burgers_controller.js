
var express = require('express');
var router = express.Router();
var Burger = require('../models/burger.js');

router.get('/', function(req,res) {
	res.redirect('/burgers')
});

router.get('/burgers', function(req,res) {

	Burger.findAll({}).then(function(result){
		var hbsObject = {burgers : result}
		res.render('index', hbsObject);
	})
});

router.post('/burgers/create', function(req,res) {
	Burger.create({
		burger_name: req.body.name,
		devoured: req.body.devoured
	}).then(function(result){
		res.redirect('/burgers')
	});
});

router.put('/burgers/update/:id', function(req,res) {
	Burger.update({
		devoured: req.body.devoured
  },
  {
		where: { id : req.params.id }
	}
	).then(function (result) {
		res.redirect('/burgers');
  }, function(rejectedPromiseError){
		console.log(rejectedPromiseError);
  });
});

router.delete('/burgers/delete/:id', function(req,res) {
	Burger.destroy({
    where: { id : req.params.id }
	}).then(function (result) {
		res.redirect('/burgers');
  }, function(rejectedPromiseError){
		console.log(rejectedPromiseError);
  });
});

module.exports = router;
