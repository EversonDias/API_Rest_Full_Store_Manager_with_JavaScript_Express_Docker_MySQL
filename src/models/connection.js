const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'store_manager_db',
  user: 'root',
  port: 3306,
  password: 'password',
});

module.exports = connection;