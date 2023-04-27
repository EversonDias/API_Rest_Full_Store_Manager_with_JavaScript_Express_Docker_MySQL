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

const saveProducts = async ({ name }) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO products (name) value (?)',
    [name],
  );
  return insertId;
};

module.exports = {
  getAll,
  getProductId,
  saveProducts,
};