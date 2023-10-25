const express = require('express');
const routerApi = require('./router');
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

routerApi(app);

app.listen(port, () => {
  console.log(`Server running on: http://${ip}:${port}`);
});
