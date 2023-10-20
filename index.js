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
  res.json({
    name: 'Product 1',
    price: 500
  });
});

app.listen(port, () => {
  console.log(`Server running on: http://${ip}:${port}`);
});

