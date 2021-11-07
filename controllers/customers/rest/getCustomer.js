const getCustomer = require('../logic/get');

module.exports = async (req, res, next) => {
  try {
    if (!req.params.customer_id) {
      throw 'Customer id is required.'
    }
    const result = await getCustomer(req.params.customer_id);
    return next(result)
  } catch (e) {
    return next({
      status: 400,
      message: 'Error'
    })
  }
}
