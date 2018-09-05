require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer, gql } = require('apollo-server-express');
const bodyParser = require('body-parser')

let Stock = require('./models/Stock');
const {resolvers} = require('./controllers/resolvers');
const {typeDefs} = require('./graphql/typeDefs');

  const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
      await console.log("DB connected")
    } catch(error) { 
      console.error(error)
    }
  }

  connectDB()

//Initial App
const app = express();

//Port
const PORT = 4444

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({Stock})
  });

server.applyMiddleware({ app, bodyParserConfig:true });
  
app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
)