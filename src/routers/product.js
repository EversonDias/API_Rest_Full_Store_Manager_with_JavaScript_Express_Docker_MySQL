const express = require('express');
const { productsControllers } = require('../controllers');
const {
  hasName,
  validationQuantifyCharacter,
  hasProductId,
} = require('../middlewares/validationProducts');

const router = express.Router();

router.get('/', productsControllers.getAll);
router.get('/:id', productsControllers.getProductId);
router.post('/', hasName, validationQuantifyCharacter, productsControllers.saveProducts);
router.post(
  '/:id',
  hasName,
  validationQuantifyCharacter,
  hasProductId,
  productsControllers.updateProduct,
);

router.delete('/:id', hasProductId, productsControllers.deleteProduct);

module.exports = router;