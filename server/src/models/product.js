var mongoose = require('mongoose');
var config = require('../config.js');
mongoose.connect(config.mongoDB.url);

var productSchema = mongoose.Schema({
  name: String,
});

var Product = mongoose.model('Product', productSchema);

module.exports = Product;
