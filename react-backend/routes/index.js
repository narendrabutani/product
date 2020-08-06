var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  connection.query('select * FROM `react-product`.products;', function(err, data) {
      (err)?res.send(err):res.json({products: data});
  });        
});

module.exports = router;
