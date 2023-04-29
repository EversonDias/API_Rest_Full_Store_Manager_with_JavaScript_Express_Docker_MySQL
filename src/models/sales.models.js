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

module.exports = {
  newSales,
};