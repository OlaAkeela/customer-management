const db = require('../../db/knex')
module.exports = async (req, res, next) => {
  try {
    if (!req.params.customer_id) {
      throw 'Customer id is required.'
    }
    const result = await db('customer')
        .where('id', req.params.customer_id);
    return next(result)
  } catch (e) {
    return next({
      status: 400,
      message: e
    })
  }
}
