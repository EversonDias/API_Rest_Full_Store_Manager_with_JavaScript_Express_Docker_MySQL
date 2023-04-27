const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM products;',
  );
  return result;
};

const getProductId = async (id) => {
  const [result] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [id],
  );
  return result;
};

getProductId(1);

module.exports = {
  getAll,
  getProductId,
};