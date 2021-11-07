const editCustomer = require("../logic/edit");

module.exports = async (parent, args, context, resolveInfo) => {
  try {
    const result = await editCustomer(args.id, args);
    return result.length ? result[0] : null
  } catch (err) {
    console.log('Error: ', err)
    throw new Error("Failed to edit customer")
  }
}
