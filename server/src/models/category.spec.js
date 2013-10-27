var Category = require('./category.js');

describe('category model', function() {

  it('should create new category object', function(){
    var cat = new Category({
      title: 'testtitle',
      description: 'testdesc',
      created: new Date()
    });
    expect(cat.title).toEqual('testtitle');
  });

});
