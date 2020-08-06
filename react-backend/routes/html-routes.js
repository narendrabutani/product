var path = require('path');
var mysql = require('mysql');

module.exports = function(app, connection){
    app.get('/', function(req, res) {
        connection.query('select * FROM `react-product`.products;', function(err, data) {
            (err)?res.send(err):res.json({products: data});
        });        
    });
};
