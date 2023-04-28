const { salesModels } = require('../models');

const newSales = async (sales) => {
  const result = await salesModels.newSales(sales);
  return result;
};

module.exports = {
  newSales,
};