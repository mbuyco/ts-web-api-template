import express from "express";

import { Container } from "typedi";

// Loaders
import loadExpress from "./express";
import logger from "./logger";
import loadMongoose from "./mongoose";

class Loader {
  private app: express.Application;

  constructor({ app }: { app: express.Application }) {
    this.app = app;
  }

  public async init() {
    // Set logger to container
    Container.set("logger", logger);

    // Load mongodb connection
    await loadMongoose({ logger });

    // Load express app
    loadExpress({ app: this.app });
  }
}

export default Loader;
