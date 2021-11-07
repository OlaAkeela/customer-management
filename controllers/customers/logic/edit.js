const db = require("../../../db/knex");

module.exports = async (id, params) => {
  return await db('customer')
      .returning('*')
      .update(params)
      .where('id', id);
}
