const express = require('express');
const router = express.Router();
const faker = require('faker');

/* GET cities page. */
router.get('/menu', (req, res) => {
    res.render('menu', 
        { "menu": [ 
       { "day": "Monday"}, 
       { "day": "Thursday"}, 
       { "day": "Wendssday"}, 
       { "day": "Tuesday"}, 
       { "day": "Friday"}, 
       { "day": "Saturday"}, 
       { "day": "Sunday"}
          ]
        }
    );
});




module.exports = router;
