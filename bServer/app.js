const express = require('express');
const app = express();

// 樂器商品資訊
const products = [
  { name: 'Guitar', price: 500, description: 'A classic acoustic guitar' },
  { name: 'Piano', price: 2000, description: 'A beautiful grand piano' },
  { name: 'Drums', price: 800, description: 'A complete drum set' },
  { name: 'Violin', price: 300, description: 'An elegant violin' },
  { name: 'Trumpet', price: 200, description: 'A shiny brass trumpet' },
  { name: 'Saxophone', price: 700, description: 'A smooth alto saxophone' },
  { name: 'Flute', price: 150, description: 'A melodious flute' },
  { name: 'Cello', price: 1200, description: 'A deep-toned cello' },
  { name: 'Clarinet', price: 400, description: 'A versatile clarinet' },
  { name: 'Trombone', price: 600, description: 'A powerful trombone' }
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(3000, () => {
  console.log('B Server is running on port 3000');
});