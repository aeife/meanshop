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
  },
  get: function(req, res){
    Product.findOne({_id: ObjectId.fromString(req.params.productId)}).populate('category').exec(function (err, product){
      if (!err) {
        console.log(product.category);
        res.send(product);
      } else {
        console.log(err);
      }
    });
  },
  update: function(req, res){
    // check if category is whole object and replace it with id
    if (req.body.category instanceof Object){
      req.body.category = req.body.category._id;
    }

    // check if _id is given for query
    var query;
    if (req.body._id){
      // udate
      Product.update({_id: ObjectId.fromString(req.body._id)}, {title: req.body.title, description: req.body.description, category: req.body.category}, {}, function(err){
        if (err) {
          console.log(err);
          res.send(500);
        } else {
          res.send(204);
        }
      });
    } else {
      var product = new Product({title: req.body.title, description: req.body.description, category: req.body.category});
      product.save(function(err){
        if (err) {
          console.log(err);
          res.send(500);
        } else {
          res.send(204);
        }
      });
    }


  }
};
