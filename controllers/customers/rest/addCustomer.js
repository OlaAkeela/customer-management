const addCustomer = require('../logic/add');

module.exports = async (req, res, next) => {
  try {
    const validationResult = validateInput(req.body);
    if (!validationResult.isValid) {
      throw validationResult.message
    }
    const result = await addCustomer(req.body);
    return next(result);
  } catch (e) {
    console.log('error: ', e);
    return next({
      status: 400,
      message: 'Error'
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
