function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.send(401);
}

module.exports = {
  addRoutes: function (app, handlers){
    app.get('/products', handlers.products.getAll);
    app.get('/products/:productId', handlers.products.get);
    app.get('/categories', handlers.categories.getAll);
    app.post('/login', handlers.auth.login);
    app.post('/products', ensureAuthenticated, handlers.products.new);
  }
};
