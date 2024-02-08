const express = require('express');
const { Guid } = require('js-guid');
const schemas = require('../schemas');
const db = require('../db');

const router = express.Router();

router.post('/', (req, res) => {
  try {
    schemas.createSchema.validateSync(req.body);
    const product = {
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
      id: Guid.newGuid().toString(),
    };
    db.products.push(product);
    res.send(product);
  } catch (error) {
    res.status(400).send({ status: 400, message: error.message });
  }
});

module.exports = router;
