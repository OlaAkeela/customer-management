const db = require("../../../db/knex");

module.exports = async (id) => {
  await db('customer')
      .where('id', id)
      .del();
  return true;
}
