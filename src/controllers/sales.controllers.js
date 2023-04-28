const { salesServices } = require('../services');
const { HTTP: { status } } = require('../utils');

const newSales = async (req, res) => {
  const sales = req.body;
  const result = await salesServices.newSales(sales);
  res.status(status.created).json(result);
};

module.exports = {
  newSales,
};