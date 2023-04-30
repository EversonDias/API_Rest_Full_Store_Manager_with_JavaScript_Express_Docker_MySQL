const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products;',
  );
  return result;
};

const getProductId = async (id) => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [id],
  );
  return result;
};

const saveProducts = async ({ name }) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) value (?)',
    [name],
  );
  return insertId;
};

const updateProduct = async (newProduct, productId) => {
  const result = await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?;',
    [newProduct, productId],
  );
  return result;
};

module.exports = {
  getAll,
  getProductId,
  saveProducts,
  updateProduct,
};