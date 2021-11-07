const db = require("../../../db/knex");

module.exports = async (id) => {
  return await db('customer')
      .where('id', id)
}
