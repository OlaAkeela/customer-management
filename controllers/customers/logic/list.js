const db = require("../../../db/knex");

module.exports = async () => {
  return await db('customer');
}
