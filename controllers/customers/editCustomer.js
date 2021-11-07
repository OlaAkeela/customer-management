const db = require('../../db/knex')
module.exports = async (req, res, next) => {
  try {
    const result = await db('customer')
        .update(req.body)
        .where('id', req.params.customer_id)
    return next(true)
  } catch (e) {
    return next({
      status: 400,
      message: e
    })
  }
}
