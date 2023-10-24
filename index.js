const express = require('express');
const os = require('os');

const app = express();
const port = 3000;
const ip = os.networkInterfaces().wlo1[0].address;

app.get('/', (req, res) => {
  res.send('Hello World, It´s my Server in Express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hello, It´s a new endpoint');
});

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'Product 1',
      price: 1000,
    },
    {
      name: 'Product 2',
      price: 2000,
    }
  ]);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 2000,
  });
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

app.listen(port, () => {
  console.log(`Server running on: http://${ip}:${port}`);
});
