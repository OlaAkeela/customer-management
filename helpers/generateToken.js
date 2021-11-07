require("dotenv").config()
const jwt = require('jsonwebtoken')
module.exports = (user_id) => {
  return jwt.sign({ user_id }, process.env.jwtSecretKey);
}