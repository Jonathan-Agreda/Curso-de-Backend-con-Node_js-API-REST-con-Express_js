const express = require('express');
const routerApi = require('./router');
const { logErrors, errorHandler } = require('./middlewares/error.handler');
const os = require('os');

const app = express();
const port = 3000;
const ip = os.networkInterfaces().wlo1[0].address;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World, It´s my Server in Express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hello, It´s a new endpoint');
});

routerApi(app);

//los middlewares siempre deben ir despues del ruteo y se ejecutan en el oren que se ubican uno tras el otro
app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on: http://${ip}:${port}`);
});
