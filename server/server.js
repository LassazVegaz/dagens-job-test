const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const db = require('./db');
const productsRoute = require('./routes/products.route');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/products', productsRoute);

http.createServer(app).listen(3001, () => {
  console.log('Listen on 0.0.0.0:3001');
});

process.on('SIGINT', function () {
  process.exit();
});
