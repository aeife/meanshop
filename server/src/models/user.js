var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var userSchema = mongoose.Schema({
  username: String,
  hash: { type: String, required: true },
  created: { type: Date, default: Date.now }
});

userSchema.methods.setPassword = function (password, done) {
  var self = this;
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      self.hash = hash;
      done(self);
    });
  });
};

userSchema.methods.verifyPassword = function(password, callback) {
  bcrypt.compare(password, this.hash, callback);
};

var User = mongoose.model('User', userSchema);

module.exports = User;
