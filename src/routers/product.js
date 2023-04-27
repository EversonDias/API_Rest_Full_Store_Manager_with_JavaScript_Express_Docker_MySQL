const express = require('express');
const { productsControllers } = require('../controllers');

const router = express.Router();

router.get('/', productsControllers.getAll);
router.get('/:id', productsControllers.getProductId);
router.post('/', productsControllers.saveProducts);

module.exports = router;