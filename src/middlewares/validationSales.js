const { HTTP: { status }, getAll } = require('../utils');

const hasKeyProductId = (req, res, next) => {
  const sales = req.body;
  const isTrue = sales.map((sale) => !['productId'].every((key) => key in sale));
  if (isTrue.includes(true)) {
    res.status(status.badRequest)
      .send({ message: '"productId" is required' });
  } else {
    next();
  }
};

const hasKeyQuantity = (req, res, next) => {
  const sales = req.body;
  const isTrue = sales.map((sale) => !['quantity'].every((key) => key in sale));
  if (isTrue.includes(true)) {
    res.status(status.badRequest)
      .send({ message: '"quantity" is required' });
  } else {
    next();
  }
};

const valueMinQuantity = (req, res, next) => {
  const sales = req.body;
  const isTrue = sales.map(({ quantity }) => {
    if (quantity <= 0) {
      return true;
    } 
      return false;
  });
  if (isTrue.includes(true)) {
    res.status(status.unprocessableEntity)
      .send({ message: '"quantity" must be greater than or equal to 1' });
  } else {
    next();
  }
};

const hasProductIdInDatabase = async (req, res, next) => {
  const sales = req.body;
  const allProduct = await getAll();
  const listOfProductId = allProduct.map(({ id }) => id);
  const isTrue = sales.map(({ productId }) => !listOfProductId.includes(productId));
  if (isTrue.includes(true)) {
    res.status(status.notFound)
      .send({ message: 'Product not found' });
  } else {
    next();
  }
};

module.exports = {
  hasKeyProductId,
  hasKeyQuantity,
  valueMinQuantity,
  hasProductIdInDatabase,
};