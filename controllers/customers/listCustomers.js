const db = require('../../db/knex')
module.exports = async (req, res, next) => {
  try {
    const customers = await db('customer');
    return next({customers})
  } catch (e) {
    return next({
      status: 400,
      message: e
    })
  }
}
