const express = require('express');
const axios = require('axios');
const app = express();


const B_SERVER_URL = process.env.B_SERVER_URL || 'http://localhost:3000';

app.get('/sorted-products', async (req, res) => {
  try {
    const { data: products } = await axios.get(`${B_SERVER_URL}/products`);
    const sortBy = req.query.sort;

    if (sortBy === 'price') {
      products.sort((a, b) => {
        if (a.price === b.price) {
          return a.description.length - b.description.length;
        }
        return a.price - b.price;
      });
    } else if (sortBy === 'description') {
      products.sort((a, b) => {
        if (a.description.length === b.description.length) {
          return a.price - b.price;
        }
        return a.description.length - b.description.length;
      });
    }

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(4000, () => {
  console.log('A Server is running on port 4000');
});