conn = new Mongo();
db = conn.getDB("meanshop");

// remove old db entries
db.products.remove();

load('Faker.js');

var productCount = 10;

var categories = [
  'Notebook',
  'Tablets',
  'Smartphones',
  'Desktop',
  'Misc'
];

// insert users
for (var i = 0; i < productCount; i++){
  db.products.insert({
    title: Faker.Lorem.words(1)[0],
    description: Faker.Lorem.sentences(3),
    category: categories[Math.floor(Math.random() * (categories.length-1))],
    created: new Date()
  });
}
