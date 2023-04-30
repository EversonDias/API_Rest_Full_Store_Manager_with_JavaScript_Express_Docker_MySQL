const { salesServices } = require('../services');
const { HTTP: { status } } = require('../utils');

const newSales = async (req, res) => {
  const sales = req.body;
  const result = await salesServices.newSales(sales);
  res.status(result.type).json(result.message);
};

const getAllSales = async (_req, res) => {
  const result = await salesServices.getAllSales();
  res.status(status.ok).json(result);
};

const getSaleId = async (req, res) => {
  const { id } = req.params;
  const result = await salesServices.getSaleId(id);
  res.status(result.type).json(result.message);
};

module.exports = {
  newSales,
  getAllSales,
  getSaleId,
};