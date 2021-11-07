const getCustomer = require('../logic/get');

module.exports = async (parent, args, context, resolveInfo) => {
  try {
    if (!args.id) {
      throw 'Customer id is required.'
    }
    const result = await getCustomer(args.id)
    return result.length ? result[0] : {}
  } catch (e) {
    console.log('Error: ', err);
    throw new Error("Error");
  }
}
