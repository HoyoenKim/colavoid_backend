var express = require('express');
var router = express.Router();
var fs = require('fs')

/* GET home page. */
router.get('/backend', function(req, res, next) {
  console.log('Hello')
  var detect_result = fs.readFileSync('/home/softbeep/Desktop/image_detect/detect_log.json')
  detect_result = JSON.parse(detect_result)
  res.json(detect_result)
  //res.render('index', { title: 'Exptrdd' });
  //res.json([{ id: 1, username: "daisy" }]);
});

module.exports = router;
