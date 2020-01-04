const express = require('express');
const router = express.Router();
const faker = require('faker');

/* GET home page. */
router.get('/', (req, res) => {
   var adress = [ 
       { "city": faker.address.city(), 
  	   	 "street": faker.address.streetAddress()
  	   },
       { "city": faker.address.city(), 
  	   	 "street": faker.address.streetAddress()
  	   },
       { "city": faker.address.city(), 
  	   	 "street": faker.address.streetAddress()
  	   }
  	];
});
module.exports = router;
