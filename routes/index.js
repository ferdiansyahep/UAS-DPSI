var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.get('Hello World! API berjalan dengan baik...');
});

module.exports = router;