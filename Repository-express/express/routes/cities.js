const express = require('express');
const router = express.Router();
const faker = require('faker');

/* GET cities page. */
router.get('/cities', (req, res) => {
   var cities = [ 
       { "name": "Minsk"}, 
  	   { "name": "San Francisco"},
       { "name": "Seul"}
  	];

    res.render('cities', 
  			{ "cities": cities}
  	);
});


module.exports = router;
