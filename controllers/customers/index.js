const rest = require('./rest')
const graphql = require('./gql')
const apis = {
  ...rest,
  ...graphql
}

module.exports = apis;
