var Product = require('../models/product.js');

module.exports = {
  getAll: function(req, res){
    Product.find(function (err, products){
      if (!err) {
        res.send(products);
      } else {
        console.log(err);
      }
    });
  }
};
