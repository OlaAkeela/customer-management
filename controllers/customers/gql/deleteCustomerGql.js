const deleteCustomer = require("../logic/delete");

module.exports = async (parent, args, context, resolveInfo) => {
  try {
    return await deleteCustomer(args.id);
  } catch (err) {
    console.log('Error: ', err)
    throw new Error("Failed to delete customer")
  }
}
