const express = require("express");
import "reflect-metadata";

import Container from "typedi";
import { ApolloServer } from "apollo-server-express";
import { connect } from "mongoose";
import { buildSchema } from "type-graphql";
import { DataResolver } from "./modules/resolvers/data.resolver";
// Resolvers
// AuthChecker
declare const module: any;

async function bootstrap() {
  try {
    const mongoose = await connect("mongodb://localhost:27017/store", {
      useNewUrlParser: true
    });

    const app = express();
    const path = "/graphql";

    const schema = await buildSchema({
      container: Container,
      resolvers: [DataResolver]
    });

    const server = new ApolloServer({
      schema
    });

    server.applyMiddleware({ app, path });
    app.listen(process.env.PORT || 4000, () =>
      console.log(`Server ready at http://localhost:4000/${path} 🚀`)
    );
  } catch (err) {
    console.error(err);
  }
}

bootstrap();
