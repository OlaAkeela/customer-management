const listCustomers = require('../logic/list');

module.exports = async (req, res, next) => {
  try {
    const customers = await listCustomers();
    return next({customers})
  } catch (e) {
    return next({
      status: 400,
      message: 'Error'
    })
  }
}
