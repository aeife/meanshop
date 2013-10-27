var product = require('./product.js');

describe('product model', function() {

  it('should create new procut object', function(){
    var prod = new Category({
      title: 'testtitle',
      description: 'testdesc',
      created: new Date()
    });
    expect(prod.title).toEqual('testtitle');
  });

});
