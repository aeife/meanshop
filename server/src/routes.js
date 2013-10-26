module.exports = {
  addRoutes: function (app, handlers){
    app.get('/products', handlers.products.getAll);
    app.get('/categories', handlers.categories.getAll);
  }
};
