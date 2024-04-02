const express = require('express');
const app = express();



app.get('/products', (req, res) => {
  // 樂器商品資訊
  let products = [
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
  if (req.query.specialCode) {
    if (req.query.specialCode === '177012') {
      let unshiftObject = {};
      unshiftObject = { name: '貝多芬手札', price: 0, description: '珍貴的貝多芬親筆手稿複製品,內含著名曲目草稿,見證音樂大師創作歷程。' }
      products.unshift(unshiftObject);
    } else {
      res.status(500).json({
        "message": 'wrong specialCode.'
      })
    }
  }
  res.json(products);
});

app.listen(8188, () => {
  console.log('B Server is running on port 8188');
});