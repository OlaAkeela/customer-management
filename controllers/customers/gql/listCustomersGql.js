const listCustomers = require('../logic/list');

module.exports = async (parent, args, context, resolveInfo) => {
  try {
    return listCustomers();
  } catch (err) {
    console.log('Error: ', err);
    throw new Error("Error");
  }
}
