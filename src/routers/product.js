const express = require('express');
const { productsControllers } = require('../controllers');
const { hasName, validationQuantifyCharacter } = require('../middlewares/validationProducts');

const router = express.Router();

router.get('/', productsControllers.getAll);
router.get('/:id', productsControllers.getProductId);
router.post('/', hasName, validationQuantifyCharacter, productsControllers.saveProducts);

module.exports = router;