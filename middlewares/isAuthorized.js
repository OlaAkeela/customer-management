const jwt = require('jsonwebtoken')
const db = require('../db/knex')

module.exports = async (req, res, next) => {
  // TODO : Gather the jwt access token from the request header
  next()
  return
  const token = req.headers['authorization']
  if (token == null) {
    return res.status(401).json({
      status: false,
      data: {},
      feedback: {
        en: 'Invalid token',
        ar: 'Invalid token'
      }
    })
  }

  // check if DEV user
  jwt.verify(token, process.env.jwtSecretKey, async (err, user) => {
    if (err) {
      return res.status(401).json(err)
    }
    next() // pass the execution off to whatever request the client intended
  })
}
