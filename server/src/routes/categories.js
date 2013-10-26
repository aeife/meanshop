var Category = require('../models/category.js');

module.exports = {
  getAll: function(req, res){
    Category.find(function (err, categories){
      if (!err) {
        res.send(categories);
      } else {
        console.log(err);
      }
    });
  }
};
