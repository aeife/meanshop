var Category = require('../models/category.js');
var ObjectId = require('mongoose').Types.ObjectId;

module.exports = {
  getAll: function(req, res){
    Category.find(function (err, categories){
      if (!err) {
        res.send(categories);
      } else {
        console.log(err);
      }
    });
  },
  get: function(req, res){
    Category.findOne({_id: ObjectId.fromString(req.params.categoryId)}, function (err, category){
      if (!err) {
        res.send(category);
      } else {
        console.log(err);
      }
    });
  },
  update: function(req, res){
    if (req.body._id){
      // update
      Category.update({_id: ObjectId.fromString(req.body._id)}, {title: req.body.title, description: req.body.description}, {}, function(err){
        if (err) {
          console.log(err);
          res.send(500);
        } else {
          res.send(204);
        }
      });
    } else {
      // insert
      var category = new Category({title: req.body.title, description: req.body.description});
      category.save(function(err){
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
