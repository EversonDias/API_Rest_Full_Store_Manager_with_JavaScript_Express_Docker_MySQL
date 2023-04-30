const connection = require('./connection');

const newSales = async (sales) => {
  const [{ insertId }] = await connection.execute(
   'INSERT INTO StoreManager.sales () value ();',
  );
  sales.forEach(({ productId, quantity }) => {
    connection.execute(
      'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)  values (?, ?, ?);',
      [insertId, productId, quantity],
    );
  });

  const result = {
    id: insertId,
    itemsSold: sales,
  };
  return result;
};

const getAllSales = async () => {
  const [result] = await connection.execute(
    `SELECT sale_id AS  saleId,
      (SELECT date FROM StoreManager.sales WHERE id = sp.sale_id) AS date,
      product_id AS productId,
      quantity
    FROM StoreManager.sales_products AS sp`,
  );
  return result;
};

const getSaleId = async (saleId) => {
  const [result] = await connection.execute(
    `SELECT 
      (SELECT date FROM StoreManager.sales WHERE id = sp.sale_id) AS date,
      product_id AS productId,
      quantity
    FROM StoreManager.sales_products AS sp WHERE sp.sale_id = ?`,
    [saleId],
  );
  return result;
};

module.exports = {
  newSales,
  getAllSales,
  getSaleId,
};