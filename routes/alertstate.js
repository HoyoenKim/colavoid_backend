var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/backend', function(req, res, next) {
  console.log('Hello')
  //res.render('index', { title: 'Exptrdd' });
  res.json([{ id: 1, username: "daisy" }]);
});

module.exports = router;
