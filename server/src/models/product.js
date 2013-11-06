var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
  title: String,
  description: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
  created: { type: Date, default: Date.now }
});

var Product = mongoose.model('Product', productSchema);

module.exports = Product;
