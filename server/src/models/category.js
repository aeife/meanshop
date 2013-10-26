var mongoose = require('mongoose');
var config = require('../config.js');
mongoose.connect(config.mongoDB.url);

var categorySchema = mongoose.Schema({
  title: String,
  description: String,
  created: { type: Date, default: Date.now }
});

var Category = mongoose.model('Category', categorySchema);

module.exports = Category;
