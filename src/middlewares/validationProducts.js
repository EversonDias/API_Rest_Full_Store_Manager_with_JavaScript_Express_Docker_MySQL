const { HTTP: { status }, getAll } = require('../utils');

const hasName = (req, res, next) => {
  const product = req.body;
  if (!['name'].every((key) => key in product)) {
    res.status(status.badRequest)
      .json({
        message: '"name" is required',
      });
  } else {
    next();
  }
};

const validationQuantifyCharacter = (req, res, next) => {
  const product = req.body;
  const minCharacter = 5;
  if (product.name.length < minCharacter) {
    res.status(status.unprocessableEntity)
      .json({
        message: '"name" length must be at least 5 characters long',
      });
  } else {
    next();
  }
};

const hasProductId = async (req, res, next) => {
  const { id } = req.params;
  const allProduct = await getAll();
  const listOfProductId = allProduct.map((product) => product.id);
  if (!listOfProductId.includes(Number(id))) {
    res.status(status.notFound).json({ message: 'Product not found' });
  } else {
    next();
  }
};

module.exports = {
  hasName,
  validationQuantifyCharacter,
  hasProductId,
};