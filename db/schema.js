const graphql = require('graphql')
const { addCustomerGql, editCustomerGql, deleteCustomerGql, getCustomerGql, listCustomersGql } = require('../controllers/customers')

const QueryRoot = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    listCustomers: {
      type: new graphql.GraphQLList(Customer),
      resolve: listCustomersGql
    },
    getCustomer: {
      type: Customer,
      args: { id: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) } },
      resolve: getCustomerGql
    },
  })
})

const MutationRoot = new graphql.GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    addCustomer: {
      type: graphql.GraphQLString,
      args: {
        firstName: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        lastName: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        address: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        status: { type: CustomerStatus },
      },
      resolve: addCustomerGql
    },
    editCustomer: {
      type: Customer,
      args: {
        firstName: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        lastName: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        address: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        status: { type: CustomerStatus },
        id: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) }
      },
      resolve: editCustomerGql
    },
    deleteCustomer: {
      type: graphql.GraphQLBoolean,
      args: {
        id: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) }
      },
      resolve: deleteCustomerGql
    },
  })
})

const Customer = new graphql.GraphQLObjectType({
  name: 'Customer',
  fields: () => ({
    id: { type: graphql.GraphQLString },
    firstName: { type: graphql.GraphQLString },
    lastName: { type: graphql.GraphQLString },
    address: { type: graphql.GraphQLString },
    status: { type: graphql.GraphQLString }
  })
});

const CustomerStatus = new graphql.GraphQLEnumType({
  name: 'CustomerStatus',
  values: {
    active: { value: 'active' },
    inactive: { value: 'inactive' }
  }
});

Customer._typeConfig = {
  sqlTable: 'customer',
  uniqueKey: 'id',
}

const schema = new graphql.GraphQLSchema({
  query: QueryRoot,
  mutation: MutationRoot
});

module.exports = schema;