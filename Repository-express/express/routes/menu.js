const express = require('express');
const router = express.Router();
const faker = require('faker');

/* GET cities page. */
router.get('/menu', (req, res) => {
    res.render('menu', 
        { "menu": [ 
       { "place": "day"}, 
       { "place": "street" },
       { "place": "weather" },
       { "place": "city" }
          ]
        }
    );
});




module.exports = router;
