var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
  title: String,
  description: String,
  created: { type: Date, default: Date.now }
});

var Category = mongoose.model('Category', categorySchema);

module.exports = Category;
