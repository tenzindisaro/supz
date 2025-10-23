
const db = require('../../config/db');

async function testConnection() {
  try {
    const [rows] = await db.query('SELECT 1 + 1 AS result');
    return rows;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  testConnection
};
