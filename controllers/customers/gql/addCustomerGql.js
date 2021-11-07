const addCustomer = require("../logic/add");

module.exports = async (parent, args, context, resolveInfo) => {
  try {
    const result = await addCustomer(args);
    return result.length ? result[0] : null
  } catch (err) {
    console.log('Error: ', err)
    throw new Error("Failed to insert new customer")
  }
}
