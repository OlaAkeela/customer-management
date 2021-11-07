const customersRoutes = require('./customers')
const authRoutes = require('./auth')
const { graphqlHTTP } = require('express-graphql')
const schema = require('../db/schema')

module.exports = app => {
  app.use('/gql', graphqlHTTP({
    schema: schema,
    graphiql: true,
  }));
  app.use('/customer', customersRoutes)
  app.use('/', authRoutes)
}
