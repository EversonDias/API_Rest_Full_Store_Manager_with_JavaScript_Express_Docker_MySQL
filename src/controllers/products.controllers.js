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

const saveProducts = async (req, res) => {
  const product = req.body;
  const newIdOfProduct = await productsServices.saveProducts(product);
  res.status(201).json({ id: newIdOfProduct, name: product.name });
};

module.exports = {
  getAll,
  getProductId,
  saveProducts,
};