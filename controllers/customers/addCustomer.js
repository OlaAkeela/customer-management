const db = require('../../db/knex')
module.exports = async (req, res, next) => {
  try {
    const validationResult = validateInput(req.body);
    if (!validationResult.isValid) {
      throw validationResult.message
    }
    await db('customer').insert(req.body);
    return next(true)
  } catch (e) {
    return next({
      status: 400,
      message: e
    })
  }
}

const validateInput = (params) => {
  let err = false;
  let message = {};
  if (params.status && !['Active', 'Inactive'].includes(params.status)) {
    err = true
    message['status'] = "status should be either 'Active' or 'Inactive'"
  }
  return {
    isValid: !err,
    message
  }
}
