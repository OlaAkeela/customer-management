const db = require("../../../db/knex");

module.exports = async (params) => {
  return await db('customer')
      .returning('id')
      .insert(params);
}
