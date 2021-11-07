const editCustomer = require('../logic/edit');

module.exports = async (req, res, next) => {
  try {
    const result = await editCustomer(req.params.customer_id, req.body)
    return next(result)
  } catch (e) {
    return next({
      status: 400,
      message: 'Error'
    })
  }
}
