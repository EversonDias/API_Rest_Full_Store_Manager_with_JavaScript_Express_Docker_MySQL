const { productsServices } = require('../services');
const { HTTP: { status } } = require('../utils');

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

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const newProduct = req.body;
  await productsServices.updateProduct(newProduct.name, id);
  res.status(status.ok).json({ id, ...newProduct });
};

module.exports = {
  getAll,
  getProductId,
  saveProducts,
  updateProduct,
};