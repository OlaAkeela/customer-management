const graphql = require('graphql')
const db = require('./knex')

const QueryRoot = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    listCustomers: {
      type: new graphql.GraphQLList(Customer),
      resolve: async (parent, args, context, resolveInfo) => {
        return await db('customer')
      }
    },
    getCustomer: {
      type: Customer,
      args: { id: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) } },
      resolve: async (parent, args, context, resolveInfo) => {
        console.log('args.id:' , args.id)
        const result = await db('customer').where('id', args.id);
        return result.length ? result[0] : {}
      }
    },
  })
})

const MutationRoot = new graphql.GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    addCustomer: {
      type: Customer,
      args: {
        firstName: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        lastName: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        address: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        status: { type: CustomerStatus },
      },
      resolve: async (parent, args, context, resolveInfo) => {
        try {
          await db('customer').insert(args);
        } catch (err) {
          console.log('Error: ', err)
          throw new Error("Failed to insert new customer")
        }
      }
    },
    editCustomer: {
      type: Customer,
      args: {
        firstName: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        lastName: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        address: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        status: { type: CustomerStatus },
      },
      resolve: async (parent, args, context, resolveInfo) => {
        try {
          const res = await db('customer').update(args);
          console.log('res: ', res);
          return res;
        } catch (err) {
          console.log('Error: ', err)
          throw new Error("Failed to insert new customer")
        }
      }
    },
    deleteCustomer: {
      type: Customer,
      args: {
        id: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) }
      },
      resolve: async (parent, args, context, resolveInfo) => {
        try {
          const result = await db('customer')
              .where('id', req.params.customer_id)
              .del();
          console.log('res: ', result);
          return result
        } catch (err) {
          console.log('Error: ', err)
          throw new Error("Failed to insert new customer")
        }
      }
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