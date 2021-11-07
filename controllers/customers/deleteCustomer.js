const db = require('../../db/knex')
module.exports = async (req, res, next) => {
  try {
    const result = await db('customer')
        .where('id', req.params.customer_id)
        .del()
    return next(result)
  } catch (e) {
    return next({
      status: 400,
      message: e
    })
  }
}
