import { Router } from "express";

// Import all routes here
import productsRoute from "./products";

export default () => {
  const router = Router();

  // Attach routes
  productsRoute(router);

  return router;
};
