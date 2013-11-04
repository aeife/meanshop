module.exports = {
  addRoutes: function (app, handlers){
    app.get('/products', handlers.products.getAll);
    app.get('/products/:productId', handlers.products.get);
    app.get('/categories', handlers.categories.getAll);
    app.post('/login', handlers.auth.login);
  }
};
