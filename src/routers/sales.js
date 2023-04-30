const express = require('express');
const { salesControllers } = require('../controllers');
const {
  hasKeyProductId,
  hasKeyQuantity,
  valueMinQuantity,
  hasProductIdInDatabase,
} = require('../middlewares/validationSales');

const router = express.Router();

router.post(
  '/',
  hasKeyProductId,
  hasKeyQuantity,
  valueMinQuantity,
  hasProductIdInDatabase,
  salesControllers.newSales,
);

router.get(
  '/',
  salesControllers.getAllSales,
);

router.get(
  '/:id',
  salesControllers.getSaleId,
);

module.exports = router;