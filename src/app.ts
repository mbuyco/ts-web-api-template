import "reflect-metadata";

import errorHandler from "errorhandler";
import express from "express";
import { Container } from "typedi";

import config from "./config";
import Loader from "./loaders";

async function startServer() {
  const app = express();

  // Load dependencies
  const loader = new Loader({ app });
  await loader.init();

  const logger: any = Container.get("logger");

  app.use(errorHandler());

  app.listen(config.port, (err) => {
    if (err) {
      logger.error(err);
      process.exit(1);
      return;
    }

    logger.info("Server listening at port " + config.port);
  });
}

export default startServer;
