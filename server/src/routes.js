module.exports = {
  addRoutes: function (app, handlers){
    app.get('/products', handlers.products.getAll);
  }
};
