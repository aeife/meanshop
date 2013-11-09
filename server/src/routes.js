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
    app.post('/products', handlers.products.update);
    app.get('/categories', handlers.categories.getAll);
    app.get('/categories/:categoryId', handlers.categories.get);
    app.post('/categories', handlers.categories.update);
    app.post('/login', handlers.auth.login);
    app.get('/logout', handlers.auth.logout);
    app.get('/auth', handlers.auth.status);
  }
};
