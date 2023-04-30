const { salesModels } = require('../models');
const { HTTP: { status } } = require('../utils');

const newSales = async (sales) => {
  const result = await salesModels.newSales(sales);
  return { type: status.created, message: result };
};

const getAllSales = async () => {
  const result = await salesModels.getAllSales();
  return result;
};

const getSaleId = async (saleId) => {
  const result = await salesModels.getSaleId(saleId);
  if (result.length < 1) {
    return { type: status.notFound, message: { message: 'Sale not found' } };
  }
  return { type: status.ok, message: result };
};

module.exports = {
  newSales,
  getAllSales,
  getSaleId,
};