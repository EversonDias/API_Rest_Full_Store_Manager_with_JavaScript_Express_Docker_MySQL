const connection = require('../models/connection');

const HTTP = {
  status: {
    ok: 200,
    created: 201,
    notFound: 404,
    badRequest: 400,
    unprocessableEntity: 422,
    noContent: 204,
  },
};

const getAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products;',
  );
  return result;
};

module.exports = {
  HTTP,
  getAll,
};