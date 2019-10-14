import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import express from "express";
import lusca from "lusca";

import routes from "../api/routes";
import config from "../config";

function loadExpress({ app }: { app: express.Application }) {
  app.enable("trust proxy");

  app.use(cors());

  app.set("port", process.env.PORT || 3000);
  app.use(compression());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(lusca.xframe("SAMEORIGIN"));
  app.use(lusca.xssProtection(true));

  // Load routes
  app.use(config.api.prefix, routes());

  return app;
}

export default loadExpress;
