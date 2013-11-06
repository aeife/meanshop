var Product = require('../models/product.js');
var ObjectId = require('mongoose').Types.ObjectId;

module.exports = {
  getAll: function(req, res){
    var query = {};
    if (req.query.category) {
      query = {category: req.query.category};
    }

    Product.find(query, function (err, products){
      if (!err) {
        res.send(products);
      } else {
        console.log(err);
      }
    });
  },
  get: function(req, res){
    Product.findOne({_id: ObjectId.fromString(req.params.productId)}, function (err, product){
      if (!err) {
        res.send(product);
      } else {
        console.log(err);
      }
    });
  },
  new: function(req, res){
    var product = new Product({title: req.title, description: req.description, category: req.category});
    product.save(function(err){
      if (err) {
        res.send(500);
      } else {
        res.send(200);
      }
    });
  }
};
