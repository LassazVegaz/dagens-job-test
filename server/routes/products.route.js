const express = require('express');
const { Guid } = require('js-guid');
const schemas = require('../schemas');
const db = require('../db');
const filters = require('../lib/filters');

const router = express.Router();

router.post('/', (req, res) => {
  try {
    schemas.createSchema.validateSync(req.body);
    const product = {
      name: req.body.name,
      category: req.body.category,
      price: parseFloat(req.body.price),
      id: Guid.newGuid().toString(),
    };
    db.products.push(product);
    res.send(product);
  } catch (error) {
    res.status(400).send({ status: 400, message: error.message });
  }
});

router.get('/', (req, res) => {
  const { pageNo = 0, category, minPrice, maxPrice } = req.query;
  let products = db.products;

  filters.forEach((filter) => {
    products = filter({ products, category, minPrice, maxPrice });
  });

  const pageSize = 24;
  const start = (pageNo - 1) * pageSize;
  const end = start + pageSize;
  products = products.slice(start, end);

  res.send(db.products);
});

module.exports = router;
