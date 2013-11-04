var passport = require('passport');

module.exports = {
  login: function(req, res, next){
    passport.authenticate('local', function(err, user, info) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.send(401);
      }
      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        }
        return res.send(200);
      });
    })(req, res, next);
  }
};