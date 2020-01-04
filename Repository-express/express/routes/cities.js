const express = require('express');
const router = express.Router();
const faker = require('faker');

/* GET cities page. */
router.get('/place', (req, res) => {
   var place = [ 
       { "place": "day"}, 
       { "place": "street" },
       { "place": "weather" },
       { "place": "city" }
  	];

    res.render('place', 
  			{ "place": place}
  	);
});


module.exports = router;
