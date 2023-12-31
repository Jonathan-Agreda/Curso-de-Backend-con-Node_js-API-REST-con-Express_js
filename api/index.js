const express = require('express');
const cors = require('cors');
const routerApi = require('./router');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');
//const os = require('os');

const app = express();
const port = process.env.PORT || 3000;
//const ip = os.networkInterfaces().wlo1[0].address;

app.use(express.json());

const whitelist = ['http://localhost:3000', 'http://127.0.0.1:5500'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no autorizado'));
    }
  }
};
app.use(cors(options));

app.get('/api', (req, res) => {
  res.send('Hello World, It´s my Server in Express');
});

app.get('/api/nueva-ruta', (req, res) => {
  res.send('Hello, It´s a new endpoint');
});

routerApi(app);

//los middlewares siempre deben ir despues del ruteo y se ejecutan en el oren que se ubican uno tras el otro
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});
