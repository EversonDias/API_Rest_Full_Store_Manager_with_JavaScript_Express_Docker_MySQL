const { productsServices } = require('../services');
const { status } = require('../utils');

const getAll = async (_req, res) => {
  const products = await productsServices.getAll();
  res.status(status.ok).json(products);
};

const getProductId = async (req, res) => {
  const { id } = req.params;
  const productId = await productsServices.getProductId(id);
  if (productId.length < 1) {
    return res.status(status.notFound).json({ message: 'Product not found' });
  }
  res.status(status.ok).json(productId[0]);
};

const saveProducts = async (req, res) => {
  const product = req.body;
  const newIdOfProduct = await productsServices.saveProducts(product);
  res.status(status.created).json({ id: newIdOfProduct, name: product.name });
};

module.exports = {
  getAll,
  getProductId,
  saveProducts,
};