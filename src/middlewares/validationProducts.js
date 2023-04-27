const hasName = (req, res, next) => {
  const product = req.body;
  if (!['name'].every((key) => key in product)) {
    res.status(400).json({ message: '"name" is required' });
  }
  next();
};

const validationQuantifyCharacter = (req, res, next) => {
  const product = req.body;
  const minCharacter = 5;
  if (product.name.length < minCharacter) {
    res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }
  next();
};

module.exports = {
  hasName,
  validationQuantifyCharacter,
};