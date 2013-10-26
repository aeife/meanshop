conn = new Mongo();
db = conn.getDB("meanshop");

// remove old db entries
db.products.remove();
db.categories.remove();

load('Faker.js');

var productCount = 10;

var categoryTitles = [
  'Notebook',
  'Tablets',
  'Smartphones',
  'Desktop',
  'Misc'
];
var categories = [];

// create categories
for (var i = 0, len = categoryTitles.length; i < len; i++){
  categories.push(ObjectId());
  db.categories.insert({
    _id: categories[i],
    title: categoryTitles[i],
    description: Faker.Lorem.sentences(3),
    created: new Date()
  });
}

// create products
for (var i = 0; i < productCount; i++){
  db.products.insert({
    title: Faker.Lorem.words(1)[0],
    description: Faker.Lorem.sentences(3),
    category: categories[Math.floor(Math.random() * (categories.length-1))],
    created: new Date()
  });
}
