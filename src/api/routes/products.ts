import { Router } from "express";

import ProductsController from "../controllers/ProductsController";

export default (router: Router) => {
  const productsRoute = Router();

  productsRoute.get("/", ProductsController.findAll);
  productsRoute.get("/:id", ProductsController.findById);

  router.use("/products", productsRoute);
  return router;
};
