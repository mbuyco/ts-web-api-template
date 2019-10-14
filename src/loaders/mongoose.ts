import bluebird from "bluebird";
import { Db } from "mongodb";
import mongoose from "mongoose";

import config from "../config";

async function loadMongoose({ logger }: { logger: any }): Promise<Db> {
  mongoose.Promise = bluebird;
  const connect = await mongoose.connect(config.databaseUrl, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then((connection) => {
      logger.info("Connected to MongoDB successfully");
      return connection;
    })
    .catch((err) => {
      logger.error("MongoDB connection error. Please make sure MongoDB is running. " + err);
      return err;
    });

  return connect.connection.db;
}

export default loadMongoose;
