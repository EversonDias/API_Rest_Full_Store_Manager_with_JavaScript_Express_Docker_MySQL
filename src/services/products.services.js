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

module.exports = {
  getAll,
  getProductId,
  saveProducts,
};