const { productsModels } = require('../models');

const getAll = async () => {
  const products = await productsModels.getAll();
  return products;
};

const getProductId = async (id) => {
  const productId = await productsModels.getProductId(id);
  return productId;
};

const saveProducts = async (product) => {
  const newIdOfProduct = await productsModels.saveProducts(product);
  return newIdOfProduct;
};

const updateProduct = async (newProduct, productId) => {
  const result = await productsModels.updateProduct(newProduct, productId);
  return result;
};

module.exports = {
  getAll,
  getProductId,
  saveProducts,
  updateProduct,
};