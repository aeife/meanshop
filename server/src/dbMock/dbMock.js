conn = new Mongo();
db = conn.getDB("meanshop");

// remove old db entries
db.products.remove();

load('Faker.js');

var productCount = 10;

// insert users
for (var i = 0; i < productCount; i++){
  db.products.insert({
    title: Faker.Lorem.words(1),
    description: Faker.Lorem.sentences(3),
    created: new Date()
  });
}
