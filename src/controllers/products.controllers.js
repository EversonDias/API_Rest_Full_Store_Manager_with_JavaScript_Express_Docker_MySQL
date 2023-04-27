const { productsServices } = require('../services');

const getAll = async (_req, res) => {
  const products = await productsServices.getAll();
  res.status(200).json(products);
};

const getProductId = async (req, res) => {
  const { id } = req.params;
  const productId = await productsServices.getProductId(id);
  if (productId.length < 1) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.status(200).json(productId[0]);
};

module.exports = {
  getAll,
  getProductId,
};