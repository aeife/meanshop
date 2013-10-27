var Product = require('../models/product.js');
var ObjectId = require('mongoose').Types.ObjectId;

module.exports = {
  getAll: function(req, res){
    var query = {};
    if (req.query.categoryId) {
      query = {category: ObjectId.fromString(req.query.categoryId)};
    }

    Product.find(query, function (err, products){
      if (!err) {
        res.send(products);
      } else {
        console.log(err);
      }
    });
  }
};
