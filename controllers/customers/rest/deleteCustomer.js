const deleteCustomer = require('../logic/delete');

module.exports = async (req, res, next) => {
  try {
    const result = await deleteCustomer(req.params.customer_id);
    return next(result)
  } catch (e) {
    return next({
      status: 400,
      message: 'Error'
    })
  }
}
