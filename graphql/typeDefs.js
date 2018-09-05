const {gql } = require('apollo-server-express');

exports.typeDefs = gql`
type Stock {
    _id: ID
    Supplier: String!
    Product: String!
    Price: String!
}

type Query {
    getAllStock : [Stock]
    getStock(_id: ID!) : Stock
}

type Mutation {
    addStock(Supplier: String!, Product: String!, Price: Int!): Stock
    deleteStock(_id: ID): Stock
  }

`


